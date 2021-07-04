function getSettingsPath(platform) {
	if (platform === 'win32') return 'Windows Path';
	if (platform === 'linux') return 'Linux Path';
	if (platform === 'darwin') return 'MacOS Path';
}

module.exports = getSettingsPath;
