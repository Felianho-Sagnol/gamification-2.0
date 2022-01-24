<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<style>

</style>

<script>
import Header from './components/Header.vue'

export default ({
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Header
  }
})
</script>
