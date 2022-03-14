<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Rick&Morty</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/personaje">Personajes por ID</router-link>
        </li>
      </ul>
      <!-- <form class="d-flex mx-3">
        <input class="form-control me-2" type="search" placeholder="escribir número" aria-label="search">
        <button class="btn btn-outline-success" type="submit">Buscar</button>
      </form> -->
    </div>
  </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
navbar {
  color: white;
}

.navbar-brand {
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 30px;
}

.nav-link {
  font-weight: bold;
  font-size: 20px;
}
</style>