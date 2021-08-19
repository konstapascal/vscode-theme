const fs = require('fs');

function set(args, settingsPath, platform) {
	const theme = args._[1];
	const themeExists = JSON.parse(
		fs.readFileSync('../data/themes.txt', { encoding: 'utf-8' })
	).includes(theme);

	if (!theme) return console.error('No theme was provided!');
	if (!themeExists) return console.error('The provided theme does not exist!');

	let settingsPathWithoutEnv =
		platform === 'win32'
			? settingsPath.replace('%APPDATA%', process.env.APPDATA)
			: settingsPath.replace('$HOME', process.env.HOME);

	try {
		const jsonSettings = fs.readFileSync(settingsPathWithoutEnv, { encoding: 'utf8' });
		const jsonSettingsParsed = JSON.parse(jsonSettings);

		jsonSettingsParsed['workbench.colorTheme'] = theme;

		fs.writeFileSync(settingsPathWithoutEnv, JSON.stringify(jsonSettingsParsed));
	} catch (err) {
		console.log(err);
	}
}

module.exports = set;
