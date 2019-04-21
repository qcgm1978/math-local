module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true
	},
	'extends': 'eslint:recommended',
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly',
		"var1": "writable",
		"expect": "readonly"
	},
	'parserOptions': {
		'ecmaVersion': 2018
	},
	'rules': {
		// 'indent': [
		// 	'error',
		// 	'tab'
		// ],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'off',
			'single'
		],
		'semi': [
			'off',
			'always'
		],
		'no-unused-vars': 'warn'
	}
};