// 修改此文件，一定要重启项目
module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    // vant组件库样式按需引入
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ]
}
