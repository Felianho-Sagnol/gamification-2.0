<template>
  <div class="container-fluid">
    <div class="row section-container">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <div class="row">
          <div v-for = "section in sections" :key="section" class="setion-item col-md-12">
            <div class="row rowContainer">
              <div class="col-md-4">
                <img class="img" src="../assets/img/verroumentaux.png" alt="">
              </div>
              <div class="col-md-8">
                <h5>{{ section.name }} </h5>
                <div class="row rowItem">
                  <div class="col-md-9 col-sm-9 col-xs-9">
                    <h6>Caoch : Jari AIT M'Barek</h6>
                    <h6 class='mt-3'>Score : 18</h6>
                  </div>
                  <div class="col-md-3 col-sm-3 col-xs-3">
                    <h5 class='text-center'>
                      <span class="btn btn-sm startBtn" v-on:click='goto(section.id)'>
                        Commencer
                      </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
  </div>
</template>

<style>

</style>

<script>

export default ({
  name: 'App',
  components: {
  },
  data () {
    return {
      sections: null
    }
  },
  mounted () {
    this.$store.dispatch('SetSections')
    this.sections = this.$store.getters.getSections
  },
  methods: {
    goto (id) {
      this.$router.push({ name: 'exercice', params: { section: id } })
    }
  }
})
</script>

<style scoped>
  .section-container{
    background-color: white;
  }
  .container-fluid{
    margin-top: 70px;
    padding : 40px;
  }

  .setion-item{
    padding: 10px;
    background-color: white;
    margin-top : 10px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 0.4);
  }
  .startBtn{
    margin-top: 20px;
    background-color: rgb(55, 127, 223);
    color: white;
    font-weight: bold;
  }

  .rowItem{
    margin-top: 20px;
  }

  .img{
    height:110px;
    width:100%;
  }

  .rowContainer{
    padding:10px;
  }
</style>
