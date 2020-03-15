# Welcome to gitbook-plugin-icp 👋

[![npm:version](https://img.shields.io/npm/v/gitbook-plugin-icp.svg)](https://www.npmjs.com/package/gitbook-plugin-icp)
[![npm:download](https://img.shields.io/npm/dt/gitbook-plugin-icp.svg)](https://www.npmjs.com/package/gitbook-plugin-icp)
[![npm:prerequisite](https://img.shields.io/badge/gitbook-*-blue.svg)](https://www.npmjs.com/package/gitbook-plugin-icp)
[![github:documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/snowdreams1006/gitbook-plugin-icp#readme)
[![github:maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/snowdreams1006/gitbook-plugin-icp/graphs/commit-activity)
[![npm:license](https://img.shields.io/npm/l/gitbook-plugin-icp.svg)](https://github.com/snowdreams1006/gitbook-plugin-icp/blob/master/LICENSE)
[![github:snodreams1006](https://img.shields.io/badge/github-snowdreams1006-brightgreen.svg)](https://github.com/snowdreams1006)
[![website:snodreams1006.tech](https://img.shields.io/badge/website-snowdreams1006.tech-brightgreen.svg)](https://snowdreams1006.tech/)
[![微信公众号:雪之梦技术驿站-brightgreen.svg](https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg)

> gitbook plugin for adding icp info to footer

### 🏠 [Homepage](https://github.com/snowdreams1006/gitbook-plugin-icp#readme)

- Github : [https://snowdreams1006.github.io/gitbook-plugin-icp/](https://snowdreams1006.github.io/gitbook-plugin-icp/)
- GitLab: [https://snowdreams1006.gitlab.io/gitbook-plugin-icp/](https://snowdreams1006.gitlab.io/gitbook-plugin-icp/)
- Gitee : [https://snowdreams1006.gitee.io/gitbook-plugin-icp/](https://snowdreams1006.gitee.io/gitbook-plugin-icp/)

## Screenshot

```mind:height=750,title=正则表达式目录,color
# 目录

* [正则表达式简介](README.md)
    * [发展历史](index/progress.md)
    * [快速尝鲜](index/elegant.md)
    * [编程实现](index/programming.md)
    * [简要总结](index/summary.md)
* [快速上手正则表达式](quickstart/README.md)
    * [正则表达式的应用场景](quickstart/problem.md)
    * [最简单的正则表达式](quickstart/simple.md)
    * [正则表达式其实很强大](quickstart/example.md)
    * [大白话说清楚正则匹配流程](quickstart/workflow.md)
    * [搞定基本概念正则不再难](quickstart/concept.md)
    * [正则表达式的成对操作](quickstart/sides.md)
    * [可视化直观梳理正则表达式](quickstart/visualization.md)
    * [正则表达式简单练习](quickstart/practice.md)
    * [最常见的应用场景](quickstart/README.md)
        * [查找规则文本](quickstart/situation/find.md)
        * [提取关键数据](quickstart/situation/extract.md)
        * [验证特定格式](quickstart/situation/validation.md)
    * [怎么用正则处理复杂文本](quickstart/complex.md)
    * [正则表达式的运行效率](quickstart/inefficient.md)
    * [快速入门的简要总结](quickstart/summary.md)
* [不同编程语言的正则实现](language/README.md)
    * [浏览器直接原生支持js](language/js.md)
    * [综合就业排名第一java](language/java.md)
    * [应用领域最广泛python](language/python.md)
    * [编程语言的实现总结](language/summary.md)
* [学会正则的基础语法](grammar/basic/README.md)
    * [正则的基本组成规则](grammar/basic/composition/README.md)
        * [普通字符](grammar/basic/composition/normal.md)
        * [特殊字符](grammar/basic/composition/special.md)
    * [正则表达式中的特殊字符](grammar/basic/special/README.md)
        * [通配符](grammar/basic/special/wildcard.md)
        * [重复限定符](grammar/basic/special/repeat.md)
        * [位置定界符](grammar/basic/special/position.md)
        * [字符集范围符](grammar/basic/special/scope.md)
        * [常见的缩写字符](grammar/basic/special/simplify.md)
        * [表示逻辑取反的字符](grammar/basic/special/logic.md)
        * [神奇的转义符](grammar/basic/special/escape.md)
    * [正则中常见的成对操作](grammar/basic/confuse/README.md)
        * [匹配单字符还是多字符](grammar/basic/confuse/singleormultiple.md)
        * [选择贪婪还是非贪婪模式](grammar/basic/confuse/greedorlazy.md)
        * [需要捕获还是非捕获分组](grammar/basic/confuse/captureornot.md)
        * [前瞻断言还是后顾断言](grammar/basic/confuse/foresightorlookback.md)
        * [正向还是负向断言](grammar/basic/confuse/positiveornegative.md)
    * [正则中常见的运行模式](grammar/basic/mode/README.md)
        * [忽略大小写模式](grammar/basic/mode/ignorecase.md)
        * [全局模式](grammar/basic/mode/global.md)
        * [多行模式](grammar/basic/mode/multiple.md)
        * [单行模式](grammar/basic/mode/single.md)
    * [正则表达式基础练习](grammar/basic/practice.md)
    * [正则基础知识总结](grammar/basic/summary.md)
* [搞懂正则的高级语法](grammar/advance/README.md)
    * [流派概述](grammar/advance/genre.md)
    * [思维模式](grammar/advance/thinking.md)
    * [匹配原理](grammar/advance/engine/README.md)
        * [两类主流的发动引擎](grammar/advance/engine/type.md)
        * [引擎的匹配规则有哪些](grammar/advance/engine/rule.md)
        * [正则主导还是文本主导](grammar/advance/engine/drive.md)
        * [匹配优先和回溯引用](grammar/advance/engine/matchingandtrackback.md)
        * [举例说明匹配流程](grammar/advance/engine/workflow.md)
    * [高效正则](grammar/advance/efficient/README.md)
        * [文本预处理](grammar/advance/efficient/preprocess.md)
        * [正则预编译](grammar/advance/efficient/precompiled.md)
        * [尽可能限制范围](grammar/advance/efficient/limitscope.md)
        * [优先使用简化量词](grammar/advance/efficient/shorter.md)
        * [慎用分组操作](grammar/advance/efficient/group.md)
        * [慎用多选字符组](grammar/advance/efficient/optional.md)
        * [慎用贪婪模式](grammar/advance/efficient/greed.md)
        * [慎用通配符匹配](grammar/advance/efficient/wildcard.md)
        * [及时性能测试反馈](grammar/advance/efficient/test.md)
    * [重新理解](grammar/advance/review/README.md)
        * [默认匹配单字符](grammar/advance/review/char.md)
        * [默认贪婪模式](grammar/advance/review/greed.md)
        * [默认捕获分组](grammar/advance/review/capture.md)
        * [默认前瞻断言](grammar/advance/review/foresight.md)
        * [默认正向前瞻](grammar/advance/review/positive.md)
        * [默认区分大小写](grammar/advance/review/casesensitivity.md)
        * [支持回溯引用](grammar/advance/review/trackback.md)
    * [迎接挑战](grammar/advance/practice/README.md)
        * [匹配对称的括号](grammar/advance/practice/matching.md)
        * [应付异常匹配](grammar/advance/practice/exception.md)
        * [验证数据格式](grammar/advance/practice/validation.md)
    * [回顾总结](grammar/advance/summary.md)
* [从熟练到精通正则表达式](implement/master/README.md)
    * [可视化正则表达式](implement/master/explain.md)
    * [实现简单正则引擎](implement/master/engine.md)
    * [优化正则表达式](implement/master/optimization.md)
    * [造轮子正则总结](implement/master/summary.md)
* [推荐学习资源](learning/README.md)
    * [学习辅助工具](learning/tools.md)
    * [升级提升之路](learning/improve.md)
* [一起回顾总结](review/README.md)
```

{% simplemindmap title="正则表达式目录",color="colorful" %}
```markdown
# 目录

* [正则表达式简介](README.md)
    * [发展历史](index/progress.md)
    * [快速尝鲜](index/elegant.md)
    * [编程实现](index/programming.md)
    * [简要总结](index/summary.md)
* [快速上手正则表达式](quickstart/README.md)
    * [正则表达式的应用场景](quickstart/problem.md)
    * [最简单的正则表达式](quickstart/simple.md)
    * [正则表达式其实很强大](quickstart/example.md)
    * [大白话说清楚正则匹配流程](quickstart/workflow.md)
    * [搞定基本概念正则不再难](quickstart/concept.md)
    * [正则表达式的成对操作](quickstart/sides.md)
    * [可视化直观梳理正则表达式](quickstart/visualization.md)
    * [正则表达式简单练习](quickstart/practice.md)
    * [最常见的应用场景](quickstart/README.md)
        * [查找规则文本](quickstart/situation/find.md)
        * [提取关键数据](quickstart/situation/extract.md)
        * [验证特定格式](quickstart/situation/validation.md)
    * [怎么用正则处理复杂文本](quickstart/complex.md)
    * [正则表达式的运行效率](quickstart/inefficient.md)
    * [快速入门的简要总结](quickstart/summary.md)
* [不同编程语言的正则实现](language/README.md)
    * [浏览器直接原生支持js](language/js.md)
    * [综合就业排名第一java](language/java.md)
    * [应用领域最广泛python](language/python.md)
    * [编程语言的实现总结](language/summary.md)
* [学会正则的基础语法](grammar/basic/README.md)
    * [正则的基本组成规则](grammar/basic/composition/README.md)
        * [普通字符](grammar/basic/composition/normal.md)
        * [特殊字符](grammar/basic/composition/special.md)
    * [正则表达式中的特殊字符](grammar/basic/special/README.md)
        * [通配符](grammar/basic/special/wildcard.md)
        * [重复限定符](grammar/basic/special/repeat.md)
        * [位置定界符](grammar/basic/special/position.md)
        * [字符集范围符](grammar/basic/special/scope.md)
        * [常见的缩写字符](grammar/basic/special/simplify.md)
        * [表示逻辑取反的字符](grammar/basic/special/logic.md)
        * [神奇的转义符](grammar/basic/special/escape.md)
    * [正则中常见的成对操作](grammar/basic/confuse/README.md)
        * [匹配单字符还是多字符](grammar/basic/confuse/singleormultiple.md)
        * [选择贪婪还是非贪婪模式](grammar/basic/confuse/greedorlazy.md)
        * [需要捕获还是非捕获分组](grammar/basic/confuse/captureornot.md)
        * [前瞻断言还是后顾断言](grammar/basic/confuse/foresightorlookback.md)
        * [正向还是负向断言](grammar/basic/confuse/positiveornegative.md)
    * [正则中常见的运行模式](grammar/basic/mode/README.md)
        * [忽略大小写模式](grammar/basic/mode/ignorecase.md)
        * [全局模式](grammar/basic/mode/global.md)
        * [多行模式](grammar/basic/mode/multiple.md)
        * [单行模式](grammar/basic/mode/single.md)
    * [正则表达式基础练习](grammar/basic/practice.md)
    * [正则基础知识总结](grammar/basic/summary.md)
* [搞懂正则的高级语法](grammar/advance/README.md)
    * [流派概述](grammar/advance/genre.md)
    * [思维模式](grammar/advance/thinking.md)
    * [匹配原理](grammar/advance/engine/README.md)
        * [两类主流的发动引擎](grammar/advance/engine/type.md)
        * [引擎的匹配规则有哪些](grammar/advance/engine/rule.md)
        * [正则主导还是文本主导](grammar/advance/engine/drive.md)
        * [匹配优先和回溯引用](grammar/advance/engine/matchingandtrackback.md)
        * [举例说明匹配流程](grammar/advance/engine/workflow.md)
    * [高效正则](grammar/advance/efficient/README.md)
        * [文本预处理](grammar/advance/efficient/preprocess.md)
        * [正则预编译](grammar/advance/efficient/precompiled.md)
        * [尽可能限制范围](grammar/advance/efficient/limitscope.md)
        * [优先使用简化量词](grammar/advance/efficient/shorter.md)
        * [慎用分组操作](grammar/advance/efficient/group.md)
        * [慎用多选字符组](grammar/advance/efficient/optional.md)
        * [慎用贪婪模式](grammar/advance/efficient/greed.md)
        * [慎用通配符匹配](grammar/advance/efficient/wildcard.md)
        * [及时性能测试反馈](grammar/advance/efficient/test.md)
    * [重新理解](grammar/advance/review/README.md)
        * [默认匹配单字符](grammar/advance/review/char.md)
        * [默认贪婪模式](grammar/advance/review/greed.md)
        * [默认捕获分组](grammar/advance/review/capture.md)
        * [默认前瞻断言](grammar/advance/review/foresight.md)
        * [默认正向前瞻](grammar/advance/review/positive.md)
        * [默认区分大小写](grammar/advance/review/casesensitivity.md)
        * [支持回溯引用](grammar/advance/review/trackback.md)
    * [迎接挑战](grammar/advance/practice/README.md)
        * [匹配对称的括号](grammar/advance/practice/matching.md)
        * [应付异常匹配](grammar/advance/practice/exception.md)
        * [验证数据格式](grammar/advance/practice/validation.md)
    * [回顾总结](grammar/advance/summary.md)
* [从熟练到精通正则表达式](implement/master/README.md)
    * [可视化正则表达式](implement/master/explain.md)
    * [实现简单正则引擎](implement/master/engine.md)
    * [优化正则表达式](implement/master/optimization.md)
    * [造轮子正则总结](implement/master/summary.md)
* [推荐学习资源](learning/README.md)
    * [学习辅助工具](learning/tools.md)
    * [升级提升之路](learning/improve.md)
* [一起回顾总结](review/README.md)
```
{% endsimplemindmap %}

- multilingual

![icp-multilingual-index-use-preview.png](icp-multilingual-index-use-preview.png)

- monolingual

![icp-monolingual-index-use-preview.png](icp-monolingual-index-use-preview.png)

## Usage

### Step #1 - Update `book.json` file

1. In you gitbook's `book.json` file, add `icp` to `plugins` list.
2. In `pluginsConfig`,Set the `number` value to your own icp.
3. In `pluginsConfig`,`label` or `link` value is NOT required.By default link url will be [http://www.beian.miit.gov.cn/](http://www.beian.miit.gov.cn/).

Here is simplest example :

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

In addition, the supported configuration options are as follows : 

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

### Step #2 - gitbook commands

1. Run `gitbook install`. It will automatically install `icp` gitbook plugin for your book. This is needed only once.

```bash
gitbook install
```

or you can run `npm install gitbook-plugin-icp` to install locally.

```bash
npm install gitbook-plugin-icp
```

2. Build your book (`gitbook build`) or serve (`gitbook serve`) as usual.

```bash
gitbook serve
```

## Example

- Official documentation configuration file

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

- Official example configuration file

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

- Sample `book.json` file 

```json
{
    "plugins": ["icp"],
    "pluginsConfig": {
        "icp": {
            "number": "YOUR OWN ICP NUMBER"
        }
    }
}
```

or you can add `label` to custom your label:

```json
{
    "plugins": ["icp"],
    "pluginsConfig": {
        "icp": {
            "label": "YOUR OWN ICP LABEL",
            "number": "YOUR OWN ICP NUMBER"
        }
    }
}
```

or you can add `link` to custom your link:

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

or you can add `style` to custom your style of number:

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

**Note**: Above snippet can be used as complete `book.json` file, if your book doesn't have one yet.

## Author

👤 **snowdreams1006**

- Website: [snowdreams1006.tech](https://snowdreams1006.tech/)
- Github: [@snowdreams1006](https://github.com/snowdreams1006)
- Email: [snowdreams1006@163.com](mailto:snowdreams1006@163.com)

## Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/snowdreams1006/gitbook-plugin-icp/issues).

## Show your support

Give a [**Star**](https://github.com/snowdreams1006/gitbook-plugin-icp) if this project helped you!

## Copyright

Copyright © 2019 [snowdreams1006](https://github.com/snowdreams1006).

This project is [MIT](https://github.com/snowdreams1006/gitbook-plugin-icp/blob/master/LICENSE) licensed.