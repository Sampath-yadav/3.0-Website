const fs = require('fs');
const path = require('path');

const historyDir = 'C:\\Users\\Gandesiri Sumanth\\AppData\\Roaming\\Code\\User\\History';
const targetPages = ['bhoomibox', 'naviprep', 'blue-cross-hyderabad'];

function searchHistory() {
  const dirs = fs.readdirSync(historyDir);
  const results = [];
  
  for (const d of dirs) {
    const dPath = path.join(historyDir, d);
    if (!fs.statSync(dPath).isDirectory()) continue;
    
    const entriesPath = path.join(dPath, 'entries.json');
    if (!fs.existsSync(entriesPath)) continue;
    
    const content = fs.readFileSync(entriesPath, 'utf8');
    const data = JSON.parse(content);
    
    // check if it matches target pages
    if (data.resource && targetPages.some(page => data.resource.includes(page))) {
      const sortedEntries = data.entries.sort((a, b) => b.timestamp - a.timestamp);
      results.push({
        origFile: data.resource,
        folder: dPath,
        latestEntry: sortedEntries[0],
        allEntries: sortedEntries.length
      });
    }
  }
  
  console.log(JSON.stringify(results, null, 2));
}

searchHistory();
