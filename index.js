const os = require('os');

const userOS = os.platform();

let vscodePath;
if (userOS === 'win32') vscodePath = 'Win';
if (userOS === 'linux') vscodePath = 'Linux';
if (userOS === 'darwin') vscodePath = 'Mac';

console.log(userOs, vscodePath);
