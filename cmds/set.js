const fs = require('fs');
const path = require('path');

function set(args, settingsPath, platform) {
	const providedTheme = args._[1];

	const themesPath = path.join(__dirname, '..', 'data', 'themes.txt');
	const themeExists = JSON.parse(fs.readFileSync(themesPath)).includes(providedTheme);

	if (!providedTheme) return console.error('No theme was provided!');
	if (!themeExists) return console.error('The provided theme does not exist!');

	let settingsPathWithoutEnv =
		platform === 'win32'
			? settingsPath.replace('%APPDATA%', process.env.APPDATA)
			: settingsPath.replace('$HOME', process.env.HOME);

	try {
		const jsonSettings = fs.readFileSync(settingsPathWithoutEnv);
		const jsonSettingsParsed = JSON.parse(jsonSettings);

		jsonSettingsParsed['workbench.colorTheme'] = providedTheme;

		fs.writeFileSync(settingsPathWithoutEnv, JSON.stringify(jsonSettingsParsed));
	} catch (err) {
		console.log(err);
	}
}

module.exports = set;
