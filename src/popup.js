// 控制扩展程序的js，比如点击插件开始按钮
let bg = chrome.extension.getBackgroundPage();
$(function () {


    $("#btn").click(function () {
        // 在非1688页面点击插件按钮不会导致插件报错
        if (bg) {
            bg.getCurrentTabUrl(url => {
                alert(JSON.stringify(url))
            })

            // bg.sendMessageToContentScript({cmd: 'batch', value: '开始1688批量采购！'}, res => {
            //     console.log('来自vwork content的回复：' + res);
            // });
            // // 每次重新批量下单时，清空插件的全局数据
            // bg.clearData()
        }
    });
});
