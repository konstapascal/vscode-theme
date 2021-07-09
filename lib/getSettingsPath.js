function getSettingsPath(platform) {
	if (platform === 'win32') return '%APPDATA%\\Code\\User\\settings.json';
	if (platform === 'darwin') return '$HOME/Library/Application Support/Code/User/settings.json';
	if (platform === 'linux') return '$HOME/.config/Code/User/settings.json';
}

module.exports = getSettingsPath;
