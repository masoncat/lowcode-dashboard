const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
            use: {
                loader: 'babel-loader',
                options: {
                    // 预设执行顺序由右往左,所以先处理ts,再处理jsx
                    presets: [
                        '@babel/preset-react',
                        '@babel/preset-typescript'
                    ]
                }
            }
        }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        static: './dist',
        client: {
            progress: true,
        },
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html'), // 模板取定义root节点的模板
        inject: true, // 自动注入静态资源
    })],
};