// 对webpack进行增量配置
// 修改此处文件后一定要重启当前项目

const { defineConfig } = require('@vue/cli-service')

// 定义一个promise的延时器
const delay = (ms = 300) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

module.exports = defineConfig({
  transpileDependencies: true,
  // 对开发时服务器进行增量配置
  devServer: {
    // 中间件，利用此中间件，完成mock数据生成
    setupMiddlewares: (middlewares, { app }) => {
      // get请求
      app.get('/api/users', async (req, res) => {
        // await delay(5000)
        res.send({
          code: 0,
          msg: 'ok',
          data: [
            {
              id: 1,
              name: '张三',
              age: 20
            },
            {
              id: 2,
              name: '李四',
              age: 21
            },
            {
              id: 3,
              name: '王五',
              age: 23
            }
          ]
        })
      })

      // post请求
      app.post('/api/login', async (req, res) => {
        res.send({
          code: 0,
          msg: 'ok',
          data: {
            id: 1000,
            name: 'zhangsan',
            token: 'efewklefjlewfewfjew'
          }
        })
      })

      // 发送短信
      app.post('/api/loginsms', (req, res) => {
        // 请求第3方平台，让第3方平台调用服务商给的接口来进行发短信
        // 发送：手机号 验证码内容 [提交报备] 您的短信验证码为:[xxx],感谢您的使用！
        // 后台一般可以放在如下几个地方，内存，数据库[关系型，非关系型], 文件 ，session
        res.send({
          code: 0,
          msg: 'ok',
          data: Array.from({ length: 4 }).reduce((v) => v + ~~(Math.random() * 10), '')
        })
      })

      // 一定要返回middlewares对象
      return middlewares
    },
    // 代理，用于在开发阶段进行跨域解决方案
    // 模糊匹配 /api /api1 /api2
    proxy: {
      // 请求地址如果想要被代理，则一定不能有请求的域名
      '/api': {
        // https://xx/api/v2/getNowPlay
        target: 'https://api.iynn.cn/film',
        // 修改请求的host主机为目标地址
        changeOrigin: true
        // url重写
        // /aa/api/xxxx => 把请求url地址以/aa开头的字符串给替换为空
        // pathRewrite: { '^/aa': '' }
      },
      '/maizuo': {
        target: 'https://m.maizuo.com',
        changeOrigin: true,
        pathRewrite: { '^/maizuo': '' }
      }
    }
  }
})
