# Todo List :memo:
以 Node.js、Express 及 MySQL 打造的全端小工具，利用 Bootstrap 搭配 Bootswatch 快速完成畫面呈現

## 實作重點
- 使用 Express 建構 MVC 模式的應用程式
- 使用 express.Router 建立模組路由
- 透過 Handlebars 樣板引擎產生 HTML 檔案
- 透過 Sequelize ORM 操作 MySQL 資料庫完成 CRUD 功能
- 使用 Passport.js 套件實行本地、臉書驗證功能
- 使用 bcrypt.js 套件將使用者密碼加密
- 建立 .env 管理敏感資訊

### 測試帳號
- 帳號：root@example.com
- 密碼：12345678


![alt 首頁](https://i.imgur.com/aRXaFjw.gif)

## Prerequisites
* Node.js
* npm
* MySQL database

## Installation

### Environment
* [Node.js v10.15.0](https://nodejs.org/en/download/)
* [Express v4.17.1](https://www.npmjs.com/package/express)
* [body-parser v1.19.0](https://www.npmjs.com/package/body-parser)
* [Express-Handlebars v5.2.0](https://www.npmjs.com/package/express-handlebars)
* [connect-flash v0.1.1 ](https://www.npmjs.com/package/connect-flash)
* [bcryptjs v2.4.3](https://www.npmjs.com/package/bcryptjs)
* [dotenv v8.2.0](https://www.npmjs.com/package/dotenv)
* [express-session v1.17.1](https://www.npmjs.com/package/express-session)
* [method-override v3.0.0](https://www.npmjs.com/package/method-override)
* [mysql2 v2.2.5](https://www.npmjs.com/package/mysql2)
* [passport v0.4.1](https://www.npmjs.com/package/passport)
* [passport-facebook v3.0.0](https://www.npmjs.com/package/passport-facebook)
* [passport-local v1.0.0](https://www.npmjs.com/package/passport-local)
* [sequelize v6.6.2](https://www.npmjs.com/package/sequelize)
* [sequelize-cli v6.2.0](https://www.npmjs.com/package/sequelize-cli)

### Clone
clone repository to your local computer
```
$ git clone https://github.com/tsengm6h6/todo-sequelize.git
```

### Setup
1. Enter the directory
```
$ cd todo-sequelize
```

2. Install npm packages
```
$ npm install
```

3. Setup database
```
$ npx sequelize db:migrate
```

4. Run Seeder
```
$ npx sequelize db:seed:all
```

5. Activate the server
```
$ npm run dev
```

6. Find the below message for successful activation
```
App is running on http://localhost:3000
```
You can visit the application on your browser with URL: http://localhost:3000
