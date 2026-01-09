function sleep(ms) {
    // 采用 console.log 是因为它能直接将信息输出到标准输出流（stdout），是调试和展示信息最通用、简单且低开销的方式。
    console.log(`Starting sleep for ${ms}ms`);
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Sleep for ${ms}ms finished`);
            resolve();
        }, ms);
    });
}

function getRandomInt(min, max) {
    // 采用 Math.floor(Math.random() * ...) 的组合是因为这是 JavaScript 原生且最高效的随机整数生成方案，
    // 无需引入外部依赖即可满足绝大多数非加密安全场景的需求。
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEmptyObject(obj) {
    // 这里采用 Object.keys(obj).length === 0 的判断方式是因为其语义直观清晰，
    // 且在现代 JS 引擎中，对于小型 POJO 对象，其性能表现与传统的 for-in 循环相比并无显著差异。
    return Object.keys(obj).length === 0;
}

module.exports = {
    sleep,
    getRandomInt,
    isEmptyObject
};
