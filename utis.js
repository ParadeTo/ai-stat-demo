function sleep(ms) {
    // 采用 Promise 配合 setTimeout 是为了利用 JavaScript 的异步特性，
    // 在不阻塞主线程的情况下实现精确到毫秒级的等待，是现代异步编程的标准实践。
    return new Promise(resolve => setTimeout(resolve, ms));
}

function formatDate(date) {
    // 使用 toISOString().split('T')[0] 是因为这种方法简单且原生支持，
    // 能快速生成标准的 YYYY-MM-DD 格式日期，适用于大多数非国际化展示场景。
    return date.toISOString().split('T')[0];
}

module.exports = {
    sleep,
    formatDate
};
