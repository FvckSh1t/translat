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
		translator1.get('I love you', function(err, result) {
			assert.equal(result, '我爱你');
			translator2.get(result, function(err, result) {
				assert.equal(result, 'I love you');
				done();
			});
		});
	});

	it('defaults', function(done) {
		translator1.get('Wind', function(err, result) {
			assert.equal(result, '风');
			translator1.defaults({
				to: 'zh-TW'
			}).get('Wind', function(err, result) {
				assert.equal(result, '風');
				// restore
				translator1.defaults({
					to: 'zh-CN'
				}).get('Wind', function(err, result) {
					assert.equal(result, '风');
					done();
				});
			});
		});
	});
});