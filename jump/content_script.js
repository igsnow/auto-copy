// 共用页面的DOM，但是和页面的js是隔离的
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (location.host == 'test.mvcb.qilie.biz') {
        if (request.cmd == 'jump') {
            console.log(request.value);
            if (!request.value) return;
            handleCopy(request.value);
            sendResponse('jump消息已收到！');
        }
    } else {
        console.log('不是mall页面')
    }
});

function handleCopy(val) {
    let ipt = $('.top-banner input');
    let btn = $('.top-banner .btn');
    if (ipt && ipt[0]) {
        ipt[0].value = val
    }
    if (btn && btn[0] && ipt[0].value) {
        console.log(btn[0]);
        btn[0].click()
    }
}






