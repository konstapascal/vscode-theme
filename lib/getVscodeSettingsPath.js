function getVscodeSettingsPath(platform) {
	let vscodeSettingsPath;

	if (platform === 'win32') vscodeSettingsPath = 'Windows Path';
	if (platform === 'linux') vscodeSettingsPath = 'Linux Path';
	if (platform === 'darwin') vscodeSettingsPath = 'MacOS Path';

	return vscodeSettingsPath;
}

module.exports = getVscodeSettingsPath;
