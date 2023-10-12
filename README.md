# Next.js CRUD and API

This project is an example using Next.js with a CRUD (except Update) with an API too. MySQL is used as Database through the ORM Sequelize.

This example is about bicyles. Here are some screenshots:

![Create Project](/screenshots/screenshot-01.png)

![Create Project](/screenshots/screenshot-02.png)

![Create Project](/screenshots/screenshot-03.png)

![Create Project](/screenshots/screenshot-04.png)

## Prerequisites

You need a working environment with:
* [Git](https://git-scm.com) - You can install it from https://git-scm.com/downloads.
* [Node.js](https://nodejs.org) - Install node.js from https://nodejs.org/es/download/. It's advisable to install the last LTS version.

## General Installation instructions

The best option to start with this project is cloning it in your PC:

```
git clone https://github.com/tcrurav/NextJSCrudAndApi.git
```

Now you should update your .env file with your own database and IP data. An example is showed:

```
JWT_SECRET = ANY_SECRET

DB_NAME = "db_bicycles_nextjs"
DB_HOST = "localhost"
DB_USER = "root"
DB_PASS = "sasa"

NEXT_PUBLIC_API_URL = "http://192.168.0.104:3000/api/bicycles"
```

Don't forget to create the database with the name entered in your .env file. In former example the database would be "db_bicycles_nextjs".

Now it's time to install all dependencies.

```
cd NextJSCrudAndApi
npm install
```

Now you can start the project in your dev environment:

```
npm run dev
```

If you follow the former instructions this project will be running on the following url: http://localhost:3000

Enjoy!!!

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The Editor used in this project
* [React](https://reactjs.org/) - React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
* [Next.js](https://nextjs.org/) - The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.
* [Node.js](https://nodejs.org/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.
* [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js.
* [Sequelize](https://sequelize.org/) - Sequelize is a modern TypeScript and Node.js ORM for Oracle, Postgres, MySQL, MariaDB, SQLite and SQL Server, and more.
* [MySQL](https://www.mysql.com/) - The world's most popular open source database.
* [MySQL Workbench](https://www.mysql.com/products/workbench/) -MySQL Workbench is a unified visual tool for database architects, developers, and DBAs.

## Acknowledgements

* https://nextjs.org/learn/basics/create-nextjs-app. The official Next.js tutorial is a very good start.
* https://blog.devgenius.io/building-dynamic-web-applications-exploring-next-js-eed2e3bd7b4f. This tutorial has helped me a lot, especially the part two and three of this series of 3 blog entries.
* https://jasonwatmore.com/next-js-13-mysql-user-registration-and-login-tutorial-with-example-app. Great and very complete tutorial about creating a full project with Next.js.
* https://getcssscan.com/css-box-shadow-examples. Great examples for box-shadow.
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/. Great guide for flexbox.
* https://gist.github.com/PurpleBooth/109311bb0361f32d87a2. A very complete template for README.md files.
* https://www.theserverside.com/video/Follow-these-git-commit-message-guidelines. Guidelines to write properly git commit messages.