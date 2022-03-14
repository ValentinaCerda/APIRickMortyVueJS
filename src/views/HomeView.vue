<template>
  <div class="pantalla">
    <div class="container center">
      <h1 class="text-center lista">Personajes Rick&Morty</h1>
      <div class="row">
        <div
          class="card col-3 text-center mt-5 mb-5 offset-2"
          style="width: 18rem"
          v-for="character of characters"
          :key="character.id"
        >
          <img :src="character.image" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">{{ character.name }}</h5>
            <h6>{{ character.species }}</h6>

            <span v-if="character.status === 'Alive'" class="green"></span>
            <span v-else class="red"></span>

            <h6>{{ character.status }}</h6>
            <router-link :to="`/personaje/${character.id}`" class="btn btn-danger">Ir al personaje</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      characters: [],
    };
  },
  methods: {
    async obtenerCharacters() {
      try {
        const data = await fetch("https://rickandmortyapi.com/api/character");
        const getCharacters = await data.json();
        this.characters = getCharacters.results;
      } catch (error) {
        throw error;
      }
    },
  },
  created() {
    this.obtenerCharacters();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

/* .green {
  color: green;
}
.red {
  color: red;
} */
.card {
  display: inline-block;
  border-radius: 10px;
}
.pantalla {
  background-image: url("https://us.123rf.com/450wm/pitris/pitris1510/pitris151000024/46619020-fondo-de-espacio-con-estrellas-.jpg?ver=6");
}
.lista {
  color: #fff;
  padding: 20px;
  font-family: "Press Start 2P", cursive;
}
.card-img-top {
  border-radius: 10px;
}
</style>