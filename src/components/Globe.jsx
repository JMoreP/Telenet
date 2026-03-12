import { useEffect, useRef, useState } from 'react'
import './Globe.css'

// ─── Proyección Ortográfica ───────────────────────────────────────────────
// Centro del globo: lat0=15°N, lon0=-78° (Américas)
const LAT0 = 15 * Math.PI / 180
const LON0 = -78 * Math.PI / 180
const R = 178  // radio en píxeles (viewBox 400x400, centro 200,200)

function project(latDeg, lonDeg) {
  const lat = latDeg * Math.PI / 180
  const lon = lonDeg * Math.PI / 180 - LON0
  const visible =
    Math.sin(LAT0) * Math.sin(lat) +
    Math.cos(LAT0) * Math.cos(lat) * Math.cos(lon) > 0.0
  const x = 200 + R * Math.cos(lat) * Math.sin(lon)
  const y = 200 - R * (Math.cos(LAT0) * Math.sin(lat) - Math.sin(LAT0) * Math.cos(lat) * Math.cos(lon))
  return { x, y, visible }
}

// ─── Coordenadas de continentes [lat, lon] ────────────────────────────────
const LAND_DOTS = [
  // ── ALASKA ──
  [71,-157],[70,-162],[68,-166],[66,-165],[64,-166],[62,-165],[60,-165],
  [60,-161],[62,-158],[64,-158],[64,-152],[66,-152],[68,-148],[66,-144],
  [63,-145],[60,-146],[58,-136],[56,-132],[58,-138],[60,-140],[62,-145],

  // ── CANADÁ OESTE ──
  [60,-137],[60,-132],[60,-127],[58,-130],[56,-130],[55,-128],[55,-124],
  [54,-124],[52,-128],[50,-127],[49,-124],[60,-120],[60,-115],[60,-110],
  [60,-105],[55,-118],[55,-112],[55,-107],[55,-100],[58,-114],[58,-108],
  [58,-102],[56,-106],[56,-100],[54,-110],[54,-103],[52,-110],[52,-106],
  [50,-117],[50,-112],[50,-107],[50,-100],[48,-110],[48,-103],

  // ── CANADÁ CENTRO-ESTE ──
  [60,-100],[60,-95],[60,-90],[60,-85],[60,-80],[60,-75],
  [55,-95],[55,-88],[55,-82],[55,-76],[55,-70],[52,-95],
  [52,-88],[52,-80],[52,-74],[50,-80],[50,-74],[50,-68],
  [48,-90],[48,-85],[48,-80],[48,-75],[48,-70],[48,-65],
  [47,-85],[47,-80],[47,-76],[47,-71],[47,-67],[45,-74],[45,-68],
  [68,-95],[68,-88],[68,-80],[68,-72],[68,-65],[70,-95],
  [70,-85],[70,-75],[70,-65],[72,-88],[72,-80],[72,-70],[74,-90],[74,-80],

  // ── GROENLANDIA ──
  [76,-50],[76,-42],[76,-36],[72,-24],[70,-24],[68,-28],[66,-38],
  [68,-44],[70,-44],[72,-50],[74,-56],[76,-58],[78,-60],[80,-65],
  [80,-50],[82,-45],[82,-30],[80,-22],[78,-22],[76,-26],[74,-22],

  // ── USA ESTE ──
  [47,-97],[47,-93],[45,-93],[45,-90],[43,-88],[42,-88],[42,-83],
  [42,-80],[42,-78],[41,-75],[40,-75],[39,-77],[38,-77],[38,-76],
  [37,-77],[36,-77],[35,-77],[34,-79],[33,-80],[32,-81],[30,-81],
  [29,-81],[28,-81],[26,-80],[25,-80],[26,-82],[27,-82],[29,-83],
  [30,-84],[30,-88],[30,-90],[31,-90],[32,-90],[33,-90],[34,-90],
  [35,-90],[35,-87],[36,-87],[37,-88],[38,-88],[39,-87],[40,-87],
  [41,-88],[42,-86],[43,-86],[44,-85],[45,-85],[45,-83],[46,-85],
  [46,-84],[44,-77],[43,-77],[42,-77],[41,-73],[40,-74],[41,-72],
  [42,-71],[43,-71],[44,-71],[44,-70],[44,-68],[45,-68],[46,-68],
  [47,-70],[46,-70],[45,-64],[44,-64],[44,-66],[45,-62],[46,-60],

  // ── USA CENTRO ──
  [47,-100],[45,-100],[43,-100],[41,-100],[39,-98],[37,-98],[35,-98],
  [33,-97],[31,-97],[29,-98],[27,-98],[26,-98],[28,-100],[30,-100],
  [32,-100],[34,-100],[36,-100],[38,-100],[40,-100],[42,-100],[44,-100],
  [29,-95],[30,-93],[31,-92],[32,-92],[33,-92],[29,-90],[28,-88],

  // ── USA OESTE ──
  [47,-124],[46,-124],[45,-124],[44,-124],[43,-124],[42,-124],[41,-124],
  [40,-124],[38,-122],[37,-122],[36,-122],[35,-120],[34,-118],[33,-117],
  [32,-117],[40,-120],[42,-121],[44,-121],[46,-121],[48,-122],
  [47,-118],[45,-118],[43,-118],[41,-118],[39,-118],[37,-118],[36,-118],
  [40,-112],[42,-112],[44,-112],[46,-112],[40,-106],[42,-108],[44,-108],
  [36,-106],[34,-106],[32,-105],[30,-104],[28,-104],

  // ── MÉXICO ──
  [30,-113],[28,-113],[26,-110],[24,-108],[22,-106],[20,-105],[18,-102],
  [17,-101],[17,-100],[18,-96],[18,-94],[18,-92],[19,-91],[19,-90],
  [20,-89],[20,-88],[21,-88],[21,-87],[22,-88],[23,-90],[24,-90],
  [25,-90],[26,-90],[27,-110],[28,-111],[30,-109],[28,-107],[26,-108],
  [24,-107],[22,-104],[20,-103],[19,-104],[18,-104],[17,-96],[16,-94],
  [16,-92],[15,-92],[16,-90],[17,-90],[17,-88],[18,-86],

  // ── CENTROAMÉRICA ──
  [15,-90],[14,-90],[13,-89],[12,-87],[11,-86],[10,-85],[10,-84],
  [9,-83],[9,-82],[9,-80],[9,-79],[8,-78],[8,-77],[9,-76],
  [10,-75],[11,-74],[12,-72],[11,-72],[10,-72],[10,-73],

  // ── CARIBE ──
  [23,-82],[22,-80],[20,-77],[18,-77],[18,-72],[18,-70],[17,-62],
  [14,-60],[13,-62],[15,-62],[16,-62],[17,-64],[18,-66],[20,-75],
  [22,-75],[24,-76],[25,-77],[27,-79],

  // ── NORTE SUDAMÉRICA ──
  [12,-72],[11,-70],[10,-68],[8,-65],[7,-62],[6,-60],[4,-57],
  [2,-55],[1,-53],[0,-52],[0,-50],[2,-52],[4,-55],[6,-57],
  [7,-60],[8,-62],[10,-64],[11,-66],[12,-68],[11,-74],[10,-75],
  [10,-76],[9,-77],[8,-78],[7,-78],[6,-77],[5,-77],[4,-77],
  [3,-76],[2,-75],[1,-78],[0,-78],[0,-80],[1,-80],[2,-78],

  // ── VENEZUELA / COLOMBIA ──
  [12,-72],[11,-70],[10,-68],[9,-66],[8,-63],[7,-60],[6,-62],
  [5,-60],[4,-58],[3,-56],[3,-60],[4,-62],[5,-64],[6,-66],
  [7,-68],[8,-70],[10,-72],[11,-72],[12,-70],[11,-62],[10,-62],

  // ── BRASIL NORTE ──
  [5,-52],[4,-52],[2,-52],[0,-52],[0,-56],[2,-56],[4,-56],
  [4,-58],[2,-58],[0,-60],[2,-60],[4,-60],[4,-62],[2,-62],
  [0,-64],[2,-64],[4,-64],[4,-66],[2,-66],[0,-66],
  [0,-68],[2,-68],[4,-68],[2,-70],[0,-70],[0,-72],[2,-72],

  // ── BRASIL CENTRO-ESTE ──
  [-2,-50],[-4,-40],[-4,-38],[-5,-36],[-6,-36],[-7,-35],
  [-8,-35],[-8,-38],[-9,-38],[-10,-38],[-12,-38],[-12,-40],
  [-14,-40],[-14,-42],[-16,-40],[-16,-42],[-18,-40],[-18,-42],
  [-20,-40],[-20,-42],[-22,-42],[-22,-44],[-24,-44],[-24,-46],
  [-26,-48],[-26,-50],[-28,-50],[-28,-52],[-30,-52],[-30,-54],
  [-32,-52],[-32,-54],[-34,-54],[-34,-56],[-33,-52],[-31,-52],

  // ── BRASIL INTERIOR ──
  [-5,-55],[-5,-58],[-5,-60],[-5,-62],[-5,-65],[-5,-68],
  [-8,-60],[-8,-63],[-8,-66],[-8,-70],[-10,-55],[-10,-58],
  [-10,-60],[-10,-65],[-12,-55],[-12,-58],[-12,-62],[-12,-65],
  [-15,-58],[-15,-55],[-15,-52],[-15,-60],[-15,-65],[-18,-52],
  [-18,-55],[-18,-58],[-18,-62],[-20,-52],[-20,-55],[-20,-58],

  // ── COSTA PACÍFICA SUDAmérica ──
  [-2,-78],[-4,-80],[-5,-80],[-6,-80],[-8,-78],[-8,-76],
  [-10,-76],[-10,-78],[-12,-76],[-12,-78],[-14,-76],[-14,-78],
  [-16,-74],[-18,-70],[-18,-72],[-20,-70],[-20,-68],[-22,-68],
  [-22,-70],[-24,-70],[-24,-68],[-26,-70],[-26,-68],[-28,-70],
  [-28,-68],[-30,-70],[-32,-70],[-34,-72],[-36,-72],[-38,-73],
  [-40,-73],[-42,-74],[-44,-74],[-46,-74],[-48,-76],[-50,-74],
  [-52,-72],[-54,-70],[-55,-68],[-55,-66],[-54,-66],[-52,-68],

  // ── ARGENTINA/CHILE ──
  [-30,-60],[-32,-60],[-34,-60],[-34,-58],[-36,-60],[-36,-62],
  [-38,-64],[-40,-64],[-40,-66],[-42,-65],[-44,-66],[-44,-68],
  [-46,-66],[-46,-68],[-48,-68],[-48,-70],[-50,-70],[-52,-70],
  [-54,-70],[-55,-67],[-54,-65],[-52,-65],[-50,-68],[-48,-66],

  // ── EUROPA OCCIDENTAL (visible en borde derecho) ──
  [51,0],[50,-4],[49,-2],[47,2],[47,0],[44,1],[43,3],[42,2],
  [40,-4],[42,0],[44,-2],[46,2],[48,2],[50,2],[52,4],[54,8],
  [56,10],[56,14],[58,12],[60,12],[60,6],[58,6],[56,8],[54,10],
  [54,12],[52,8],[52,5],[50,5],[48,8],[46,6],[44,6],[42,0],
  [40,0],[39,0],[38,-8],[40,-8],[42,-8],[44,-8],[44,-6],[43,-1],
  [42,1],[41,1],[40,0],[40,2],[39,3],[38,0],[37,0],

  // ── ÁFRICA NOROESTE (borde derecho) ──
  [36,0],[35,-2],[34,-5],[32,-8],[30,-10],[28,-12],[26,-14],
  [24,-16],[22,-16],[20,-16],[18,-16],[16,-16],[14,-16],[12,-16],
  [10,-14],[8,-15],[6,-10],[4,-8],[2,-10],[0,-10],[2,-12],
  [4,-10],[6,-12],[8,-12],[10,-12],[12,-12],[14,-14],[16,-14],
  [14,-2],[12,-4],[10,-2],[8,-2],[6,2],[4,4],[2,4],[0,6],
  [4,8],[6,6],[8,6],[10,4],[12,2],[14,0],[14,4],[16,2],
  [18,0],[18,4],[16,6],[14,8],[12,8],[10,10],[12,12],[14,10],
]

// ─── Nodos de conexión [lat, lon] ────────────────────────────────────────
const NODES = [
  [40, -74],    // Nueva York
  [-23, -43],   // São Paulo
  [19, -99],    // Ciudad de México
  [4, -74],     // Bogotá
  [51, -0.1],   // Londres
]

// ─── Líneas de conexión entre nodos ─────────────────────────────────────
const CONNECTIONS = [
  [0, 2], // NY ↔ México
  [0, 3], // NY ↔ Bogotá
  [1, 3], // SP ↔ Bogotá
  [1, 2], // SP ↔ México
  [0, 4], // NY ↔ Londres
  [3, 4], // Bogotá ↔ Londres
]

// ─── Grid de graticulas ─────────────────────────────────────────────────
function buildGridLines() {
  const lines = []
  // Latitudes: -80 a 80 cada 20°
  for (let lat = -80; lat <= 80; lat += 20) {
    const pts = []
    for (let lon = -180; lon <= 180; lon += 3) {
      const p = project(lat, lon)
      if (p.visible) pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`)
    }
    if (pts.length > 2) lines.push({ type: 'lat', d: `M ${pts.join(' L ')}` })
  }
  // Longitudes: -180 a 175 cada 20°
  for (let lon = -180; lon < 180; lon += 20) {
    const pts = []
    for (let lat = -90; lat <= 90; lat += 3) {
      const p = project(lat, lon)
      if (p.visible) pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`)
    }
    if (pts.length > 2) lines.push({ type: 'lon', d: `M ${pts.join(' L ')}` })
  }
  return lines
}

const GRID = buildGridLines()
const PROJECTED_DOTS = LAND_DOTS
  .map(([lat, lon]) => project(lat, lon))
  .filter(p => p.visible)
const PROJECTED_NODES = NODES.map(([lat, lon]) => project(lat, lon))

export default function Globe({ scrollProgress }) {
  // calculate scale & opacity based on scrollProgress (0 to 1)
  // If no scrollProgress is provided, default to visible state
  const isAnimated = typeof scrollProgress !== 'undefined'
  const progress = isAnimated ? scrollProgress : 1
  
  // Escala inicial de 1.6 bajando a 1.0 (tamaño original) a medida que progress aumenta de 0 a 1
  const scale = 1.6 - (progress * 0.6)
  
  // Fade-in rápido al inicio del scroll
  const opacity = progress > 0.05 ? 1 : progress * 20

  return (
    <div 
      className="globe-wrap" 
      style={{ 
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity: opacity,
        transition: isAnimated ? 'none' : undefined
      }}
    >
      <svg viewBox="0 0 400 400" className="globe-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Gradiente del globo — azul oscuro con luz superior izquierda */}
          <radialGradient id="gGlobe" cx="36%" cy="32%" r="65%">
            <stop offset="0%"   stopColor="#1B4580" stopOpacity="0.95" />
            <stop offset="40%"  stopColor="#0E2A55" stopOpacity="0.98" />
            <stop offset="75%"  stopColor="#071630" stopOpacity="1"    />
            <stop offset="100%" stopColor="#030B1A" stopOpacity="1"    />
          </radialGradient>

          {/* Halo atmosférico */}
          <radialGradient id="gAtmo" cx="50%" cy="50%" r="50%">
            <stop offset="82%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(14,120,210,0.35)" />
          </radialGradient>

          {/* Brillo superior izquierdo */}
          <radialGradient id="gShine" cx="35%" cy="30%" r="35%">
            <stop offset="0%"   stopColor="rgba(100,180,255,0.18)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Glow naranja exterior */}
          <radialGradient id="gOrange" cx="50%" cy="50%" r="50%">
            <stop offset="84%" stopColor="transparent" />
            <stop offset="100%" stopColor="rgba(244,124,43,0.18)" />
          </radialGradient>

          {/* Clip al círculo */}
          <clipPath id="cGlobe">
            <circle cx="200" cy="200" r="178" />
          </clipPath>



          {/* Dash de líneas de conexión animado */}
          <style>{`
            .conn-line { stroke-dasharray: 6 5; animation: dash-anim 4s linear infinite; }
            @keyframes dash-anim { to { stroke-dashoffset: -44; } }
            .node-pulse { animation: node-ring 2.4s ease-out infinite; }
            .node-pulse-2 { animation: node-ring 2.4s ease-out 0.8s infinite; }
            @keyframes node-ring {
              0%   { r: 5; opacity: 0.8; }
              100% { r: 14; opacity: 0; }
            }
          `}</style>
        </defs>

        {/* ─── Esfera base ─── */}
        <circle cx="200" cy="200" r="178" fill="url(#gGlobe)" />

        {/* ─── Grid (graticulas) ─── */}
        <g clipPath="url(#cGlobe)">
          {GRID.map((line, i) => (
            <path key={i} d={line.d} fill="none"
              stroke="rgba(63,196,216,0.13)"
              strokeWidth="0.6"
            />
          ))}
        </g>

        {/* ─── Puntos de continentes ─── */}
        <g clipPath="url(#cGlobe)">
          {PROJECTED_DOTS.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="2"
              fill="rgba(100,200,240,0.55)"
            />
          ))}
        </g>

        {/* ─── Líneas de conexión ─── */}
        <g clipPath="url(#cGlobe)">
          {CONNECTIONS.map(([a, b], i) => {
            const pa = PROJECTED_NODES[a]
            const pb = PROJECTED_NODES[b]
            if (!pa?.visible || !pb?.visible) return null
            // Punto de control para curvatura sutil
            const mx = (pa.x + pb.x) / 2
            const my = (pa.y + pb.y) / 2 - 18
            return (
              <path key={i}
                d={`M ${pa.x} ${pa.y} Q ${mx} ${my} ${pb.x} ${pb.y}`}
                fill="none"
                stroke="rgba(244,124,43,0.55)"
                strokeWidth="0.9"
                className="conn-line"
                strokeDasharray="6 5"
                style={{ animationDelay: `${i * 0.6}s` }}
              />
            )
          })}
        </g>

        {/* ─── Nodos de conexión ─── */}
        <g>
          {PROJECTED_NODES.map((p, i) => {
            if (!p.visible) return null
            return (
              <g key={i}>
                {/* Anillos pulsantes */}
                <circle cx={p.x} cy={p.y} r="5" fill="none"
                  stroke="rgba(63,196,216,0.7)" strokeWidth="1.2"
                  className="node-pulse"
                  style={{ animationDelay: `${i * 0.5}s` }}
                />
                <circle cx={p.x} cy={p.y} r="5" fill="none"
                  stroke="rgba(63,196,216,0.4)" strokeWidth="0.8"
                  className="node-pulse-2"
                  style={{ animationDelay: `${i * 0.5 + 0.4}s` }}
                />
                {/* Punto central */}
                <circle cx={p.x} cy={p.y} r="3"
                  fill="rgba(63,196,216,0.9)"
                  stroke="rgba(255,255,255,0.6)" strokeWidth="0.8"
                />
              </g>
            )
          })}
        </g>

        {/* ─── Efectos de superficie ─── */}
        <circle cx="200" cy="200" r="178" fill="url(#gShine)" clipPath="url(#cGlobe)" />

        {/* ─── Halo atmosférico ─── */}
        <circle cx="200" cy="200" r="178" fill="url(#gAtmo)" />

        {/* ─── Borde / rim ─── */}
        <circle cx="200" cy="200" r="178" fill="none"
          stroke="rgba(63,196,216,0.3)" strokeWidth="1.5" />

        {/* ─── Glow naranja exterior ─── */}
        <circle cx="200" cy="200" r="178" fill="url(#gOrange)" />

        {/* ─── Partículas / puntos ambiente en el borde inferior ─── */}
        {Array.from({ length: 28 }, (_, i) => {
          const angle = (i / 27) * Math.PI + Math.PI * 0.02
          const rx = 185 + (i % 3) * 5
          const ry = 188 + (i % 2) * 4
          const x = 200 + rx * Math.cos(angle)
          const y = 200 + ry * Math.sin(angle)
          return (
            <circle key={i} cx={x} cy={y} r={1 + (i % 2) * 0.5}
              fill="rgba(14,120,210,0.5)"
              opacity={0.3 + (i % 3) * 0.2}
            />
          )
        })}
      </svg>
    </div>
  )
}
