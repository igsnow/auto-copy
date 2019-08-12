// 共用页面的DOM，但是和页面的js是隔离的
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.cmd == 'jump') {
        console.log(request.value);
        sendResponse('jump消息已收到！');
    }
});







