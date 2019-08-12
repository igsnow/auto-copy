// 控制扩展程序的js，比如点击插件开始按钮
let bg = chrome.extension.getBackgroundPage();
$(function () {
    let pageUrl = '';
    bg && bg.getCurrentTabUrl(url => {
        pageUrl = url
    });
    $("#btn").click(function () {
        bg && bg.sendMessageToContentScript({
            cmd: 'jump', value: pageUrl
        }, res => {
            console.log('来自vmall content的回复：' + res);
        });
    });
});
