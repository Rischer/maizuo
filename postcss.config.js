// 修改此文件要重启项目
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 因为vant组件库它的设置稿就是375px，所以这里写37.5
      rootValue: 37.5,
      // 所有的class中的属性为px的都转换为rem
      // 但是如果Px/PX,则不转换
      // style样式中的px不进行转换
      propList: ['*'],
      // 保留rem小数点多少位
      unitPrecision: 6,
      // px小于12的不会被转换
      minPixelValue: 12
    }
  }
}
