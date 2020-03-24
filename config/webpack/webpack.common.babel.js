import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import path from 'path';

import paths from './paths';
import rules from './rules';

const ROOT = paths.outputPath;

function root (args) {
    args = Array.prototype.slice.call (arguments, 0);
    return path.join.apply (path, [ROOT].concat (args));
}

module.exports = {
    entry: paths.entryPath,
    module: {
        rules
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.scss', '.css']
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.templatePath,
            favicon: 'src/assets/img/favicon.ico',
            minify: {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                preserveLineBreaks: true,
                minifyURLs: true,
                removeComments: true,
                removeAttributeQuotes: true
            }
        })
    ]
};
