function add(args) {
	const theme = args._[1];

	if (!theme) return console.log('No theme was provided to be added!');
	console.log(theme);
}

module.exports = add;
