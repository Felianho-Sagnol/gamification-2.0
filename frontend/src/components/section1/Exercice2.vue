<template>
  <div class="container" id="contentBoxe">
    <button v-on:click='onFinish()'>Finis</button>
  </div>
</template>

<script>
export default {
  name: 'Exercice2',
  components: {},
  data () {
    return {
      sections: null
    }
  },
  mounted () {
    console.log('Admin')
  },
  methods: {
    onFinish () {
      this.$emit('finish', 1)
    }
  }
}
</script>

<style scoped></style>
