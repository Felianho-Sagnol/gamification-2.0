<template>
  <div class="container-fluid">
    <div v-if="!hasStarted" class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-12 mb-3 item">
            <h5>Découvrez les verrous mentaux</h5>
            <hr>
            <h6 class='desciption'>
              Parfois,vous pourriez sentir l'existence de "verrous mentaux" que vous ou des gens de votre entourage,mettez en travers de votre créativité . <br>Par exemple "c'est irrationnel" , "cela ne se fait pas" , "les autres ne vont pas aimer cela".
            </h6>
            <div class="row rowItem">
              <div class="col-md-9 col-sm-9 col-xs-9">
                <h6 class='partir'>
                  Partez à la découverte des verrous mentaux et gagnez +25 points.
                </h6>
              </div>
              <div class="col-md-3 col-sm-3 col-xs-3">
                <h5 class='text-center'>
                  <span class="btn btn-sm startBtn" v-on:click='start(1)'>
                    Commencer
                  </span>
                </h5>
              </div>
            </div>
          </div>
          <div class="col-md-12 mb-3 item">
            <h5>Découvrez votre personnalité</h5>
            <hr>
            <h6 class='desciption'>
              Dans cette partie , vous allez choisir les adjectifs qui
              vous décrivent le mieux selon qu'ils sont avantageux pour vous et pour votre entourage ou pas.
            </h6>
            <div class="row rowItem">
              <div class="col-md-9 col-sm-9 col-xs-9">
                <h6 class='partir'>
                  Partez à la découverte de votre personnalité et gagnez +30 points.
                </h6>
              </div>
              <div class="col-md-3 col-sm-3 col-xs-3">
                <h5 class='text-center'>
                  <span class="btn btn-sm startBtn" v-on:click='start(2)'>
                    Commencer
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-2"></div>
    </div>
    <Exercice1 v-if="hasStarted && selectedQItem==1" @finish="finish" />
    <Exercice2 v-if="hasStarted && selectedQItem==2" @finish="finish" />
  </div>
</template>

<script>
import axios from 'axios'
import Exercice1 from './Exercice1.vue'
import Exercice2 from './Exercice2.vue'

export default ({
  name: 'Section1',
  components: {
    Exercice1,
    Exercice2
  },
  data () {
    return {
      section: null,
      hasStarted: false,
      selectedQItem: 0
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
    },
    start (selected) {
      this.selectedQItem = selected
      this.hasStarted = true
      console.log('is started')
    },
    finish () {
      this.selectedQItem = 0
      this.hasStarted = false
      console.log('is finished')
    }
  }
})
</script>

<style scoped>
  .container-fluid{
    margin-top: 40px;
  }
  .item{
    padding:10px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 0.4);
  }
  .startBtn{
    background-color: rgb(55, 127, 223);
    color: white;
    font-weight: bold;
  }
  .desciption{
    font-size:13px;
  }
  .partir{
    font-size:14px;
  }
  .rowItem{
    margin-top:40px;
  }
</style>
