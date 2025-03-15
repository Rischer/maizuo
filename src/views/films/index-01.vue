<template>
  <div class="films-box">
    
  </div>
</template>

<script>
import { getNowPlayingFilmList } from '@/api/filmApi'
export default {
  data() {
    return {}
  },
  async mounted() {
    let ret = await getNowPlayingFilmList()
    console.log(ret)
  }
}
</script>

<style lang="scss" scoped>
.films-box {
  height: 100%;
}
</style>
