'use strict';

const os = require('os');

const scripts = require('./scripts');
const languages = require('./languages');

process.stdout.write('Generating scripts... ');
scripts()
	.then(() => {
		process.stdout.write(`done${os.EOL}`);
	})
	.then(() => {
		process.stdout.write('Generating languages and scripts... ');
		return languages();
	})
	.then(() => {
		process.stdout.write(`done${os.EOL}`);
	})
	.catch((err) => {
		process.stdout.write(`error${os.EOL}`);
		console.error(err.stack);
		process.exit(1);
	});
