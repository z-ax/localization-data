'use string';

const
	countriesList = require('countries-list'),
	merge = require('merge');

const
	scripts = require('./data/scripts.json'),
	languagesAllScripts = require('./data/languages-scripts.json');

const languagesScripts = Object.keys(languagesAllScripts).reduce((res, language) => {
	if (!countriesList.languages[language]) return res;
	res[language] = languagesAllScripts[language];
	return res;
}, {});

module.exports = merge(countriesList, {
	scripts: scripts,
	languages: merge.recursive(countriesList.languages, languagesScripts),
	languagesAll: merge.recursive(countriesList.languagesAll, languagesAllScripts)
});
