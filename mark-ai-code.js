#!/usr/bin/env node

// AI-Generated
/**
 * AI代码标记工具
 * 帮助快速为代码添加AI生成标记
 */

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    console.log('\n🤖 AI代码标记工具');
    console.log('帮助你快速为AI生成的代码添加标记\n');
    
    const fileName = process.argv[2];
    if (fileName) {
        processFile(fileName);
    } else {
        rl.question('请输入要处理的文件名: ', (inputFileName) => {
            processFile(inputFileName);
        });
    }
}

function processFile(fileName) {
    if (!fs.existsSync(fileName)) {
        console.log(`❌ 文件 ${fileName} 不存在`);
        rl.close();
        return;
    }
    
    const content = fs.readFileSync(fileName, 'utf8');
    const lines = content.split('\n');
    
    console.log(`\n📁 文件: ${fileName}`);
    console.log('📄 当前内容:');
    console.log('=' .repeat(50));
    lines.forEach((line, index) => {
        console.log(`${String(index + 1).padStart(3)}: ${line}`);
    });
    console.log('=' .repeat(50));
    
    showMenu(fileName, lines);
}

function showMenu(fileName, lines) {
    console.log('\n📋 选择操作:');
    console.log('1. 🎯 标记整个文件');
    console.log('2. 📝 标记指定行范围');
    console.log('3. ✏️  在指定行末添加单行标记');
    console.log('4. 🚪 退出');
    
    rl.question('\n请选择 (1-4): ', (choice) => {
        switch(choice.trim()) {
            case '1':
                markEntireFile(fileName, lines);
                break;
            case '2':
                markLineRange(fileName, lines);
                break;
            case '3':
                markSingleLines(fileName, lines);
                break;
            case '4':
                console.log('👋 再见!');
                rl.close();
                break;
            default:
                console.log('❌ 无效选择，请重新选择');
                showMenu(fileName, lines);
        }
    });
}

function markEntireFile(fileName, lines) {
    const newContent = [
        '// AI-Generated',
        ...lines,
        '// End AI-Generated'
    ].join('\n');
    
    fs.writeFileSync(fileName, newContent);
    console.log(`✅ 已为整个文件添加AI标记`);
    rl.close();
}

function markLineRange(fileName, lines) {
    rl.question('请输入起始行号: ', (startStr) => {
        rl.question('请输入结束行号: ', (endStr) => {
            const start = parseInt(startStr) - 1;
            const end = parseInt(endStr) - 1;
            
            if (isNaN(start) || isNaN(end) || start < 0 || end >= lines.length || start > end) {
                console.log('❌ 无效的行号范围');
                rl.close();
                return;
            }
            
            const newLines = [...lines];
            newLines.splice(start, 0, '// AI-Generated');
            newLines.splice(end + 2, 0, '// End AI-Generated');
            
            fs.writeFileSync(fileName, newLines.join('\n'));
            console.log(`✅ 已为第${start + 1}-${end + 1}行添加AI标记`);
            rl.close();
        });
    });
}

function markSingleLines(fileName, lines) {
    rl.question('请输入要标记的行号 (用逗号分隔，例如: 1,3,5): ', (lineNumbersStr) => {
        try {
            const lineNumbers = lineNumbersStr.split(',')
                .map(n => parseInt(n.trim()) - 1)
                .filter(n => !isNaN(n));
            
            if (lineNumbers.length === 0) {
                console.log('❌ 没有有效的行号');
                rl.close();
                return;
            }
            
            const newLines = [...lines];
            
            // 从后往前处理，避免行号偏移
            lineNumbers.sort((a, b) => b - a).forEach(lineIndex => {
                if (lineIndex >= 0 && lineIndex < newLines.length) {
                    if (!newLines[lineIndex].includes('// AI-Generated')) {
                        newLines[lineIndex] += ' // AI-Generated';
                    }
                }
            });
            
            fs.writeFileSync(fileName, newLines.join('\n'));
            console.log(`✅ 已为第${lineNumbers.map(n => n + 1).join(', ')}行添加AI标记`);
            rl.close();
        } catch (error) {
            console.log('❌ 处理行号时出错:', error.message);
            rl.close();
        }
    });
}

// 启动程序
main();
// End AI-Generated 