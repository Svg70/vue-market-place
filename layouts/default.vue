<template>
  <div>
    <app-header :isAuth="true" user="Oleg1" :messages="67"/>
    <nuxt/>
  </div>
</template>

<script>
import AppHeader from '~/components/Header.vue'

export default {
  components: {
    AppHeader
  },
}
</script>

<style lang='scss'>


</style>

