# Isomorphic workspaces demo

Build
```sh
> yarn
```

Run server side code
```sh
> yarn workspace server start  
Hello from server
```

Bundle client side code
```sh
> yarn workspace client build

  dist/main.js  214b

> cat packages/client/dist/main.js 
(() => {
  // ../client_server_shared/logger/logger_browser.js
  var logger = (s) => {
    const clientPrefix = "client ";
    console.log(clientPrefix + s);
  };

  // main.js
  logger("Hello from client");
})();
```

