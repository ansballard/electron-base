# Main Angular Module

The main angular module (`electron-base.module.js`) is where all relevant angular files are pulled in. Library dependencies are imported at the top, followed by the ModuleConfig function, then any route, service, controller, filter, etc modules. Then the main module can be defined, where it will pull in all the modules that have been imported above, and the ModuleConfig function can be passed to `angular.module( ... ).config`. 
