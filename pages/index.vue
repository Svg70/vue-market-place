<template>
  <section class="container">
    <div>
      <h1 class="title">
        Main page
      </h1>
      <div 
      v-is-ie></div>
    </div>
  </section>
</template>

<script>
import { isIE } from '../utils/isIE'
console.log('isIE', isIE)
export default {

  components: {

  },
  directives: {
    isIe:{
      bind:(el, binding, vnode) => { 
        console.log(vnode)
        isIE();
        el.innerHTML = 'fff';
      }
    }
  },
  methods: {

    setClass() {
      return 'classNmme'
    }
  }
}
</script>

<style>

</style>

