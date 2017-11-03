# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.9.

这是angular 5发布后的一次教学课程，手把手教你入门angular 5，所有代码均运行编译成功，未报错

### usage

请确保你的node 及 npm 版本，本教程的使用 node v6.9.2 

`Now using node v6.9.2 (npm v3.10.9)`

`nvm ls`

`nvm use v6.9.2`

`npm install -g @angular/cli`

`ng new my-app`

`npm install` 

use    `cd my-app` and `ng serve --open` 
 
 other : 
 
 `ng serve` 
  
  `npm start`这个命令会在“监听”模式下运行TypeScript编译器，当代码变化时，它会自动重新编译。 同时，该命令还会在浏览器中启动该应用，并且当代码变化时刷新浏览器。

### tips

让你的命令行npm版本保持默认版本：

`nvm alias default 0.10.32`

`polyfills.ts` 不同的浏览器对Web标准的支持程度也不同。 填充库（polyfill）能帮我们把这些不同点进行标准化。 你只要使用core-js 和 zone.js通常就够了，不过你也可以查看浏览器支持指南以了解更多信息。

`tsconfig.{app|spec}.json` TypeScript编译器的配置文件。tsconfig.app.json是为Angular应用准备的，而tsconfig.spec.json是为单元测试准备的。

`main.ts` 这是应用的主要入口点。 使用JIT compiler编译器编译本应用，并启动应用的根模块AppModule，使其运行在浏览器中。 你还可以使用AOT compiler编译器，而不用修改任何代码 —— 只要给ng build 或 ng serve 传入 --aot 参数就可以了。

`index.html` 这是别人访问你的网站是看到的主页面的HTML文件。 大多数情况下你都不用编辑它。 在构建应用时，CLI会自动把所有js和css文件添加进去，所以你不必在这里手动添加任何 <script> 或 <link> 标签。

`environments/*` 这个文件夹中包括为各个目标环境准备的文件，它们导出了一些应用中要用到的配置变量。 这些文件会在构建应用时被替换。 比如你可能在产品环境中使用不同的API端点地址，或使用不同的统计Token参数。 甚至使用一些模拟服务。 所有这些，CLI都替你考虑到了。

`app/app.module.ts` 定义AppModule，这个根模块会告诉Angular如何组装该应用。 目前，它只声明了AppComponent。 稍后它还会声明更多组件。

`app/app.component.{ts,html,css,spec.ts}` 使用HTML模板、CSS样式和单元测试定义AppComponent组件。 它是根组件，随着应用的成长它会成为一棵组件树的根节点。

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
