(() => {
  // ../client_server_shared/logger/logger_browser.js
  var logger = (s) => {
    const clientPrefix = "client ";
    console.log(clientPrefix + s);
  };

  // main.js
  logger("Hello from client");
})();
