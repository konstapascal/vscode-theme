#!/usr/bin/env node

// IMPORTS
const os = require('os');
const minimist = require('minimist');

const getVscodeSettingsPath = require('./lib/getVscodeSettingsPath');

// START OF SCRIPT
const platform = os.platform();
const vscodeSettingsPath = getVscodeSettingsPath(platform);

const parsedArgv = minimist(process.argv.slice(2));
let cmd = parsedArgv._[0] || 'help';

console.log(parsedArgv);
console.log(cmd);
