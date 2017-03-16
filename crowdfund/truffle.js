module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "javascripts/app.js"
    ],
    "app.css": [
      "stylesheets/app.css"
    ],
    "images/": "images/"
  },
  networks: {
    "live": {
      network_id: 1, // Ethereum public network
      // optional config values
      // host - defaults to "localhost"
      // port - defaults to 8545
      gas: 2000000,
      // gasPrice
      // from - default address to use for any transaction Truffle makes during migrations
    },
    "morden": {
      network_id: 2,        // Official Ethereum test network
    },
    "staging": {
      network_id: 1337 // custom private network
      // use default rpc settings
    },
    "development": {
      network_id: "default"
    }
  },
  rpc: {
    gas: 4000000,
    host: "localhost",
    port: 8545
  }
};
