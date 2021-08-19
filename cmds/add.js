const fs = require('fs');
const path = require('path');

function add(args) {
	const providedTheme = args._[1];

	if (!providedTheme) return console.log('No theme was provided to be added!');

	const themesPath = path.join(__dirname, '..', 'data', 'themes.txt');
	const themes = JSON.parse(fs.readFileSync(themesPath));

	if (themes.includes(providedTheme))
		return console.log('Theme already exists, no need to be added!');

	themes.push(providedTheme);
	fs.writeFileSync(themesPath, JSON.stringify(themes));

	console.log(providedTheme + ' was added to the list of themes!');
}

module.exports = add;
