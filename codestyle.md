source：Vue2风格指南

# 目录结构介绍

一份比较规范的 Vue2 项目目录应如下所示

```sh
sh

 代码解读
复制代码// 项目 vue-element-plus-admin
|- .github                                                github workflows 相关
|- .husky                                                 husky 配置
|- .vscode                                                vscode 配置
|- build
|- mock                                                   模拟数据接口
|- public                                                 静态资源
    |- favicon.ico
    |- index.html
|- src                                                    项目代码
    |- api                                                所有 api 接口
        |- index.js
        |- role
            |- index.js
        |- user
            |- index.js
        |- remote-search.js
    |- assets                                             静态资源（images、icons、styles等）
        |- images
        |- svgs
        |- styles
    |- components                                         公用组件
        |- BaseTable
            |- mixins
                resize.js
            |- utils
                default-options.js
                language.js
            index.vue
            SearchSidebar.vue  
            SearchSidebarNavigation.vue
            plugins.js
        |- BaseUpload
            |- components
                   EditImage.vue
            index.vue
    |- constant                                           存放常量
    |- config                                             配置信息
    |- directive                                          全局指令
    |- filters                                            全局过滤器
        index.js
    |- hooks                                              常用 hooks
    |- icons
    |- lang(或locales)                                    语言文件
    |- layout                                             布局组件
    |- libs                                               外部引用的插件存放及修改文件
    |- plugins                                            外部插件
    |- router                                             路由
        |- modules
            education.js
        index.js
    |- store                                              vuex 状态管理
        |- modules
            setting.js
        getters.js
        index.js
    |- styles                                             全局样式
    |- utils                                              全局工具类
    |- vendor                                             公用 vendor
    |- views                                              路由页面
        |- 
    App.vue                                               入口页面
    main.js                                               主入口文件 加载组件 初始化等
    permission.js                                         权限管理
    setting.js
|- tests                                                  测试
.env.dev                                                  开发环境打包 环境变量配置
.env.pro                                                  生产环境打包 环境变量配置
.env.test                                                 测试环境打包 环境变量配置
.eslintignore                                             eslint 跳过检测配置
.eslintrc.js                                              eslint 配置
.gitingore                                                git 忽略文件配置
babel.config.js
LICENSE
package.json
README.md
vue.config.js                                             vue-cli 配置
```

# 命名规范

## 组件名为多个单词

> 组件名应该始终是多个单词的，根组件 `App` 以及 `<transition>`、`<component>` 之类的 Vue 内置组件除外。

这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。

- 不推荐

  ```js
  js
  
   代码解读
  复制代码Vue.component('todo', {  
    // ...  
  })
  
  export default {  
    name: 'Todo',  
    // ...  
  }
  ```

- 推荐

  ```js
  js
  
   代码解读
  复制代码Vue.component('todo-item', {  
    // ...  
  })
  
  export default {  
    name: 'TodoItem',  
    // ...  
  }
  ```

## 单文件组件文件名的大小写强烈推荐

> 单文件组件的文件名应该要么始终是 **单词大写开头 (`PascalCase`)**，要么始终是 **横线连接 (`kebab-case`)**。

单词大写开头对于代码编辑器的自动补全最为友好，因为这使得我们在 JS(X) 和模板中引用组件的方式尽可能的一致。然而，混用文件命名方式有的时候会导致大小写不敏感的文件系统的问题，这也是横线连接命名同样完全可取的原因。

- 不推荐

  ```js
  js
  
   代码解读
  复制代码components/
  |- mycomponent.vue
  |- yourComponent.vue
  ```

- 推荐

  ```js
  js
  
   代码解读
  复制代码components/
  |- MyComponent.vue
  |- your-component.vue
  ```

## 基础组件名

> 应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 `Base`、`App` 或 `V`。

- 不推荐

  ```js
  js
  
   代码解读
  复制代码components/  
  |- MyButton.vue  
  |- VueTable.vue  
  |- Icon.vue
  ```

- 推荐

  ```js
  js
  
   代码解读
  复制代码components/  
  |- BaseButton.vue  
  |- BaseTable.vue  
  |- BaseIcon.vue
  
  |- AppButton.vue  
  |- AppTable.vue  
  |- AppIcon.vue
  
  |- VButton.vue  
  |- VTable.vue  
  |- VIcon.vue
  ```

## 紧密耦合的组件名

> 和父组件紧密耦合的子组件应该以 **父组件名作为前缀** 命名。

如果一个组件只在某个父组件的场景下有意义，这层关系应该体现在其名字上。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

- 不推荐

  ```js
  js
  
   代码解读
  复制代码components/  
  |- TodoList.vue  
  |- TodoItem.vue  
  |- TodoButton.vue
  
  |- SearchSidebar.vue  
  |- NavigationForSearchSidebar.vue
  ```

- 推荐

  ```js
  js
  
   代码解读
  复制代码components/  
  |- TodoList.vue  
  |- TodoListItem.vue  
  |- TodoListItemButton.vue
  
  |- SearchSidebar.vue  
  |- SearchSidebarNavigation.vue
  ```

## 组件名中的单词顺序

> 组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。

- 不推荐

  ```js
  js
  
   代码解读
  复制代码components/  
  |- ClearSearchButton.vue  
  |- ExcludeFromSearchInput.vue  
  |- LaunchOnStartupCheckbox.vue  
  |- RunSearchButton.vue  
  |- SearchInput.vue  
  |- TermsCheckbox.vue
  ```

- 推荐

  ```js
  js
  
   代码解读
  复制代码components/  
  |- SearchButtonClear.vue  
  |- SearchButtonRun.vue  
  |- SearchInputQuery.vue  
  |- SearchInputExcludeGlob.vue  
  |- SettingsCheckboxTerms.vue  
  |- SettingsCheckboxLaunchOnStartup.vue
  ```

## 自闭合组件

> 在单文件组件、字符串模板和 JSX 中没有内容的组件应该是自闭合的，但在 DOM 模板里永远不要这样做。

自闭合组件表示它们不仅没有内容，而且**刻意**没有内容。其不同之处就好像书上的一页白纸对比贴有“本页有意留白”标签的白纸。而且没有了额外的闭合标签，你的代码也更简洁。

不幸的是，HTML 并不支持自闭合的自定义元素——只有官方的“空”元素。所以上述策略仅适用于进入 DOM 之前 Vue 的模板编译器能够触达的地方，然后再产出符合 DOM 规范的 HTML。

- 不推荐

  ```html
  html
  
   代码解读
  复制代码<!-- 在单文件组件、字符串模板和 JSX 中 -->  
  <MyComponent></MyComponent>
  
  <!-- 在 DOM 模板中 -->  
  <my-component/>
  ```

- 推荐

  ```html
  html
  
   代码解读
  复制代码<!-- 在单文件组件、字符串模板和 JSX 中 -->  
  <MyComponent/>
  
  <!-- 在 DOM 模板中 -->  
  <my-component></my-component>
  ```

## 模板中的组件名大小写

> 对于绝大多数项目来说，在单文件组件和字符串模板中组件名应该总是 `PascalCase` 的——但是在 DOM 模板中总是 `kebab-case` 的。

PascalCase 相比 kebab-case 有一些优势：

- 编辑器可以在模板里自动补全组件名，因为 PascalCase 同样适用于 JavaScript。
- `<MyComponent>` 视觉上比 `<my-component>` 更能够和单个单词的 HTML 元素区别开来，因为前者的不同之处有两个大写字母，后者只有一个横线。
- 如果你在模板中使用任何非 Vue 的自定义元素，比如一个 Web Component，PascalCase 确保了你的 Vue 组件在视觉上仍然是易识别的。

不幸的是，由于 HTML 是**大小写不敏感**的，在 DOM 模板中必须仍使用 kebab-case。

还请注意，如果你已经是 kebab-case 的重度用户，那么与 HTML 保持一致的命名约定且在多个项目中保持相同的大小写规则就可能比上述优势更为重要了。在这些情况下，**在所有的地方都使用 kebab-case 同样是可以接受的。**

- 不推荐

  ```html
  html
  
   代码解读
  复制代码<!-- 在单文件组件和字符串模板中 -->
  <mycomponent/> 
  
  <!-- 在单文件组件和字符串模板中 -->
  <myComponent/> 
  
  <!-- 在 DOM 模板中 -->
  <MyComponent></MyComponent>
  ```

- 推荐

  ```html
  html
  
   代码解读
  复制代码<!-- 在单文件组件和字符串模板中 -->
  <MyComponent/> 
  
  <!-- 在 DOM 模板中 -->
  <my-component></my-component>
  
  <!-- 在所有地方 -->
  <my-component></my-component>
  ```

## JS/JSX 中的组件名大小写

> JS/[JSX](https://link.juejin.cn?target=https%3A%2F%2Fv2.cn.vuejs.org%2Fv2%2Fguide%2Frender-function.html%23JSX) 中的组件名应该始终是 `PascalCase` 的，尽管在较为简单的应用中只使用 `Vue.component` 进行全局组件注册时，可以使用 `kebab-case` 字符串

- 不推荐

  ```js
  js
  
   代码解读
  复制代码Vue.component('myComponent', {
      // ...
  })
  
  import myComponent from './MyComponent.vue'
  
  export default {  
      name: 'myComponent',  
      // ...  
  }
  export default {  
      name: 'my-component',  
      // ...  
  }
  ```

- 推荐

  ```js
  js
  
   代码解读
  复制代码Vue.component('MyComponent', {
      // ...
  })
  
  Vue.component('my-component', {
  // ...
  })
  
  import MyComponent from './MyComponent.vue'
  
  export default {  
      name: 'MyComponent',  
      // ...  
  }
  ```

## 完整单词的组件名

> 组件名应该倾向于 **完整单词** 而不是缩写。

编辑器中的自动补全已经让书写长命名的代价非常之低了，而其带来的明确性却是非常宝贵的。不常用的缩写尤其应该避免。

- 不推荐

  ```js
  js
  
   代码解读
  复制代码components/
  |- SdSetting.vue
  |- UProOpts.vue
  ```

- 推荐

  ```js
  js
  
   代码解读
  复制代码components/
  |- StudentDashboardSetting.vue
  |- UserProfileOptions.vue
  ```

## Prop 名大小写

> 在声明 prop 的时候，其命名应该始终使用 `camelCase`，而在模板和 [JSX](https://link.juejin.cn?target=https%3A%2F%2Fv2.cn.vuejs.org%2Fv2%2Fguide%2Frender-function.html%23JSX) 中应该始终使用 `kebab-case`。

我们单纯的遵循每个语言的约定。在 JavaScript 中更自然的是 camelCase。而在 HTML 中则是 kebab-case。

- 不推荐

```js
js

 代码解读
复制代码props: {
    'greeting-text': String
}

<WelcomeMessage greetingText="hi" />
```

- 推荐

```js
js

 代码解读
复制代码props: {
    'greetingText': String
}

<WelcomeMessage greeting-text="hi" />
```

## 多个 attribute 的元素

> 多个 attribute 的元素应该分多行撰写，每个 attribute 一行。

在 JavaScript 中，用多行分隔对象的多个 property 是很常见的最佳实践，因为这样更易读。模板和 [JSX](https://link.juejin.cn?target=https%3A%2F%2Fv2.cn.vuejs.org%2Fv2%2Fguide%2Frender-function.html%23JSX) 值得我们做相同的考虑。

- 不推荐

  ```html
  html
  
   代码解读
  复制代码<img src="https://vuejs.org/images/logo.png" alt="Vue Logo">
  
  <MyComponent foo="a" bar="b" baz="c"/>
  ```

- 推荐

  ```js
  js
  
   代码解读
  复制代码<img
    src="https://vuejs.org/images/logo.png"
    alt="Vue Logo"
  >
  
  <MyComponent  
    foo="a"  
    bar="b"  
    baz="c"  
  />
  ```

## 带引号的 attribute 值

> 非空 HTML attribute 值应该始终带引号 (单引号或双引号，以 JS 中未使用的为准)。

在 HTML 中不带空格的 attribute 值是可以没有引号的，但这鼓励了大家在特征值里*不写*空格，导致可读性变差。

- 不推荐

  ```html
  html
  
   代码解读
  复制代码<input type=text>
  
  <AppSidebar :style={width:sidebarWidth+'px'}>
  ```

- 推荐

  ```js
  js
  
   代码解读
  复制代码<input type="text">
  
  <AppSidebar :style="{ width: sidebarWidth + 'px' }">
  ```