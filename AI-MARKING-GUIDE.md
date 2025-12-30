# AI代码标记使用指南

## 问题说明
Cursor编辑器的Tab键自动补全无法自动添加AI生成标记，这是编辑器的内置限制。

## 解决方案

### 🎯 方案1：快捷键 (推荐)

#### 使用快捷键快速添加标记：
- **Ctrl+Shift+A** (macOS: Cmd+Shift+A): 添加多行标记模板
  ```javascript
  // AI-Generated
  [你的代码将在这里]
  // End AI-Generated
  ```

- **Ctrl+Alt+A** (macOS: Cmd+Alt+A): 在行末添加单行标记
  ```javascript
  const result = value; // AI-Generated
  ```

### 🎨 方案2：代码片段

#### 输入以下前缀可以快速生成带标记的代码模板：

- `aifunc` → 带标记的函数模板
- `aiconst` → 带标记的常量声明
- `aiclass` → 带标记的类模板
- `aifor` → 带标记的for循环
- `aiif` → 带标记的if语句
- `aim` → 单行标记
- `aistart` → 开始标记
- `aiend` → 结束标记

#### 使用方法：
1. 输入前缀 (例如: `aifunc`)
2. 按Tab键
3. 根据提示填写代码

### 🛠️ 方案3：标记脚本

#### 使用标记脚本为现有代码添加标记：

```bash
# 为指定文件添加标记
node mark-ai-code.js test-ai-markers.js

# 或者运行交互模式
node mark-ai-code.js
```

#### 脚本功能：
1. **标记整个文件** - 在文件开头和结尾添加标记
2. **标记指定行范围** - 为特定行范围添加完整标记
3. **单行标记** - 在指定行末添加 `// AI-Generated`

## 🔄 工作流程建议

### 使用Tab键补全时：
1. 使用Tab键接受AI建议
2. 立即按 **Ctrl+Alt+A** 添加单行标记
   或者按 **Ctrl+Shift+A** 添加多行标记

### 使用对话生成代码时：
- 代码会自动包含标记（根据.cursorrules规则）

### 批量处理现有代码：
1. 使用 `node mark-ai-code.js filename.js` 
2. 选择相应的标记方式

## 📋 最佳实践

### 标记规则：
- **单行代码**: 在行末添加 `// AI-Generated`
- **多行代码**: 使用开始和结束标记包围
- **混合代码**: 为AI生成的部分添加完整标记

### 示例：

```javascript
// 单行标记
const userName = getCurrentUser().name; // AI-Generated

// 多行标记
// AI-Generated
function processData(data) {
    return data.map(item => ({
        ...item,
        processed: true
    }));
}
// End AI-Generated

// 混合代码中的部分标记
const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000 // AI-Generated
};
```

## 🔧 配置文件说明

### `.cursorrules`
- 定义了AI助手生成代码的标记规则
- 要求所有AI生成的代码都必须包含标记

### `.vscode/settings.json`
- 配置编辑器的AI相关设置
- 启用代码片段和快捷键功能

### `.vscode/keybindings.json`
- 定义快捷键绑定
- 提供快速添加标记的快捷方式

### `.vscode/javascript.code-snippets`
- 定义代码片段模板
- 提供预设的带标记代码模板

## 🚀 开始使用

1. **重启Cursor编辑器** 以加载新配置
2. **测试快捷键** 在任意文件中按 Ctrl+Shift+A
3. **尝试代码片段** 输入 `aifunc` 然后按Tab
4. **运行标记脚本** 为现有代码添加标记

## 💡 提示

- 养成使用Tab键后立即添加标记的习惯
- 使用代码片段可以提高效率
- 定期检查代码中的AI标记完整性
- 在代码审查时注意AI生成的标记 