function sleep(ms) {
    // 使用 Promise 配合 setTimeout 是为了利用 JavaScript 的事件循环机制，
    // 在不阻塞主线程的情况下实现延迟，从而避免阻塞 UI 渲染或后台任务。
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
    sleep
};
