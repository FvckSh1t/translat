var assert = require('assert'),
	translat = require('../'),
	translator1 = translat.create({
		from: 'en',
		to: 'zh-CN'
	}),
	translator2 = translat.create({
		from: 'zh-CN',
		to: 'en'
	});

describe('translat', function() {
	it('gets', function(done) {
		translator1.get('Cat', function(err, result) {
			assert.equal(err, null);
			assert.equal(typeof result, 'string');
			done();
		});
	});

	it('gets with options', function(done) {
		translator2.get('几乎不能翻译句子.', {
			sl: 'zh-CN',
			tl: 'en'
		}, function(err, result) {
			assert.equal(err, null);
			assert.equal(typeof result, 'string');
			done();
		});
	});

	it('gets correctly', function(done) {
		translator1.get('Water', function(err, result) {
			translator2.get(result, function(err, result) {
				assert.equal(result, 'Water');
				done();
			});
		});
	});
});