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

module.exports = {
    sleep
};
