const fs = require('fs');
const path = require('path');

function list() {
	const themesPath = path.join(__dirname, '..', 'data', 'themes.txt');
	const themes = JSON.parse(fs.readFileSync(themesPath));

	console.log(themes);
}

module.exports = list;
