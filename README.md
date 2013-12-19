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

```shell
npm install -g mocha
```

```shell
npm test
```