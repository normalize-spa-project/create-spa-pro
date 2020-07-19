const inquirer = require("inquirer");

exports.PROJECT_LIST = [{
  name: "dva-app-project",
  value: {
    type: "project",
    devDependencies: {
      "spa-build-core": "github:nice-web-work/spa-build-core"
    },
    remote: "https://github.com/nice-web-work/dva-spa-project"
  }
}, {
  name: "easy-koa-project",
  value: {
    type: "project",
    remote: "https://github.com/nice-web-work/easy-koa-project"
  }
}];

exports.LIBRARY_LIST = [{
  name: "es6-babel-library",
  value: {
    type: "library",
    devDependencies: {
      "library-core": "github:nice-web-work/library-core",
      "spa-build-core": "github:nice-web-work/spa-build-core"
    },
    remote: "https://github.com/nice-web-work/es6-babel-library"
  }
}];