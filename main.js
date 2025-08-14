/* 
The Difference Between fs.readFile and fs.readFileSync

fs.readFile → Asynchronous
Reads the file in the background, while the code that follows continues, and the result is returned in a callback or Promise.

fs.readFileSync → Synchronous
Reads the file and pauses the rest of the code until it completes.
*/
const fs = require('fs');

// Asynchronous
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("Async:", data);
});
console.log("This will run before Async finishes!");

// Synchronous
const data = fs.readFileSync('file.txt', 'utf8');
console.log("Sync:", data);
console.log("This runs after Sync finishes!");
//====================================================================================================================================================

/*The Difference Between Dependency and DevDependency in NPM

Dependency: Libraries required by the project at runtime (production).
Install:
npm install express

devDependency: Libraries used only during development; they are not needed on the server after deployment.
Install:
npm install nodemon --save-dev

Example:
express → dependency (The project requires it to run the server).

nodemon → devDependency (This helps you with development only).
*/
//====================================================================================================================================================

/*The function of the node_modules folder and why it is ignored in Git

node_modules: Contains all the libraries installed with npm (dependencies + devDependencies).

It is not uploaded to Git because it is too large.
It can be easily reinstalled with npm install
through package.json.
*/

//====================================================================================================================================================

/* 
{
  "name": "url-shortener-app",  // اسم المشروع
  "version": "0.0.0",           // الإصدار الحالي
  "private": true,              // يمنع نشره على npm registry
  "scripts": {                  // أوامر جاهزة للتشغيل
    "start": "node ./bin/www",  // تشغيل السيرفر
    "start:dev": "nodemon ./bin/www" // تشغيل في وضع التطوير مع auto-restart
  },
  "dependencies": {             // مكتبات أساسية للمشروع
    "cookie-parser": "~1.4.4",
    "debug": "~2.6.9",
    "dotenv": "^16.4.4",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "http-errors": "~1.6.3",
    "mongodb": "^6.3.0",
    "mongoose": "^8.1.3",
    "morgan": "~1.9.1",
    "shortid": "^2.2.16",
    "valid-url": "^1.0.9"
  },
  "devDependencies": {          // مكتبات للتطوير فقط
    "nodemon": "^3.0.1"
  }
}
*/

//====================================================================================================================================================

/*
const fs = require('fs');
const https = require('https');

const username = process.argv[2];
if (!username) {
    console.error("Please provide a GitHub username");
    process.exit(1);
}

const options = {
    headers: { 'User-Agent': 'node.js' }
};

https.get(`https://api.github.com/users/${username}/repos`, options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const repos = JSON.parse(data);
        if (repos.message === "Not Found") {
            console.log("User not found");
            return;
        }
        const repoNames = repos.map(r => r.name).join('\n');
        fs.writeFileSync(`${username}.txt`, repoNames);
        console.log(`Saved ${repos.length} repos to ${username}.txt`);
    });
}).on('error', err => console.error(err));

node github_repos.js octocat
*/

//====================================================================================================================================================

const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const pathname = q.pathname.replace('/', '');
    const a = parseFloat(q.query.a);
    const b = parseFloat(q.query.b);

    let result;
    switch (pathname) {
        case 'add': result = a + b; break;
        case 'subtract': result = a - b; break;
        case 'multiply': result = a * b; break;
        case 'divide': result = b !== 0 ? a / b : 'Error: Division by zero'; break;
        default: result = 'Invalid operation';
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(result.toString());
}).listen(3000, () => console.log("Server running on port 3000"));


//====================================================================================================================================================

const fs = require('fs');

const fileName = process.argv[2];
const query = process.argv[3];

if (!fileName || !query) {
    console.error("Usage: node search.js <filename> <query>");
    process.exit(1);
}

if (!fs.existsSync(fileName)) {
    console.log("File not found");
    process.exit(1);
}

const lines = fs.readFileSync(fileName, 'utf8').split('\n');
const found = lines.find(line => line.includes(query));

console.log(found ? found : "THAT'S NOT FUNNY");


//====================================================================================================================================================

/*Difference Between CommonJS and ES Modules
CommonJS (the default in Node.js)
// add.js
module.exports = (a, b) => a + b;

// main.js
const add = require('./add');
console.log(add(2, 3));

ES Modules (the new standard)
// add.mjs
export default (a, b) => a + b;

// main.mjs
import add from './add.mjs';
console.log(add(2, 3));

Conversion Between Them

In package.json:

{ "type": "module" }

This makes .js behave like ES Modules without .mjs. */

//====================================================================================================================================================

