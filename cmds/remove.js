const fs = require('fs');
const path = require('path');

function remove(args) {
	const providedTheme = args._[1];

	if (!providedTheme) return console.log('No theme was provided to be removed!');

	const themesPath = path.join(__dirname, '..', 'data', 'themes.txt');
	const themes = JSON.parse(fs.readFileSync(themesPath));

	if (!themes.includes(providedTheme))
		return console.log('Theme does not exist and thus cannot be removed!');

	const newThemes = themes.filter(theme => theme !== providedTheme);
	fs.writeFileSync(themesPath, JSON.stringify(newThemes));

	console.log(providedTheme + ' was removed from the list of themes!');
}

module.exports = remove;
