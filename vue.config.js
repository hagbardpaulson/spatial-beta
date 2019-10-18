// const path = require("path");

// // module.exports = {
// //   outputDir: path.resolve(__dirname, "../backend/templates/SPA"),
// //   assetsDir: "../../static/SPA"
// // }

// module.exports = {
//     devServer: {
//       contentBase: path.join(__dirname, 'test_doc')
//     }
//   }
const webpack = require("webpack");
const fs = require("fs");

const packageJson = fs.readFileSync("./package.json");
const version = JSON.parse(packageJson).version || 0;

module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                "process.env": {
                    PACKAGE_VERSION: `"${version}"`,
                },
            }),

        ],
    },
    baseUrl: process.env.NODE_ENV === "production",
    publicPath: "./",
};
