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

### mindmup

{% simplemindmap type="mindmup" %}
```mindmup
{
  "title": "MindMapping",
  "id": 1,
  "formatVersion": 2,
  "ideas": {
    "11": {
      "title": "Software",
      "id": 8,
      "ideas": {
        "1": {
          "title": "FreeMind",
          "id": 9
        },
        "2": {
          "title": "XMind",
          "id": 10
        },
        "3": {
          "title": "MindMeister",
          "id": 11
        },
        "4": {
          "title": "iMindMap",
          "id": 13,
          "ideas": {
            "1": {
              "title": "by Tony Buzan",
              "id": 30
            }
          }
        },
        "5": {
          "title": "MindManager",
          "id": 14
        },
        "2.5": {
          "title": "MindMup",
          "id": 12
        }
      }
    },
    "21": {
      "title": "Misc",
      "id": 15,
      "ideas": {
        "1": {
          "title": "Visual Understanding Environment (VUE)",
          "id": 23,
          "ideas": {
            "1": {
              "title": "http://vue.tufts.edu/index.cfm",
              "id": 24
            }
          }
        },
        "2": {
          "title": "TiddlyMap",
          "id": 26
        },
        "3": {
          "title": "Orgmode.org",
          "id": 27
        },
        "4": {
          "title": "https://www.moh.io/mohiomap",
          "id": 31,
          "ideas": {}
        }
      }
    },
    "31": {
      "title": "Resources",
      "id": 2,
      "ideas": {
        "1": {
          "title": "http://lifehacker.com/five-best-mind-mapping-tools-476534555",
          "id": 18
        },
        "2": {
          "title": "http://lifehacker.com/5188833/hive-five-five-best-mind-mapping-applications",
          "id": 19
        },
        "3": {
          "title": "https://en.wikipedia.org/wiki/List_of_concept-_and_mind-mapping_software",
          "id": 21
        }
      },
      "attr": {
        "position": [
          67.5,
          255,
          1
        ],
        "style": {}
      }
    }
  }
}
```
{% endsimplemindmap %}

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