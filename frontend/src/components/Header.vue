<template>
  <nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
    <router-link to='/'  class="navbar-brand d-flex w-50 mr-auto ">
      <!--<span class="isActive">Gamification 2.0</span>-->
      <img style="width:70px;heigth:50px" src="../assets/img/logo.svg" alt="">
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsingNavbar3"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
      <!--<ul class="navbar-nav w-100 justify-content-left">
        <li class="nav-item">
          <a class="nav-link" href="#">Statistiques</a>
        </li>
      </ul>-->
      <div v-if="isAuthenticated" class="progress" style="width: 100%"> <!-- 50em = half the screen width -->
            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <ul class="nav navbar-nav ml-auto w-100 justify-content-end rigthIcons">
        <li v-if="isAuthenticated" class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-user-cog mr-1"></i>Paramètres
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Mes Statistiques</a>
            <a class="dropdown-item" href="#">Mon Profile</a>
            <a class="dropdown-item" href="">Déconnexion</a>
          </div>
        </li>
        <li v-if="isAuthenticated" class="nav-item">
          <a class="nav-link" href="#">
            <i class="fas fa-star star"></i><i class="far fa-star star"></i><i class="far fa-star star"></i>
          </a>
        </li>
        <li v-if="!isAuthenticated" class="nav-item">
          <router-link to='/login' class="nav-link" href="#">
            <i class="fas fa-sign-in-alt mr-2"></i>Authentification
          </router-link>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Header',
  components: {

  },
  computed: {
    ...mapState({
      isAuthenticated: 'isAuthenticated'
    }),
    ...mapGetters({
      getIsAuthenticated: 'getIsAuthenticated'
    })
  },
  methods: {
    toggleIsAuthenticated () {
      /* this.$store.dispatch('toggleIsAuthenticated') */
      this.$store.dispatch('getIsAuthenticated')
    }
  }
}
</script>

<style scoped>
  .navbar{
    background-color:rgb(55, 127, 223);
    box-shadow: 0 3px 6px rgb(0 0 0 / 0.6);
  }
  .nav-link {
    color: white !important;
    font-size : 17px;
    font-weight: bold;
  }

  .navbar-brand{
    color: white !important;
    font-weight: bold !important;
  }

  .star{
    font-size: 20px !important;
  }

  .dropdown-menu{
    width: 250px !important;
    box-shadow: 0 3px 6px rgb(0 0 0 / 0.4);
    background-color:rgb(238, 231, 231);
  }

  .dropdown-item{
    background-color:rgb(238, 231, 231);
    color:black !important;
    font-weight: bold !important;
  }
  .navbar-toggler-icon{
    color:white !important;
    background-color: white !important;
  }
  .navbar-toggler{
    background-color : green !important;
  }
</style>
