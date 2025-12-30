// AI-Generated
/**
 * 快速排序实现
 * @param {Array} arr 待排序数组
 * @param {number} left 左边界
 * @param {number} right 右边界
 * @returns {Array} 排序后的数组
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
    // 当左指针小于右指针时才进行排序，这是递归的终止条件。
    if (left < right) {
        console.log(`\n>>> 对区间 [${left}, ${right}] 进行分区: [${arr.slice(left, right + 1).join(', ')}]`);
        
        // 获取分区索引
        const pivotIndex = partition(arr, left, right);
        
        // 递归处理左半部分
        quickSort(arr, left, pivotIndex - 1);
        // 递归处理右半部分
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

/**
 * 分区操作
 * @param {Array} arr 数组
 * @param {number} left 左边界
 * @param {number} right 右边界
 * @returns {number} 分区索引
 */
function partition(arr, left, right) {
    // 这里选择最右侧元素作为基准值（Pivot），在处理随机数据时这种方式实现简单且有效。
    const pivot = arr[right];
    console.log(`  选定基准值: ${pivot}`);
    
    let i = left - 1;

    for (let j = left; j < right; j++) {
        console.log(`    比较 ${arr[j]} 与基准 ${pivot}`);
        if (arr[j] < pivot) {
            i++;
            // 发现小于基准的元素，将其交换到左侧区域。
            console.log(`      交换 ${arr[i]} 和 ${arr[j]}`);
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // 将基准值交换到中间位置，完成本次分区。
    console.log(`  分区完成，将基准 ${pivot} 移动到位置 ${i + 1}`);
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    
    console.log(`  当前数组状态: [${arr.join(', ')}]`);
    return i + 1;
}

const testArray = [64, 34, 25, 12, 22, 11, 90];
console.log('Unsorted:', testArray);
console.log('Sorted:', quickSort(testArray));
// End AI-Generated
