#!/usr/bin/env node

const os = require('os');
const minimist = require('minimist');

const getSettingsPath = require('./lib/getSettingsPath');

const list = require('./cmds/list');
const set = require('./cmds/set');

// START OF SCRIPT
const platform = os.platform();
const settingsPath = getSettingsPath(platform);

const args = minimist(process.argv.slice(2));
let subcmd = args._[0];

switch (subcmd) {
	case 'list':
		list();
		break;

	case 'set':
		set(args);
		break;

	case undefined:
		console.error('No subcommand was provided!');
		break;

	default:
		console.error(`"${subcmd}" is not a valid subcommand!`);
		break;
}
