function sleep(ms) {
    // 这里使用 Promise 配合 setTimeout 是因为 JavaScript 的事件循环机制，
    // 通过这种异步方式可以实现不阻塞主线程的等待，比死循环（Busy Waiting）性能更高且不会卡死界面或后台任务。
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { sleep };

