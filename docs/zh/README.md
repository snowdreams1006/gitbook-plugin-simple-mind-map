# 欢迎访问 gitbook-plugin-icp 官网 👋

[![npm:version](https://img.shields.io/npm/v/gitbook-plugin-icp.svg)](https://www.npmjs.com/package/gitbook-plugin-icp)
[![npm:download](https://img.shields.io/npm/dt/gitbook-plugin-icp.svg)](https://www.npmjs.com/package/gitbook-plugin-icp)
[![npm:prerequisite](https://img.shields.io/badge/gitbook-*-blue.svg)](https://www.npmjs.com/package/gitbook-plugin-icp)
[![github:documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/snowdreams1006/gitbook-plugin-icp#readme)
[![github:maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/snowdreams1006/gitbook-plugin-icp/graphs/commit-activity)
[![npm:license](https://img.shields.io/npm/l/gitbook-plugin-icp.svg)](https://github.com/snowdreams1006/gitbook-plugin-icp/blob/master/LICENSE)
[![github:snodreams1006](https://img.shields.io/badge/github-snowdreams1006-brightgreen.svg)](https://github.com/snowdreams1006)
[![website:snodreams1006.tech](https://img.shields.io/badge/website-snowdreams1006.tech-brightgreen.svg)](https://snowdreams1006.tech/)
[![微信公众号:雪之梦技术驿站-brightgreen.svg](https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg)

> 用于在首页页脚区域添加 icp 网站备案信息的 Gitbook 插件

### 🏠 [主页](https://github.com/snowdreams1006/gitbook-plugin-icp#readme)

- Github : [https://snowdreams1006.github.io/gitbook-plugin-icp/](https://snowdreams1006.github.io/gitbook-plugin-icp/)
- GitLab: [https://snowdreams1006.gitlab.io/gitbook-plugin-icp/](https://snowdreams1006.gitlab.io/gitbook-plugin-icp/)
- Gitee : [https://snowdreams1006.gitee.io/gitbook-plugin-icp/](https://snowdreams1006.gitee.io/gitbook-plugin-icp/)

## 屏幕截图

- 多语言版本

![icp-multilingual-index-use-preview.png](icp-multilingual-index-use-preview.png)

- 单语言版本

![icp-monolingual-index-use-preview.png](icp-monolingual-index-use-preview.png)

## 用法

### 步骤＃1-更新`book.json`文件

1. 在您的 `gitbook` 的 `book.json` 文件中，将 `icp` 添加到 `plugins` 列表中。
2. 在 `pluginsConfig` ,将 `number` 值设置为您自己的 icp 网站备案编号.
3. 在 `pluginsConfig` ,`label` 或 `link` 值是可选的,默认情况下,链接地址为 [http://www.beian.miit.gov.cn/](http://www.beian.miit.gov.cn/) .

这是最简单的示例：

```json
{
    "plugins": ["icp"],
    "pluginsConfig": {
        "icp": {
            "number": "浙ICP备18042346号"
        }
    }
}
```

此外，受支持的配置选项如下：

```json
"gitbook": {
  "properties": {
    "label": {
      "type": "string",
      "title": "icp label",
      "required": false
    },
    "number": {
      "type": "string",
      "title": "icp number",
      "required": true
    },
    "link": {
      "type": "string",
      "title": "link url",
      "required": false,
      "default": "http://www.beian.miit.gov.cn/"
    },
    "style": {
      "type": "object",
      "title": "icp number style",
      "required": false
    }
  }
}
```

### 步骤＃2-gitbook命令

1. 运行`gitbook install` .它将自动为您的 `gitbook` 安装 `icp` 插件.

> 该步骤仅需要允许一次即可.

```bash
gitbook install
```

或者您可以运行 `npm install gitbook-plugin-icp` 命令本地安装 `gitbook-plugin-icp` 插件.

```bash
npm install gitbook-plugin-icp
```

2. 像往常一样构建您的书（ `gitbook build` ）或服务（ `gitbook serve` ）.

```bash
gitbook serve
```

## 示例

- 官方文档配置文件

> [https://github.com/snowdreams1006/gitbook-plugin-icp/blob/master/docs/book.json](https://github.com/snowdreams1006/gitbook-plugin-icp/blob/master/docs/book.json)

```json
{
    "plugins": ["icp"],
    "pluginsConfig": {
        "icp": {
            "number": "浙ICP备18042346号"
        }
    }
}
```

- 官方示例配置文件

> [https://github.com/snowdreams1006/gitbook-plugin-icp/blob/master/example/book.json](https://github.com/snowdreams1006/gitbook-plugin-icp/blob/master/example/book.json)

```json
{
    "plugins": ["icp"],
    "pluginsConfig": {
        "icp": {
            "number": "浙ICP备18042346号"
        }
    }
}
```

- 示例`book.json`文件

```json
{
    "plugins": ["icp"],
    "pluginsConfig": {
        "icp": {
            "label": "YOUR OWN ICP LABEL",
            "number": "YOUR OWN ICP NUMBER",
            "link":"YOUR OWN ICP LINK"
        }
    }
}
```

或者，您可以添加 `label` 以自定义标签：

```json
{
    "plugins": ["icp"],
    "pluginsConfig": {
        "icp": {
            "label": "YOUR OWN ICP LABEL",
            "number": "YOUR OWN ICP NUMBER",
            "link": "YOUR OWN ICP LINK"
        }
    }
}
```

或者您可以添加 `link` 以自定义链接：

```json
{
    "plugins": ["icp"],
    "pluginsConfig": {
        "icp": {
            "label": "YOUR OWN ICP LABEL",
            "number": "YOUR OWN ICP NUMBER",
            "link": "YOUR OWN ICP LINK"
        }
    }
}
```

或者您可以添加 `style` 以自定义备案样式：

```json
{
    "plugins": ["icp"],
    "pluginsConfig": {
        "icp": {
            "label": "YOUR OWN ICP LABEL",
            "number": "YOUR OWN ICP NUMBER",
            "link": "YOUR OWN ICP LINK",
            "style": {
              "color":  "#f72b07"
            }
        }
    }
}
```

**注意** ：如果您的书还没有创建,以上代码段可以用作完整的`book.json`文件.

## 作者

👤 **snowdreams1006**

- 网站 : [snowdreams1006.tech](https://snowdreams1006.tech/)
- GitHub :  [@snowdreams1006](https://github.com/snowdreams1006)
- 电子邮件 : [snowdreams1006@163.com](mailto:snowdreams1006@163.com)

## 贡献

欢迎提供文稿，问题和功能请求！ <br>随时检查[问题页面](https://github.com/snowdreams1006/gitbook-plugin-icp/issues) 。

## 表示支持

如果这个项目对您有帮助，请给个[**星星**](https://github.com/snowdreams1006/gitbook-plugin-icp) ！

## 版权

版权所有©2019 [snowdreams1006](https://github.com/snowdreams1006) 。

该项目是[MIT](https://github.com/snowdreams1006/gitbook-plugin-icp/blob/master/LICENSE)许可的。
