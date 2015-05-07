1. Bootstrap needs to be installed
2. Bundle the assets with webpack and have the javascript/application.js pick up the bundle.js. 
   Example:  webpack ./something.js bundle.js
   -the something.js simply imports the node_modules that will be needed.
4. Inside the application.js remove 'require_tree .''
5. Run webpack and should work just fine.