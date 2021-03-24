# Client

Summary....

## Demo

Images and link to demo

## Install

    $ git clone https://github.com/ORG/PROJECT.git
    $ cd PROJECT
    $ npm install

## Configure app

???

## Start & watch

    $ npm start:dev

## Simple build for production

    $ npm run build


## Project Structure


```bash
 ├── .babelrc
 ├── babel.config.js
 ├── jest.config.js
 └── dist
 │   └── index.html
 │   ├──
 │   ├──
 │   └──
 ├── server
 │   └── index.js
 └── webpack.config.js
    └── src
        ├── assets
        │   └── images
        ├── components
        │   ├──
        │   ├──
        │   ├──
        │   ├──
        │   ├──
        │   ├──
        ├── template
        │   └── index.ejs
        ├── utils
        │   └── api.js
        └── App.jsx
```

Top level `index.js` is your Express Server. This should be responsible for setting up your API, starting your server, and connecting to your database.

Inside `/db` you have `index.js` which is responsible for creating all of your database connection functions, and `init_db.js` which should be run when you need to rebuild your tables and seed data.

Inside `/routes` you have `index.js` which is responsible for building the `apiRouter`, which is attached in the express server. This will build all routes that your React application will use to send/receive data via JSON.

Lastly `/public` and `/src` are the two puzzle pieces for your React front-end. `/public` contains any static files necessary for your front-end. This can include images, a favicon, and most importantly the `index.html` that is the root of your React application.


## Languages & tools

### HTML

### CSS

- list any frameworks...

### React

- [React](http://reactjds.org) is used for UI.
- [React Router](https://reactrouter.com) is used for routing.
- list any other component libraries

### Jest
-
-
