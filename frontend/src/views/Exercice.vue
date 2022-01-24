<template>
  <div class="container-fluid">
    <Section1 />
  </div>
</template>

<script>
import axios from 'axios'
import Section1 from '../components/section1/Section1.vue'
export default ({
  name: 'Exercice',
  components: {
    Section1
  },
  data () {
    return {
      section: null
    }
  },
  mounted () {
    this.getSectionById(this.$route.params.section)
  },
  methods: {
    getSectionById (id) {
      const apiSectionsUrl = 'http://127.0.0.1:8000/api/sections/getSectionById'
      axios.post(apiSectionsUrl, { id: id }).then((response) => {
        const data = response.data
        this.section = data.section
      })
    }
  }
})
</script>

<style scoped>

</style>
