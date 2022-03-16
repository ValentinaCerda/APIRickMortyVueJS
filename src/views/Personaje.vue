<template>
  <div class="fondo">
    <div class="padre container center mt-5">
      <div class="row g-0" style="max-width: 940px">

        <div class="card col mb-3">

          <div class="img mw-100">
            <img :src="character.image" class="img-fluid rounded-start" alt="" />
          </div>

          <div class="">
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
  border: 10px;
  border-color: white;
  border-radius: 10px;
  border-style: dashed;
  box-shadow: 10px;
  background: rgba(255, 255, 255, 0.568);
}
.card-title {
  font-size: 32px;
  font-family: 'Press Start 2P', cursive;
}
.card-text {
  font-size: 28px;
  font-family: 'Smooch Sans', sans-serif;
}
.img {
  padding: 50px;
}
.fondo {
  background-image: url('https://us.123rf.com/450wm/pitris/pitris1510/pitris151000024/46619020-fondo-de-espacio-con-estrellas-.jpg?ver=6');
  padding: 0;
}
.padre {
  display: flex;
  align-items: center;
  justify-content: center
}
</style>