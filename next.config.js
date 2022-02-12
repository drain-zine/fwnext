const menu = require("./libraries/menu.js");

module.exports = (phase, { defaultConfig }) => {
    return {
      reactStrictMode: true,
        env: {
            // ...
            menu: menu.get('pages'),
            // ...
        },
        // ...
    };
};
