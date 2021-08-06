# Vue 3 + Typescript + Vite
## eslint + ts
#### 1.0 yarn add eslint eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-vue @vue/eslint-config-standard @vue/eslint-config-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
#### 2.0 新建.eslintrc.js
#### 3.0 vscode setting 设置保存修复 "source.fixAll.eslint": true
#### 4.0 配合eslint插件使用

## stylelint
#### 1.0 yarn add stylelint stylelint-config-standard -D
#### 2.0 新建 stylelint.config.js
#### 3.0 vscode setting 设置保存修复 "source.fixAll.stylelint": true
#### 4.0 配合stylelint插件使用

## html
#### 1.0 在.eslintrc.js中extends加入'plugin:vue/vue3-recommended'

## 设置别名@
#### 1.0 yarn add @types/node -D
#### 2.0 vite.confing.ts 引入path,设置resolve下的alias
#### 3.0 ts报错，tsconfig.json中加入 "baseUrl":".","paths": {  "@/*":["src/*"]}