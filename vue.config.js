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
module.exports = {
    baseUrl: process.env.NODE_ENV === "production",
    publicPath: "./",
};
