'use strict';

const { languagesAll, countries } = require('countries-list');

const { promisify } = require('util');
const fs = require('fs');
const xml2js = require('xml2js');

module.exports = exports = () => {

	return promisify(fs.readFile)(__dirname + '/data/languages.xml')
		.then((languagesXml) => {
			const parser = new xml2js.Parser();
			return promisify(parser.parseString)(languagesXml);
		})
		.then((data) => {
			return data.languageData.language.map((language) => language.$);
		})
		.then((languages) => {

			const scripts = require('../dist/scripts.json');

			return languages
				.filter((language) => languagesAll[language.type])
				.filter((language) => language.scripts)
				.map((language) => {
					if (language.scripts) language.scripts = language.scripts.split(' ');
					if (language.territories) language.territories = language.territories.split(' ');
					return language;
				})
				.reduce((res, language) => {
					res[language.type] = res[language.type] || {
						scripts: {}
					};
					language.scripts.forEach((script) => {
						if (!scripts[script]) {
							if (process.argv[2] === 'debug') console.error(script);
							return;
						}
						language.territories = language.territories || Object.keys(countries).filter((country) => {
							return countries[country].languages.includes(language.type);
						});
						if (language.alt !== 'secondary') {
							res[language.type].primaryScript = script;
						}
						res[language.type].scripts[script] = {
							countries: language.territories.filter((country) => {
								return countries[country];
							})
						};
					});
					return res;
				}, {});
			
		}).
		then((languages) => {
			return JSON.stringify(languages);
		})
		.then((languagesJson) => {
			return promisify(fs.writeFile)(__dirname + '/../dist/languages-scripts.json', languagesJson);
		});
		
};
