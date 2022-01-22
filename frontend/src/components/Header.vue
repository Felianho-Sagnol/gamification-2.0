<template>
  <nav class="navbar navbar-light navbar-expand-md bg-faded justify-content-center">
    <a href="#" class="navbar-brand d-flex w-50 mr-auto">
      <img class="logo" src="" alt="" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsingNavbar3"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
      <ul class="navbar-nav w-100 justify-content-center">
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            >Accueil</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            >Apropos</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#"
            >Services</a
          >
        </li>
      </ul>
      <ul class="nav navbar-nav ml-auto w-100 justify-content-end rigthIcons">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <i class="facebook fab fa-facebook-square"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Header',
  components: {

  }
}
</script>
