const path = require('path');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {

	exportPathMap: () => {
		const path = {
			"/": {
				page: "/"
			},
			"/experience": {
				page: "/experience"
			},
			"/projects": {
				page: "/projects"
			},
			"/contact": {
				page: "/contact"
			},
		};
		return path;
	},

	webpack: (config, { dev }) => {
		/**
     * Install and Update our Service worker
     * on our main entry file :)
     * Reason: https://github.com/ooade/NextSimpleStarter/issues/32
     */
		const oldEntry = config.entry;

		return config;

		config.entry = () =>
			oldEntry().then(entry => {
				entry['main.js'].push(path.resolve('./utils/offline'));
				return entry;
			});

		/* Enable only in Production */
		if (false && !dev) {
			// Service Worker
			config.plugins.push(
				new SWPrecacheWebpackPlugin({
					cacheId: 'next-ss',
					filename: 'sw.js',
					minify: true,
					staticFileGlobsIgnorePatterns: [/\.next\//],
					staticFileGlobs: [
						'static/**/*' // Precache all static files by default
					],
					runtimeCaching: [
						// Example with different handlers
						{
							handler: 'fastest',
							urlPattern: /[.](png|jpg|css)/
						},
						{
							handler: 'networkFirst',
							urlPattern: /^http.*/ //cache all files
						}
					]
				})
			);
		}

		return config;
	}
};
