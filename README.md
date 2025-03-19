### !!!
这个步骤是自己摸索的，可能有很多不严谨的地方，欢迎**issue**。

### 在线浏览
```https://react-antd-visualization.vercel.app/```

### 主要技术栈：
**React + TypeScript**

使用 React 构建动态交互的用户界面，同时借助 TypeScript 提供静态类型检查，提升代码的可维护性和开发效率。

**Vite**

使用 Vite 作为项目的构建工具，Vite 提供了非常快速的开发环境，并且优化了生产构建。通过使用 Vite，你可以获得快速启动、热更新等优点，提升开发体验。

**Ant Design (Antd)**

项目使用 Ant Design 作为 UI 库，提供了一组丰富的高质量 React 组件，用于构建现代、响应式的用户界面。Antd 的设计风格简洁而优雅，能够快速满足各种业务需求。

**React Router**

React Router 用于管理不同页面的路由和导航，允许用户在不同的 Tab 页面和子页面之间切换，提升用户体验。

**ECharts React 和 AntV**

项目集成了 ECharts React 和 AntV 两个强大的可视化库，用于展示图表和数据可视化内容。ECharts 提供了各种类型的图表，AntV 则主要用于图形可视化和图形数据库的展示。这两者的结合使得数据展现更加丰富和灵活。

**Axios**

使用 Axios 进行与后端接口的数据交互。Axios 作为一款基于 Promise 的 HTTP 客户端，方便发起 GET、POST 等请求，并能处理响应数据。

**Vercel**

项目通过 Vercel 实现了快速部署和托管，Vercel 提供了高效的云服务，能够一键将项目部署到线上，并支持持续集成（CI）和持续部署（CD），让开发者专注于编码而无需担心部署配置。



### 描述
这个项目是一个现代化的前端应用，结合了 React、TypeScript 和一系列先进的前端技术，提供了良好的开发体验和用户体验。通过 Vercel 快速部署、Ant Design 提供的 UI 组件、ECharts 和 AntV 的可视化功能，可以高效地处理和展示数据。无论是开发人员还是用户，都能从中获得流畅和直观的使用体验。



### 数据来源【部分...
上海市公共数据开放平台：https://data.sh.gov.cn/

疫情api：https://disease.sh/docs/

上海过去7天天气：https://open-meteo.com/

人口最多的10个国家：https://restcountries.com/



### 项目基础搭建：
前提：要安装node哦，Vite 本身也是依赖 Node.js 的，所以也需要安装好 Node 环境，并且 Vite 要求 Node 的版本要大于等于 12 版本。

1、打开终端（Terminal），运行以下命令，其中my-antd-app替换为自己项目名

```npm create vite@latest my-antd-app```
然后就根据终端提示，通过⬆️ ⬇️键来选择React、TypeScript！

2、安装antd

```npm i antd```

3、启动

```npm run dev```
打开 http://localhost:5173/



### 连接远程仓库
bg：本地已经创建好了文件，想要把当前的目录连接同步到github线上仓库，本地和远程目前是两个独立的。

1、在当前本地项目中进行仓库初始化操作

```git init```

2、去github创建一个仓库，命名随意

3、复制创建好的github仓库链接，并执行以下代码，替换http...

```git remote add origin http...```

4、使用git remote -v查看当前远程仓库信息

5、设置用户信息，其中用户名随意，但是邮箱最好和github统一【为了统计commits】，建议不要设置为全局的，以防冲突。。。

```git config user.name "Your Name"```
```git config user.email "your_email@example.com"```

6、通过以下命令查看，--global可查看全局

```git config --get user.name```
```git config --get user.email```



其他技巧：

撤回上一条commit并保留修改：```git reset --soft HEAD~1```




### 进入正题
#### 项目文件结构确定
 api - axois请求
 assets - 静态资源
 components - 导航等组件
 pages - 页面
 router - 路由配置
 utils - 请求等工具包

#### step
基于antd的menu做导航开发，用到routes，navigate。

1、创建route中的路由

安装react-router-dom，使用懒加载

src/router/index.tsx

2、新增nav中的代码

使用antd中的Menu，配合路由配置items，记得在App.tsx中使用路由配置。

src/components/Nav.tsx

3、确定页面大致展示

Echarts - 展示四个图表 - 使用Card包裹 - 其中的某些图可用接口请求数据

Antv - 分类别展示 - G2、G6、S2

Three - 大致展示一下

### Vercel部署

1、参考教程

```https://juejin.cn/post/7143067114025254919```