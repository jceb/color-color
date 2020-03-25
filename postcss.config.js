// postcss.config.js
const purgecss = require("@fullhuman/postcss-purgecss")({
	// Specify the paths to all of the template files in your project
	content: [
		"./src/**/*.html",
		"./src/**/*.svelte",
		// etc.
	],

	// Include any special characters you're using in this regular expression
	defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
});

const production = !process.env.ROLLUP_WATCH;

module.exports = {
	plugins: [
		require("postcss-import")(),
		require("tailwindcss"),
		require("autoprefixer"),
		require("postcss-nesting"),
		...(production ? [purgecss, require("cssnano")] : []),
	],
};
