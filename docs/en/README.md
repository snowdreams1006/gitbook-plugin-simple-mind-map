# Welcome to gitbook-plugin-simple-mind-map 👋

## mind-maps

```mind:height=250,title=gitbook 入门教程,color
* [gitbook 入门教程](myGitbook/README.md)
    * [准备阶段](myGitbook/preparation/prepare.md)
        * [前置知识](myGitbook/preparation/front-knowledge.md)
        * [环境要求](myGitbook/preparation/environmental-requirements.md)
    * [快速体验](myGitbook/experience/preview.md)
        * [gitbook-cli 命令行操作](myGitbook/experience/gitbook-cli.md)
        * [gitbook-editor 编辑器操作](myGitbook/experience/gitbook-editor.md)
        * [gitbook.com 官网操作](myGitbook/experience/gitbook-com.md)
    * [高级进阶](myGitbook/advance/advance.md)
        * [插件介绍](myGitbook/advance/plugin.md)
            * [实用插件](myGitbook/advance/plugin-practical.md)
            * [主题插件](myGitbook/advance/plugin-theme.md)
            * [开发插件](myGitbook/advance/plugin-develop.md)
        * [导出电子书](myGitbook/advance/export.md)
        * [发布电子书](myGitbook/advance/publish.md)
    * [公众号引流](myGitbook/openwrite/README.md)
    * [优化搜索](myGitbook/seo/README.md)
    * [常见问题](myGitbook/issue/README.md)
        * [热加载失败治标之法](myGitbook/issue/rm-output-directory.md)
        * [初始化默认折叠效果](myGitbook/issue/modify-default-fold.md)
    * [参考更多](myGitbook/reference/README.md)
```

## simple-mind-map

### markdown

````markdown
{% simplemindmap %}
```markdown
* [gitbook 入门教程](myGitbook/README.md)
    * [准备阶段](myGitbook/preparation/prepare.md)
        * [前置知识](myGitbook/preparation/front-knowledge.md)
        * [环境要求](myGitbook/preparation/environmental-requirements.md)
    * [快速体验](myGitbook/experience/preview.md)
        * [gitbook-cli 命令行操作](myGitbook/experience/gitbook-cli.md)
        * [gitbook-editor 编辑器操作](myGitbook/experience/gitbook-editor.md)
        * [gitbook.com 官网操作](myGitbook/experience/gitbook-com.md)
    * [高级进阶](myGitbook/advance/advance.md)
        * [插件介绍](myGitbook/advance/plugin.md)
            * [实用插件](myGitbook/advance/plugin-practical.md)
            * [主题插件](myGitbook/advance/plugin-theme.md)
            * [开发插件](myGitbook/advance/plugin-develop.md)
        * [导出电子书](myGitbook/advance/export.md)
        * [发布电子书](myGitbook/advance/publish.md)
    * [公众号引流](myGitbook/openwrite/README.md)
    * [优化搜索](myGitbook/seo/README.md)
    * [常见问题](myGitbook/issue/README.md)
        * [热加载失败治标之法](myGitbook/issue/rm-output-directory.md)
        * [初始化默认折叠效果](myGitbook/issue/modify-default-fold.md)
    * [参考更多](myGitbook/reference/README.md)
```
{% endsimplemindmap %}
````

### txtmap

{% simplemindmap type="txtmap" %}
```txtmap
some
  example
    content
  for
  you
    to
    see
      the
    file
      structure
```
{% endsimplemindmap %}