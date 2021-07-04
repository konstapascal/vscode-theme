function set(args) {
	const theme = args._[1];

	if (!theme) return console.log('No theme was provided!');
	console.log(theme);
}

module.exports = set;
