# translat

Translation using just page-fetching


## Imortant

> All inputs are reguarded as sentences,
so they are probably capitalized.


## Usage

### with Node

```shell
npm install translat
```

```js
var translat = require('translat'),
	translator = translat.create({
		from: 'en', to: 'zh-CN'
	});
translator.get('Cat', function(err, result){
	console.log(result);	// 猫
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