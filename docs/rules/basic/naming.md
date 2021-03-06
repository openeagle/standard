# 命名

最重要的一致性规则是命名管理. 命名的风格能让我们在不需要去查找类型声明的条件下快速地了解某个名字代表的含义: 类型, 变量, 函数, 常量等等, 甚至. 我们大脑中的模式匹配引擎非常依赖这些命名规则.

命名规则具有一定随意性, 但相比按个人喜好命名, 一致性更重要, 所以无论你认为它们是否重要, 规则总归是规则。

## 规范

### 通用命名规则

要点：

- 函数命名, 变量命名, 文件命名要有描述性; 
- 少用缩写。

说明：尽可能使用描述性的命名, 别心疼空间, 毕竟相比之下让代码易于新读者理解更重要。 不要用只有项目开发者能理解的缩写, 也不要通过砍掉几个字母来缩写单词.

- 反例

    ```js
    var n;                   // 毫无意义.
    var nerr;                // 含糊不清的缩写.
    var nCompConns;          // 含糊不清的缩写.
    var wgcConnections;      // 只有贵团队知道是什么意思.
    var pcReader;            // "pc" 有太多可能的解释了.
    var cstmrId;             // 删减了若干字母.
    ```

- 正确

    ```js
    var priceCountReader;    // 无缩写
    var numErrors;           // "num" 是一个常见的写法
    var numDNSConnections;   // 人人都知道 "DNS" 是什么
    ```

### 目录命名

为了避免在大小写敏感的平台上引起混淆，文件夹名应该小写。文件名应该以 .js 结尾，并且应该不包含除了 - 或 _ （相比较 _ 更推荐 - ）以外的其它标点，多个单词使用符号 - 拼接。

特例：React 和 Vue 等 UI 框架的**非全局公共组件**一般使用大驼峰命名，为了保持命名的一致性，这些组件所在的同名目录也要采用大驼峰命名法。如果不是公共组件，例如：路由组件或全局组件，那么这些组件所在的同名目录采用小写命名方式，多个单词使用符号 - 拼接。

- 公共组件：`src/components/DatePicker/index.tsx`。

    非全局公共组件一般需要显示的被人其他模块引入，其所在目录命名与组件命名一致是更好的选择（可以根据组件名快速定位组件所在位置）

- 路由组件：`src/pages/date-picker/index.tsx`。

    路由组件一般不需要被其他模块引入复用，其所在目录命名与真实路由命名一致是更好的选择（可以根据路由路径快速定位路由组件）。

### 文件命令

根据文件内容类型不同使用不同的命名约定，文件名应该不包含除了 - 或 _ （相比较 _ 更推荐 - ）以外的其它标点。

- 路由组件命名

    文件名应该小写，多个单词使用符号 - 拼接。

- 公共组件命名

    文件名应该符合大驼峰规则。

- 类型文件命名

    文件名应该符合大驼峰。。

- 单利文件命名

    文件名应该符合小驼峰规则。

- 工具文件命名

    文件名应该小写，多个单词使用符号 - 拼接。

- 资源文件命名

    文件名应该小写，多个单词使用符号 _ 拼接，其命名结构应该为 `模块_类别_功能_状态.扩展名`。

### 类型命名

大驼峰。

### 变量命名

小驼峰

### 常量命名

- 全局配置常量：全部大写，多个单词使用符号 _ 拼接。
- 普通别名常量：采用 const 声明，命名和普通变量一致。

### 函数命名

小驼峰

## 工具

- [CODELF](https://github.com/unbug/codelf) - A search tool helps dev to solve the naming things problem.

## 参考文献

- [Google JavaScript 风格指南](https://zh-google-styleguide.readthedocs.io/en/latest/google-javascript-styleguide/contents/)

