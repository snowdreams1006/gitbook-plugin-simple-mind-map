require([
    "gitbook",
    "jQuery"
], function(gitbook, $) {
    var copyrightConfig = {};

    gitbook.events.bind("start", function(e, config) {
        copyrightConfig = config.copyright || {};

        initCopyright();
    });

    gitbook.events.bind("page.change", initCopyright);

    function initCopyright() {
        var ua = navigator.userAgent.toLowerCase();
        if (window.ActiveXObject) {
            document.body.oncopy = function() {
                event.returnValue = false;
                var t = document.selection.createRange().text;
                var extraCopyrightInfo = getCopyright();
                clipboardData.setData('Text', t + extraCopyrightInfo);
            };
        } else {
            function addLink() {
                var body_element = document.getElementsByTagName('body')[0];
                var selection;
                selection = window.getSelection();
                var extraCopyrightInfo = getCopyright();
                var copytext = selection + extraCopyrightInfo;
                var newdiv = document.createElement('div');
                newdiv.style.position = 'absolute';
                newdiv.style.left = '-99999px';
                body_element.appendChild(newdiv);
                newdiv.innerHTML = copytext;
                selection.selectAllChildren(newdiv);
                window.setTimeout(function() { body_element.removeChild(newdiv); }, 0);
            }
            document.oncopy = addLink;
        }

    }

    function getCopyright() {
        var site = copyrightConfig.site;
        if (site.slice(-1) != "/") {
            site += '/';
        }
        var url = gitbook.state.filepath;
        var readmeReg = /\/?\bREADME\.md$/;
        if (readmeReg.test(url)) {
            url = site + (url === 'README.md' ? '' : url.replace(readmeReg, '/'));
        } else {
            url = site + url.replace(/.md$/, '.html');
        }
        return '<br><br>作者: ' + copyrightConfig.author + '<br>链接: ' + url + '<br>来源: ' + copyrightConfig.website + '<br>本文原创发布于「' + copyrightConfig.website + '」,转载请注明出处,谢谢合作!<br>';
    }
});