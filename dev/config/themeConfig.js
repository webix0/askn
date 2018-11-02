'use strict';

module.exports = {
	theme: {
		slug: 'askn',
		name: 'askn',
		author: 'Seth Moder'
	},
	dev: {
		browserSync: {
			live: true,
			proxyURL: 'localhost/askn',
			bypassPort: '8181'
		},
		browserslist: [ // See https://github.com/browserslist/browserslist
			'> 1%',
			'last 2 versions'
		],
		debug: {
			styles: false, // Render verbose CSS for debugging.
			scripts: false // Render verbose JS for debugging.
		}
	},
	export: {
		compress: true
	}
};
