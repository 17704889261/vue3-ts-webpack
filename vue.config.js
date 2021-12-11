/* eslint-disable @typescript-eslint/no-var-requires */
// vue.config.js

const path = require('path')

// 打包分析
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// 开启gzip压缩， 按需引用
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i // 开启gzip压缩， 按需写入

// 获取当前环境变量
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  // 公共路径
  publicPath: process.env.NODE_ENV === 'production' ? '/vue3-ts-template/' : '/',
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  lintOnSave: true,
  // 生产环境的 source map
  productionSourceMap: !IS_PROD,
  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,
  // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  parallel: true,
  // 向 PWA 插件传递选项。
  pwa: {},
  chainWebpack: config => {
    // 移除 prefetch 插件(针对生产环境首屏请求数进行优化)
    config.plugins.delete('prefetch')
    // 移除 preload 插件(针对生产环境首屏请求数进行优化) preload
    // 插件的用途：https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
    config.plugins.delete('preload')
    // 修复热更新失效
    config.resolve.symlinks(true)
    // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
    config.plugin('html').tap(args => {
      // 修复 Lazy loading routes Error
      args[0].chunksSortMode = 'none'
      return args
    })
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@store', resolve('src/store'))

    // 打包分析, 打包之后自动生成一个名叫report.html文件(可忽视)
    if (IS_PROD) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static'
        }
      ])
    }
  },
  configureWebpack: config => {
    const plugins = []

    if (IS_PROD) {
      // 消除了一些warning，但是没有减小包提及
      config.performance = {
        // 生产环境构建代码文件超出以下配置大小会在命令行中显示警告
        hints: 'warning',
        // 入口起点的最大体积 整数类型（以字节为单位,默认值是：250000 (bytes)）
        maxEntrypointSize: 5000000,
        // 生成文件的最大体积 整数类型（以字节为单位,默认值是：250000 (bytes)）
        maxAssetSize: 3000000
      }

      config.optimization = {
        // 按模块分包配置
        splitChunks: {
          chunks: 'all',
          name: true,
          // 针对第三方插件进行分包编译配置
          cacheGroups: {
            vue: {
              name: `chunk-vue`,
              test: /[\\/]node_modules[\\/]@vue[\\/]/,
              priority: -1
            },
            elementplus: {
              name: `chunk-elementplus`,
              test: /[\\/]node_modules[\\/]element-plus[\\/]/,
              priority: -1
            },
            vendors: {
              name: `chunk-vendors`,
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              chunks: 'initial'
            },
            common: {
              name: `chunk-common`,
              minChunks: 2,
              priority: -20,
              chunks: 'initial',
              reuseExistingChunk: true
            }
          }
        }
      }

      // 开启 gzip 压缩
      // 需要 yarn add -D compression-webpack-plugin
      plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          // 匹配文件
          test: productionGzipExtensions,
          // 超过10kB的数据进行压缩
          threshold: 10240,
          minRatio: 0.8,
          // 是否删除原文件 （原文件也建议发布到服务器以支持不兼容gzip的浏览器）
          deleteOriginalAssets: false
        })
      )
    }
    config.plugins = [...config.plugins, ...plugins]
  },
  css: {
    extract: IS_PROD,
    // 给 sass-loader 传递相关选项
    loaderOptions: {
      sass: {}
    }
  },
  devServer: {
    // 让浏览器 overlay 同时显示警告和错误
    overlay: {
      warnings: true,
      errors: true
    },
    // 端口号
    port: 8080,
    // 配置自动启动浏览器
    open: true,
    // 热更新
    hotOnly: true
    // proxy: 'http://localhost:8080' // 配置跨域处理,只有一个代理
    // 配置多个跨域
    // proxy: {
    // '/api': {
    //   target: 'http://172.11.11.11:7071',
    //   changeOrigin: true,
    //   // ws: true,//websocket支持
    //   secure: false,
    //   pathRewrite: {
    //     '^/api': '/'
    //   }
    // },
    // '/api2': {
    //   target: 'http://172.12.12.12:2018',
    //   changeOrigin: true,
    //   // ws: true,//websocket支持
    //   secure: false,
    //   pathRewrite: {
    //     '^/api2': '/'
    //   }
    // }
    // }
  }
}
