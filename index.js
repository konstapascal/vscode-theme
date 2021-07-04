#!/usr/bin/env node

const os = require('os');
const minimist = require('minimist');

const getSettingsPath = require('./lib/getSettingsPath');

const list = require('./cmds/list');
const set = require('./cmds/set');
const help = require('./cmds/help');
const version = require('./cmds/version');

// START OF SCRIPT
const platform = os.platform();
const settingsPath = getSettingsPath(platform);

const args = minimist(process.argv.slice(2));
let subcmd = args._[0] || 'help';

if (args.h || args.help) subcmd = 'help';
if (args.v || args.version) subcmd = 'version';

switch (subcmd) {
	case 'help':
		help();
		break;

	case 'version':
		version();
		break;

	case 'list':
		list();
		break;

	case 'set':
		set(args, settingsPath);
		break;

	default:
		console.error(`"${subcmd}" is not a valid subcommand!`);
		break;
}
