import Vue from 'vue'

Vue.mixin({
  computed: {
    cname() {
      return this.$store.state.city.city.name
    }
  }
})
