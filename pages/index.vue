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

export default {
  components: {

  },
  directives: {
    isIe:{
      bind:(el, binding, vnode) => { 
        vnode.context.isIE();
        el.innerHTML = 'fff';
      }
    }
  },
  methods: {
    isIE() {
      if (process.client) {
        const userAgent = window.navigator.userAgent;
        console.log(userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1)
        return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;
      }
    },
    setClass() {
      return 'classNmme'
    }
  }
}
</script>

<style>

</style>

