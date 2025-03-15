export default {
  mounted() {
    // 修改标题
    // document.title = `【${res.name}】 - ` + document.title
    // console.log(this.$route.query.name)
    // console.log(this.name)
    // console.log(process.env)
    // VUE_APP_TITLE
    // document.title = `【${this.name}】 - 电影购票网站`
    // document.title = `【${this.name}】 - ${process.env['VUE_APP_TITLE']}`
  },
  updated() {
    // console.log(this.film)
    document.title = `【${this.film.name}】 - ${process.env['VUE_APP_TITLE']}`
  }
}
