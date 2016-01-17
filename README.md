# Electron Base

## Table of Contents

1. [About](#about)
1. [Directory Structure](#directory-structure)
1. [Build System](#build-system)
1. [Items to Add](#items-to-add)
1. [Contact](#contact)

## About

This is a starter repo for creating Electron apps using [Browserify](http://browserify.org/) and [Angular 1.x](https://angularjs.org/), based on the [John Papa Styleguide](https://github.com/johnpapa/angular-styleguide). Some differences are to use ES6 modules with [babel](https://babeljs.io/), Browserify instead of Gulp or Grunt, ESLint instead of JSHint, and a few other smaller changes.

The purpose of this repo is to have a jumping off point for generally any Electron app with npm scripts to handle javascript bundling, transpiling, and app packaging to an executable. As long as you continue to use Browserify and ES6 modules, there shouldn't be any changes necessary to the npm scripts, as they are purposefully generic. The most basic scripts are provided to run the Electron backend, and example modules are given to show how routes, services, and other module types should be written.

## Directory Structure

The overall directory structure is fairly simple. At the root is `package.json`, which handles all things npm. The `views/` directory will hold any html pages Electron should access, and starts off with a simple `index.html`. `src` holds all pretranspiled javascript, css, and unit tests.

Within `src`, `.babelrc` configures babel to use an es2015 preset. `.eslintrc` has a few different syntax rules that are checked when the app is packaged. `frontend.entry.js` is where Browserify will grab all css files, as well as the main Angular module from the `angular/` directory. There is no `electron.entry.js` because babel will be grabbing all the electron files from `electron/` without bundling them.

`electron/` will contain all the code needed for the backend to run. For now it contains only a barebones `main.js`, mostly copied from the example Electron app.

`angular/` will hold all angular modules, and separate them by function, such as configuration files, routes, services, filters, etc. `electron-base.module.js` is the main module, which includes all other modules via dependency injection. It is also where angular and angularl-route are pulled in by Browserify. All subfolders except for `config/` will contain a list of modules that will contain a `.module.js`, a `template.html` if applicable, and either a `.controller.js`, `.service.js`, or `filter.js` file, based on the type of module it represents.

`routes/` will hold a "component" for each route used by the router, as well as a wrapper controller and module. More can be found on how these components look in `/src/angular/routes/README.md`.

`config/` is where configuration files for the Angular app will be. It starts out simply configuring routes for angular route, and redirects all routes to `#/`. This is where things like token authentication, httpProvider manipulation, and new routes will be added if necessary.

## Build System

The build system is all based on Browserify, Babel, and Electron. The frontend javascript and css is pulled in by Browserify and bundled into two files. Babel is used to transpile within Browserify, as well as transpile Electron code directly. Electron-prebuilt and electron-packager are used to run the app locally and package it into an executable, respectively.

The most common workflow is to pick an environment, and run the appropriate `dev` script. So to run and compile the electron app, you would execute `npm run dev:electron`. This would build the app, start it, and recompile on changes to either electron or frontend files.

1. `npm start:electron` - Run the electron app locally
1. `npm start:express` - Run the express server locally at http://localhost:3000
1. `npm run dev:electron` - Run and recompile the electron app on frontend changes
1. `npm run dev:express` - Run and recompile the express server on frontend changes
1. `npm run build` - Transpile and bundle code (not minified)
  - `:electron:only` - Only on electron files
  - `:express:only` - Only on express files
  - `:electron` - Electron and frontend files
  - `:express` - Express and frontend files
  - `:frontend` - Only frontend files
1. `npm run watch` - Build all files and rebuild on changes
  - `:electron:only` - Only on electron files
  - `:express:only` - Only on express files
  - `:electron` - Electron and frontend files
  - `:express` - Express and frontend files
  - `:frontend` - Only on frontend files
1. `npm run deploy` - Build all files (minified)
  - `:electron:only` - Only on electron files
  - `:express:only` - Only on express files
  - `:electron` - Electron and frontend files
  - `:express` - Express and frontend files
  - `:frontend` - Only on frontend files
1. `npm run package` - Deploy files and package the app into an executable

## Items to Add

1. Unit tests with karma and jasmine
1. React/Ember examples/forks/branches
1. Webpack version
1. CSS/Sass example use

## Contributors

- Aaron Ballard (ans.ballard@gmail.com)
