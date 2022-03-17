<template>
  <div class="fondo">
    <div class="padre container center p-5">
      <div class="card p-3" style="max-width: 940px">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="character.image" class="img-top rounded-start" alt="" />
          </div>
          <div class="col-md-8">
            <div class="card-body text-center">
              <h5 class="card-title">{{ character.name }}</h5>
              <p class="card-text">
                {{ character.status }}
                <br>
                {{ character.species }}
                <br>
                {{ character.gender }}
                <br>
                {{ character.location?.name }}
                <br>
                {{ character.origin?.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: {},
    };
  },
  methods: {
    async mostrarCharacter() {
      try {
        const data = await fetch(
          `https://rickandmortyapi.com/api/character/${this.$route.params.id}`
        );
        const getCharacter = await data.json();
        this.character = getCharacter;
      } catch (error) {
        throw error;
      }
    },
  },
  created() {
    this.mostrarCharacter();
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Smooch+Sans:wght@600&display=swap');

.card {
  border-radius: 10px;
  box-shadow: 10px;
}
.card-title {
  font-size: 32px;
  font-family: 'Press Start 2P', cursive;
}
.card-text {
  font-size: 28px;
  font-family: 'Smooch Sans', sans-serif;
}
.fondo {
  background-image: url('https://us.123rf.com/450wm/pitris/pitris1510/pitris151000024/46619020-fondo-de-espacio-con-estrellas-.jpg?ver=6');
}
.padre {
  display: flex;
  align-items: center;
  justify-content: center
}
</style>