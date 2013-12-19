var _ = require('underscore'),
	request = require('request');

// fetching Google Translate
// http://translate.google.com
var url = 'http://translate.google.cn/translate_a/t',
	base = {
		client: 't',
		hl: 'en',
		sc: 2,
		ie: 'UTF-8',
		oe: 'UTF-8',
		oc: 1,
		otf: 2,
		rom: 1,
		ssel: 5,
		tsel: 5
	};

exports.create = function(options) {
	return new Translator().defaults(options);
}

function Translator() {
	this._defaults = {
		sl: 'en', // source language
		tl: 'zh-CN' // target language
	};
}
Translator.prototype.defaults = function(_options) {
	// pick `from / to` for `sl / tl`
	var options = {};
	if (_options.from) options.sl = _options.from;
	if (_options.to) options.tl = _options.to;
	_.extend(this._defaults, options);
	return this;
}

// .get(text, [options], callback)
// options: from, to
Translator.prototype.get = function(text, options, callback) {
	// overload method
	if (_.isFunction(options)) {
		callback = options;
		options = null;
	}

	var params = _.extend({
		q: text
	}, base, this._defaults, options);

	request(url, {
		qs: params
	}, function(err, res, body) {
		if (err) {
			return callback(err);
		}
		var result;

		// replace `,+` to `,`
		// amazing trap made by Google
		body = body.replace(/(\s*,\s*)+/g, ',');

		try {
			var arr = JSON.parse(body);
			// get the key we need
			result = arr[0][0][0];
		} catch (err) {
			return callback(new Error('can not parse the result'));
		}
		callback(null, result || '');
	});

	return this;
}