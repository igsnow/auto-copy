// 共用页面的DOM，但是和页面的js是隔离的
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (location.host == 'localhost:8080' && location.hash == '#/') {
        if (request.cmd == 'jump') {
            console.log(request.value);
            if (!request.value) return;
            handleCopy(request.value);
            sendResponse('jump消息已收到！');
        }
    } else {
        console.log('不是mall首页')
    }
});

function handleCopy(val) {
    let ipt = $('.top-banner input');
    let btn = $('.top-banner .btn');
    if (ipt && ipt[0]) {
        ipt[0].value = val;
        ipt[0].dispatchEvent(new Event('input'));
    }
    if (btn && btn[0]) {
        console.log('click');
        btn[0].click()
    }
}






