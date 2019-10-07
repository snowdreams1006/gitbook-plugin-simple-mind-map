# gitbook-plugin-openwrite

[![npm version](https://img.shields.io/npm/v/gitbook-plugin-openwrite.svg)](https://www.npmjs.com/package/gitbook-plugin-openwrite)
[![npm-download](https://img.shields.io/npm/dt/gitbook-plugin-openwrite.svg)](https://www.npmjs.com/package/gitbook-plugin-openwrite)
[![npm-license](https://img.shields.io/npm/l/gitbook-plugin-openwrite.svg)](https://www.npmjs.com/package/gitbook-plugin-openwrite)
[![github](https://img.shields.io/badge/github-snowdreams1006-brightgreen.svg)](https://github.com/snowdreams1006)
[![微信公众号-雪之梦技术驿站-brightgreen.svg](https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg)

## Usage

- Install this plugin

Add `openwrite` to `plugins` in `book.json` configuration file.

```json
{
    "plugins" : ["openwrite"]
}
```

Install `openwrite` via `npm` or `gitbook` .

```bash
$ npm install gitbook-plugin-openwrite
```

or 

```bash
$ gitbook install
```

- Configure this plugin

Add it to your `book.json` with a basic configuration

```json
{
    "pluginsConfig":{
        "openwrite":{
            "blogId": "15702-1569305559839-744",
            "name": "雪之梦技术驿站",
            "qrcode": "https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg",
            "keyword": "vip"
        }
    }
}
```

- Run `gitbook` locally

Run `gitbook build` or `gitbook serve` to verify this plugin is in effect and should not have been initialized yet.

- Release `gitbook` officially

Publish to the production environment to implement the comment function really.

- `Star` this plugin

If you feel this plugin is helpful, feel free to `star` [gitbook-plugin-openwrite](https://github.com/snowdreams1006/gitbook-plugin-openwrite).

## Example

The [gitbook-plugin-openwrite](https://github.com/snowdreams1006/gitbook-plugin-openwrite) project has been integrated with the plugin itself or you can refer to the [sample project](https://github.com/snowdreams1006/gitbook-plugin-openwrite/tree/master/example).

## Feedback

I am very happy to help out with your books or any other questions you might have. see [snowdreams1006](https://github.com/snowdreams1006)

You can email [me](mailto:snowdreams1006@163.com) or [new issue](https://github.com/snowdreams1006/gitbook-plugin-openwrite/issues) on github.

## License

`gitbook-plugin-openwrite` is licensed under `Apache-2.0` License. See [LICENSE](LICENSE) for the full license text.