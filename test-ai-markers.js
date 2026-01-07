function bubbleSort(arr) {
    const n = arr.length;
    let totalComparisons = 0;
    let totalSwaps = 0;

    for (let i = 0; i < n; i++) {
        let swapped = false;
        console.log(`\n--- 第 ${i + 1} 轮遍历开始 ---`);
        console.log(`当前数组状态: [${arr.join(', ')}]`);

        for (let j = 0; j < n - i - 1; j++) {
            totalComparisons++;
            console.log(`  比较索引 ${j} (${arr[j]}) 和 ${j + 1} (${arr[j + 1]})`);
            if (arr[j] > arr[j + 1]) {
                totalSwaps++;
                console.log(`    >> 交换 ${arr[j]} 和 ${arr[j + 1]}`);
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        console.log(`第 ${i + 1} 轮结束，最大元素 ${arr[n - i - 1]} 已锁定到末尾。`);

        if (!swapped) {
            console.log('  [优化] 本轮未发生交换，数组已排序完成，提前退出。');
            break;
    }
    }

    console.log(`\n=== 排序完成总结 ===`);
    console.log(`总比较次数: ${totalComparisons}`);
    console.log(`总交换次数: ${totalSwaps}`);
    console.log(`最终结果: [${arr.join(', ')}]`);
    return arr;
}

const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log('Unsorted:', testArray);
console.log('Sorted:', bubbleSort(testArray));

console.log('Hello, world!');
