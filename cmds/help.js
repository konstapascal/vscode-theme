const chalk = require('chalk');

function help() {
	console.log(`
	${chalk.greenBright('vsc-theme')} ${chalk.blueBright('[command]')} ${chalk.yellowBright(
		'<options>'
	)}

	  ${chalk.blueBright('list')} ................ list of all available themes
	  ${chalk.blueBright('set')} ................. set a new theme to vscode 
	  ${chalk.blueBright('add')}.................. add a new theme to the list of available ones
	  ${chalk.blueBright('remove')} .............. remove a theme from the list of available ones
	  
	  ${chalk.blueBright('help')} ................ show help menu for all commands
	  ${chalk.blueBright('version')} ............. show the installed version of vsc-theme
	`);
}

module.exports = help;
