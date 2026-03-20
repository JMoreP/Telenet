const fs = require('fs');
const content = fs.readFileSync('eslint.json', 'utf16le');
try {
    const cleanContent = content.replace(/^\uFEFF/, '').trim();
    if (!cleanContent) {
        console.log("Empty JSON"); process.exit(0);
    }
    const data = JSON.parse(cleanContent);
    let count = 0;
    data.forEach(file => {
        file.messages.forEach(msg => {
            if (msg.ruleId === 'no-unused-vars' || msg.message.includes('is defined but never used')) {
                console.log(`${file.filePath}:${msg.line}:${msg.column} - ${msg.message}`);
                count++;
            }
        });
    });
    console.log(`Total unused vars: ${count}`);
} catch(e) {
    console.log("Error parsing JSON:", e.message);
}
