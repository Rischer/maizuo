<template>
  <div class="iconfont" :class="[name]" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'icon-home'
      // validator: value => {
      //   let names = ['icon-home', 'icon-dianying', 'icon-geren']
      //   if (names.includes(value)) {
      //     return true
      //   }
      //   throw new Error(names.join(','))
      // }
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style.css';
</style>
