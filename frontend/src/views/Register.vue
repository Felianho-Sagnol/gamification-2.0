<template>
  <div>
    <div class="container-fluid loginPage">
      <div class="row mt-3">
        <div class="col-md-4"></div>
        <div class="col-md-4 login">
          <h2 class="text-center mb-4"><i class="fas fa-user userLogin"></i></h2>
          <h4 class='text-center mb-4 connexion'>INSCRIPTION</h4>
          <hr>
          <form>
            <div class="form-group mt-4 mb-5">
              <h5 class='text-center step mb-4'>---------- Etape {{ step }} / 3 ----------</h5>
            </div>
            <div v-if='step==1'>
              <div  class="form-group mt-4 mb-4">
                <input type="text" v-model="user.name" class="form-control form-control-sm" id="" aria-describedby="emailHelp" placeholder="Nom ...">
                <small v-if='getNameLength() == 0' id="" class="form-text text-muted error">
                  Remplissez ce champ.
                </small>
              </div>
              <div class="form-group mb-4">
                <input type="text" v-model="user.firstName"  class="form-control form-control-sm" id="" placeholder="Prenom ...">
                <small v-if='getFirstNameLength() == 0' id="" class="form-text text-muted error">
                  Remplissez ce champ.
                </small>
              </div>
            </div>
            <div v-if='step==2'>
              <div  class="form-group mt-4 mb-4">
                <input type="text" v-model="user.email" class="form-control form-control-sm" id="" aria-describedby="emailHelp" placeholder="Email ...">
                <small v-if='!isEmailValide()' id="" class="form-text text-muted error">
                  Renseignez une adresse email valide.
                </small>
              </div>
              <div class="form-group mb-4">
                <input type="text" v-model="user.appoge" class="form-control form-control-sm" id="" placeholder="Appogé ...">
                <small v-if='!isAppogeValide()' id="" class="form-text text-muted error">
                  Renseignez votre numéro d'appogé.
                </small>
              </div>
            </div>
            <div v-if='step==3'>
              <div  class="form-group mt-4 mb-4">
                <input type="password" v-model="user.password" class="form-control form-control-sm" id="" aria-describedby="emailHelp" placeholder="Mot de passe ...">
                <small v-if='!isPasswordValide()' id="" class="form-text text-muted error">
                  Au moins 8 caractères.
                </small>
              </div>
              <div class="form-group mb-4">
                <input type="password" v-model="user.passwordConfirmation" class="form-control form-control-sm" id="" placeholder="Comfirmation ...">
                <small v-if='!isComfirmPasswordValide()' id="" class="form-text text-muted error">
                  Au moins 8 caractères.
                </small>
                <small v-if='passWordNotValide()' id="" class="form-text text-muted error mt-3">
                  Les deux mots de passes ne sont pas identiques.
                </small>
                <small v-if='isRegistrationError()' id="" class="form-text text-muted error mt-4">
                  {{ registrationError }}
                </small>
              </div>
            </div>
            <div class="form-group mb-3">
              <a v-if="step != 1" v-on:click="decrementStep" class="btn btn-sm rowFlex mr-2"><i class="fas fa-arrow-left"></i></a>
              <a v-if="step != 3" v-on:click="incrementStep" class="btn btn-sm rowFlex"><i class="fas fa-arrow-right"></i></a>
            </div>
            <hr>
            <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-6">
                <a v-on:click="register" v-if="isUserInformationValid()" class="submitBtn text-center btn btn-sm">S'inscrire</a>
              </div>
              <div class="col-md-6  col-sm-6 col-xs-6">
                <router-link to='/login' class="btn btn-sm noAccount" href="">Déja inscrit ?</router-link>
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
  name: 'Register',
  data () {
    return {
      step: 1,
      registrationError: '',
      user: {
        name: '',
        firstName: '',
        email: '',
        appoge: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  },
  components: {

  },
  methods: {
    incrementStep () {
      this.step += 1
    },
    decrementStep () {
      this.step -= 1
    },
    isNameValide () {
      return this.getNameLength() > 0
    },
    isFirstNameValide () {
      return this.getFirstNameLength() > 0
    },
    isEmailValide () {
      const regex = new RegExp('[a-z0-9]+@[a-z]+[.][a-z]{2,3}')
      return regex.test(this.user.email)
    },
    getAppogeLength () {
      return this.user.appoge.length
    },
    getNameLength () {
      return this.user.name.length
    },
    getFirstNameLength () {
      return this.user.firstName.length
    },
    getPasswordLength () {
      return this.user.password.length
    },
    getConfirmPasswordLength () {
      return this.user.passwordConfirmation.length
    },
    isAppogeValide () {
      const regex = new RegExp('[A-Z0-9]{8,}')
      return regex.test(this.user.appoge)
    },
    isPasswordValide () {
      return this.getPasswordLength() >= 8
    },
    isComfirmPasswordValide () {
      return this.getConfirmPasswordLength() >= 8
    },
    passWordNotValide () {
      const state = this.isPasswordValide() && this.isComfirmPasswordValide()
      let finalState
      if (state && this.user.password !== this.user.passwordConfirmation) {
        finalState = true
      } else {
        finalState = false
      }
      return finalState
    },
    isUserInformationValid () {
      return this.isNameValide() && this.isFirstNameValide() && this.isEmailValide() && this.isAppogeValide() && this.isPasswordValide() && this.isComfirmPasswordValide() && !this.passWordNotValide()
    },
    getRegistrationErrorLength () {
      return this.registrationError.length
    },
    isRegistrationError () {
      return this.getRegistrationErrorLength() > 0
    },
    register () {
      const apiAuthUrlBase = 'http://127.0.0.1:8000/api/auth/'
      console.log('register')
      console.log(this.isUserInformationValid())
      if (this.isUserInformationValid()) {
        axios.post(apiAuthUrlBase + 'register', this.user).then((response) => {
          const data = response.data
          if (data.error != null) {
            this.registrationError = data.error
            console.log(this.registrationError)
          } else {
            this.$store.dispatch('setIsAuthenticated', true)
            this.$store.dispatch('setUser', data.user)
            console.log(data.user)
            this.$router.push('/')
          }
          console.log(this.isRegistrationError())
        }).catch(error => {
          console.log(error)
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
    padding-bottom:40px;
    box-shadow: 0 3px 6px rgb(0 0 0 / 0.9);
    background-color:rgba(0, 128, 0, 0.904);
    border-radius:5px;
  }
  .loginPage{
    padding:40px;
    background-color:green;
    padding-bottom: 140px;
  }

  .submitBtn{
    color:white;
    font-weight:bold;
  }

  .noAccount{
    color:white;
    font-weight:bold;
  }

  .userLogin{
    color:white;
    font-weight:bold;
    font-size:50px;
  }

  .connexion{
    color:white;
    font-weight:bold;
  }

  .error{
    color:white !important;
  }

  .step{
    color:white !important;
    font-size:17px;
  }

  .rowFlex{
    color:white !important;
    font-weight:bold;
    font-size:22px;
  }
</style>
