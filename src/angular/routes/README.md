# Route Components

Each route has 3 parts:

1. `*.module.js` - defines a new angular module with a single controller, and pulls in the controller via `import *Controller from "./*.controller";`
2. `*.controller.js` - Defines a function to be used as the route controller. The function should use `.$inject` to manually inject dependency names, export the function via `export default *Controller`, and attach all public methods and variables to the const `vm`, which is set equal to `this` at the top of the function.
3. `*.template.html` - This is the HTML the route uses. It is not referenced directly from the controller or module, rather it is pulled in from the route config file. Is is also not used by the wrapper controller, which simply uses `index.html` as its view.
