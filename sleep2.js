function sleep(ms) {
    // 采用 Promise 结合 setTimeout 的实现方式，是利用了 JavaScript 的事件循环机制，
    // 以异步非阻塞的方式挂起当前执行上下文，从而避免在等待期间占用 CPU 资源或阻塞主线程。
    //ai
    console.log('hi');
    console.log('hi');
    console.log('hi');
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { sleep };

console.log('hi');
console.log('hi');


