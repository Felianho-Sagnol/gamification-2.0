<template>
  <div>
    <div class="container-fluid loginPage">
      <div class="row mt-3">
        <div class="col-md-4"></div>
        <div class="col-md-4 login">
          <h2 class="text-center mb-4"><i class="fas fa-user userLogin"></i></h2>
          <h4 class='text-center mb-4 connexion'>CONNEXION</h4>
          <hr>
          <form>
            <div class="form-group mt-5 mb-4">
              <input v-model="user.email" type="email" class="form-control form-control-sm" id="" aria-describedby="emailHelp" placeholder="Votre Email ...">
              <small v-if='!isEmailValide() && isSubmited' id="" class="form-text text-muted error">
                Renseignez votre adresse email de connexion.
              </small>
            </div>
            <div class="form-group mb-4">
              <input v-model="user.password" type="password" class="form-control form-control-sm" id="" placeholder="Mot de passe ...">

              <small v-if='!isPasswordValide() && isSubmited' id="" class="form-text text-muted error">
                Au moins 8 caractères.
              </small>
              <small v-if='isConnexionError() && isSubmited' id="" class="form-text text-muted error mt-4">
                {{ connexionError }}
              </small>
            </div>
            <div class="form-group">
              <a v-on:click="login" class="submitBtn text-center btn btn-sm">Se Connecter</a>
            </div>
            <hr>
            <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-6">
                <a class='btn btn-sm text-end noAccount'>Mot de passe oublié ?</a>
              </div>
              <div class="col-md-6  col-sm-6 col-xs-6">
                <router-link to='/register' class="btn btn-sm noAccount" >Pas de compte ?</router-link>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  components: {},
  data () {
    return {
      connexionError: '',
      start: false,
      isSubmited: false,
      user: {
        email: '',
        password: ''
      }
    }
  },
  mounted () {
    this.start = this.$route.params.start
    console.log(this.$route.params.start)
  },
  methods: {
    isPasswordValide () {
      return this.getPasswordLength() >= 8
    },
    getPasswordLength () {
      return this.user.password.length
    },
    getConnexionErrorLength () {
      return this.connexionError.length
    },
    isEmailValide () {
      const regex = new RegExp('[a-z0-9]+@[a-z]+[.][a-z]{2,3}')
      return regex.test(this.user.email)
    },
    isConnexionError () {
      return this.getConnexionErrorLength() > 0
    },
    isUserInformationValid () {
      return this.isEmailValide() && this.isPasswordValide()
    },
    login () {
      this.isSubmited = true
      const apiAuthUrlBase = 'http://127.0.0.1:8000/api/auth/'
      if (this.isUserInformationValid()) {
        axios.post(apiAuthUrlBase + 'logIn', this.user).then((response) => {
          const data = response.data
          if (data.error != null) {
            this.connexionError = data.error
          } else {
            this.connexionError = ''
            this.$store.dispatch('setIsAuthenticated', true)
            this.$store.dispatch('setUser', data.user)
            if (this.start) {
              this.$router.push('/catalog')
            } else {
              this.$router.push('/')
            }
          }
        })
      }
    }
  }
}
</script>

<style scoped>
  .login{
    padding:20px;
    margin-top:30px;
    padding-top:30px;
    padding-bottom:30px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 0.4);
    background-color:white;
    border-radius:5px;
  }
  .loginPage{
    padding:40px;
    background-color:white;
    padding-bottom: 100px;
  }

  .submitBtn{
    color:rgb(51, 49, 49) !important;
    font-weight:bold;
  }

  .noAccount{
    color:rgb(51, 49, 49);
    font-weight:bold;
  }

  .userLogin{
    color:rgb(51, 49, 49);
    font-weight:bold;
    font-size:50px;
  }

  .connexion{
    color:rgb(51, 49, 49);
    font-weight:bold;
  }

  .error{
    color:red !important;
  }
</style>
