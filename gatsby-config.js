module.exports = {
    plugins: [{
        resolve: 'gatsby-plugin-typography',
        options: {
            pathToConfigModule: 'src/utils/typography.js'
        }
    }]
}

// exports.onCreateWebpackConfig = ({actions, stage}) => {
//     if (stage === "build-html") {
//         actions.setWebpackConfig({
//             module: {
//                 rules: [
//                     {
//                         test: /firebase/,
//                         use: ['null-loader']
//                     },
//                 ],
//             }
//         })
//     }
// };