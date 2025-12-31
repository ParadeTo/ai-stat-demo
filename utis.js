function sleep(ms) {
    // manual
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = {
    sleep
};
