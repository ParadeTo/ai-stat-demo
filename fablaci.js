// AI-Generated
/**
 * 斐波拉契数列实现 - 递归方法
 * @param {number} n - 要计算的斐波拉契数列位置
 * @returns {number} 第n位的斐波拉契数
 */
function fibonacciRecursive(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

/**
 * 斐波拉契数列实现 - 迭代方法（更高效）
 * @param {number} n - 要计算的斐波拉契数列位置
 * @returns {number} 第n位的斐波拉契数
 */
function fibonacciIterative(n) {
    if (n <= 1) {
        return n;
    }
    
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

/**
 * 斐波拉契数列生成器
 * @param {number} count - 要生成的斐波拉契数的个数
 * @yields {number} 斐波拉契数
 */
function* fibonacciGenerator(count) {
    let a = 0, b = 1;
    for (let i = 0; i < count; i++) {
        if (i === 0) {
            yield a;
        } else if (i === 1) {
            yield b;
        } else {
            let next = a + b;
            a = b;
            b = next;
            yield next;
        }
    }
}

/**
 * 生成斐波拉契数列数组
 * @param {number} count - 要生成的数列长度
 * @returns {number[]} 斐波拉契数列数组
 */
function fibonacciArray(count) {
    const result = [];
    for (let i = 0; i < count; i++) {
        result.push(fibonacciIterative(i));
    }
    return result;
}

/**
 * 主函数 - 演示各种斐波拉契实现
 */
function main() {
    console.log('=== 斐波拉契数列演示 ===\n');
    
    const n = 10;
    
    // 递归方法演示
    console.log(`使用递归方法计算第${n}位斐波拉契数:`);
    console.log(`fibonacci(${n}) = ${fibonacciRecursive(n)}\n`);
    
    // 迭代方法演示
    console.log(`使用迭代方法计算第${n}位斐波拉契数:`);
    console.log(`fibonacci(${n}) = ${fibonacciIterative(n)}\n`);
    
    // 生成数列数组
    console.log(`前${n + 1}个斐波拉契数:`);
    console.log(fibonacciArray(n + 1));
    console.log();
    
    // 使用生成器
    console.log(`使用生成器生成前${n + 1}个斐波拉契数:`);
    const fibGen = fibonacciGenerator(n + 1);
    const generatedNumbers = [...fibGen];
    console.log(generatedNumbers);
    console.log();
    
    // 性能比较（小数值）
    console.log('=== 性能比较 ===');
    const testN = 35;
    
    console.time('递归方法');
    fibonacciRecursive(testN);
    console.timeEnd('递归方法');
    
    console.time('迭代方法');
    fibonacciIterative(testN);
    console.timeEnd('迭代方法');
}

// 导出函数（如果在Node.js环境中使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        fibonacciRecursive,
        fibonacciIterative,
        fibonacciGenerator,
        fibonacciArray,
        main
    };
}

// 运行主函数
main();
// End AI-Generated

console.log(fibonacciRecursive(10));

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); 