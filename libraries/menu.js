const fs = require("fs");
const path = require("path");

module.exports = {
    get: (pagePath) => {
        if (pagePath.slice(-1) != "/") pagePath += "/";
        let files = fs.readdirSync(`src/${pagePath}`);
        files = files.filter((file) => {
            if (file == "_app.js") return false;
            if(file == "staging.js") return false;
            const stat = fs.lstatSync(`src/${pagePath}` + file);
            return stat.isFile();
        });

        return files.map((file) => {
            if (file == "index.js") {
                return {
                    name: "Home",
                    link: "/"
                };
            } else {
                link = path.parse(file).name;
                return {
                    link: `/${link}`,
                    name: link
                };
            }
        });
    },
};