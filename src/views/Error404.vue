<template>
<div class="final">
  <div class="fondo container text-center">
    <h1 class="error">Esta es la 404 dimensión. Aquí no hay nada.</h1>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

.fondo {
  background-image: url('https://indiehoy.com/wp-content/uploads/2019/12/rick-morty.jpg');
  /* Arreglar dimensiones de imagen*/
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
}
.error {
  color: white;
  font-family: 'Press Start 2P', cursive;
  font-size: 30px;
  padding: 25px;
  background-color: black;
}
.final {
  background-color: black;
  display: flex;
}

</style>