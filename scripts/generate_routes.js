// scripts/generate_routes.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Necesario para __dirname equivalente en ESM
const __filename = fileURLToPath(import.meta.url);
console.log("filename: ",__filename);
const __dirname = dirname(__filename);
console.log("dirname: ", __dirname)

const publicDir = path.join(__dirname, '..', 'public');
console.log("publicDir:", publicDir)
const outputPath = path.join(publicDir, '_redirects');

const folders = fs.readdirSync(publicDir).filter(name => {
    const fullPath = path.join(publicDir, name);
    return fs.lstatSync(fullPath).isDirectory();
});



const redirects = folders.map(folder => `/${folder}    /index.html   200`).join('\n');

fs.writeFileSync(outputPath, redirects);
console.log('✅ Archivo _redirects generado con rutas dinámicas');
