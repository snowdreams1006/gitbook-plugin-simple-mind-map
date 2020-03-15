/*
 *  ===============================================================
 *      snowdreams1006 is not just for programmers
 *  ===============================================================
 *
 *  - Document: index.js
 *  - Author: snowdreams1006
 *  - Description: Gitbook plugin index
 *  - Create Time: 2020-03-15
 */
require('./plugin.css');
require('markmap/style/view.mindmap.css');
require('markmap/lib/d3-flextree');
const markmap = require('markmap/lib/view.mindmap');
const parse = require('markmap/lib/parse.markdown');
const transform = require('markmap/lib/transform.headings');

require([
    "gitbook",
    "jQuery"
], function(gitbook, $) {
    var simplemindmapConfig = {};

    gitbook.events.bind("start", function(e, config) {
        simplemindmapConfig = config["simple-mind-map"] || {};

        entry();
    });

    gitbook.events.bind("page.change", entry);

    var str = ```
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
    console.log(str)

    const entry = () => $('svg.simple-mind-map').each(function () {
        console.log(simplemindmapConfig);

        const $svg = $(this);
        const text = JSON.parse($svg.data('content'));
        const data = transform(parse(text));

        markmap($svg[0], data, {
            preset: 'colorful',
            linkShape: 'diagonal'
        });
    });
});