// 控制扩展程序的js，比如点击插件开始按钮
let bg = chrome.extension.getBackgroundPage();
$(function () {
    let pageUrl = '';
    bg && bg.getCurrentTabUrl(url => {
        pageUrl = url
    })

    $("#btn").click(function () {
        // 在非1688页面点击插件按钮不会导致插件报错
        if (bg) {
            bg.sendMessageToContentScript({cmd: 'jump', value: pageUrl}, res => {
                console.log('来自vmall content的回复：' + res);
            });
            // 每次重新批量下单时，清空插件的全局数据
            bg.clearData()
        }
    });
});
