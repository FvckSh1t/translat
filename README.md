# translat

Translation using just page-fetching


## Imortant

> While using languages like Chinese,
all inputs are reguarded as sentences,
so they are probably capitalized.


## Usage

```shell
npm install translat
```

```js
var translat = require('translat'),
	translator = translat.create({
		from: 'en', to: 'zh-CN'
	});
translator.get('I love you', function(err, result){
	console.log(result);	// 我爱你
});
// dynamically switching languages
translator.defaults({
	from: 'fr', to: 'en'
}).get("Je t'aime", function(err, result){
	console.log(result);	// I love you
});
```


## Testing

1. Make sure that you have `mocha` installed globally.

	```shell
	npm install -g mocha
	```

2. Download the package from the repository.

3. Run from inside.

	```shell
	cd translat
	npm test
	```