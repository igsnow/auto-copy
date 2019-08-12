// 共用页面的DOM，但是和页面的js是隔离的
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (location.host == 'www.baidu.com') {
        if (request.cmd == 'jump') {
            console.log(request.value)
        }
    } else {
        console.log('不是百度页面')
    }
});






