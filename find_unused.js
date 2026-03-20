const fs = require('fs');
const path = require('path');

const srcDir = 'c:/Users/HPELITEBOOK/Desktop/telenet/src';

function getFiles(dir, ext) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getFiles(file, ext));
        } else if (file.endsWith(ext)) {
            results.push(file);
        }
    });
    return results;
}

const cssFiles = getFiles(srcDir, '.css');
const jsxFiles = getFiles(srcDir, '.jsx');

let allClasses = new Map();
cssFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    // Simplified regex to find CSS classes, ignoring pseudo elements and keyframes
    // This looks for .classname followed by anything but ignoring within @ rules
    const lines = content.split('\n');
    lines.forEach(line => {
        const classMatches = line.match(/\.([a-zA-Z]+[a-zA-Z0-9-]*)/g);
        if (classMatches && !line.includes('@keyframes') && !line.includes('@media')) {
            classMatches.forEach(c => {
                const className = c.substring(1);
                if (!allClasses.has(className)) allClasses.set(className, []);
                allClasses.get(className).push(file);
            });
        }
    });
});

let usedClasses = new Set();
jsxFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    // Extract all words that could be class names
    const wordMatches = content.match(/[a-zA-Z]+[a-zA-Z0-9-]*/g);
    if (wordMatches) {
        wordMatches.forEach(w => usedClasses.add(w));
    }
});

console.log("--- Potentially Unused Classes ---");
let count = 0;
for (let [c, files] of allClasses.entries()) {
    if (!usedClasses.has(c)) {
        // filter out generic or false positives
        if (!['html', 'body', 'root', 'jsx', 'css'].includes(c)) {
             console.log(`${c} (found in ${[...new Set(files)].map(f => path.basename(f)).join(', ')})`);
             count++;
        }
    }
}
console.log(`\nTotal: ${count} potentially unused classes.`);
