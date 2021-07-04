function remove(args) {
	const theme = args._[1];

	if (!theme) return console.log('No theme was provided to be removed!');
	console.log(theme);
}

module.exports = remove;
