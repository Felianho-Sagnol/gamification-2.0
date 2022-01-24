<template>
  <div>
    <div class="container-fluid homePage">
      <div class="row mt-3">
        <div class="col-md-1"></div>
        <div class="col-md-10 home">
          <h4 class='text-center mb-2 title'>Resolvez Des Problèmes</h4>
          <h4 class='text-center mb-2 title'>De</h4>
          <h4 class='text-center mb-4 title'>Toutes natures.</h4>
          <hr>
          <h4 class="mt-2 text-center invitationText">
            Renforcer votre capicité de resolution de problèmes.
          </h4>
          <h5 class="medail text-center">
            <i class="fas fa-medal"></i>
          </h5>
          <h5 class="start text-center">
            <span class='btn btn-sm startBtn' v-on:click="start">
              Je commence
            </span>
          </h5>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  methods: {
    start () {
      if (this.$store.state.isAuthenticated) {
        this.$router.push('/catalog')
      } else {
        this.$router.push({ name: 'login', params: { start: true } })
      }
    }
  }
}
</script>

<style scoped>
  .home{
    width:100% !important;
    padding:20px;
    margin-top:30px;
    padding-top:50px;
    padding-bottom:30px;
    box-shadow: 0 3px 7px rgb(0 0 0 / 0.9);
    background-color:rgb(238, 231, 231);
    border-radius:5px;
  }
  .homePage{
    padding:40px;
    height:700px;
    background-color:rgb(206, 216, 228);
    padding-bottom: 140px;
  }
  .title{
    color:black;
    font-weight:bold;
    font-size:50px;
    font-family: Edwardian Script ITC, Helvetica, sans-serif;
  }
  .invitationText{
    color:black;
    font-weight:bold;
    font-size: 35px;
    font-family: Edwardian Script ITC, Helvetica, sans-serif;
  }

  .medail{
    color:black;
    font-size:50px;
  }

  .start{
    color:black;
    font-size : 20px;
    font-family: Edwardian Script ITC, Helvetica, sans-serif;
  }

  .startBtn{
    width:150px;
    font-weight:bold;
    color:black;
    font-size:30px;
    box-shadow: 0 3px 7px rgb(0 0 0 / 0.9);
  }
</style>
