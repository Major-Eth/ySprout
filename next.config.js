const Dotenv = require('dotenv-webpack');

module.exports = ({
	i18n: {
		locales: ['en', 'fr', 'es', 'de', 'pt', 'el', 'tr', 'vi', 'zh', 'hi', 'ja'],
		defaultLocale: 'en',
		localeDetection: false
	},
	experimental: {
		concurrentFeatures: true,
	},
	plugins: [new Dotenv()],
	images: {
		domains: [
			'rawcdn.githack.com'
		],
	},
	env: {
		WEBSITE_URI: 'https://ysprout.major.tax/',
		WEBSITE_NAME: 'ySprout',
		WEBSITE_TITLE: 'ySprout',
		WEBSITE_DESCRIPTION: 'Redefining the Future of Decentralized Tech',
		PROJECT_GITHUB_URL: 'https://github.com/Major-Eth/ySprout',
		USE_PRICES: false,
		USE_PRICE_TRI_CRYPTO: false,
		CG_IDS: [],
		TOKENS: [],
		ALCHEMY_KEY: process.env.ALCHEMY_KEY
	}
});
