<template>
  <div class="card" style="width: 18rem">
    <!-- <img src="..." class="card-img-top" alt="..." /> -->
    
      <h5 class="card-title">{{character.name}}</h5>
      <div class="card-text">
        <h6>{{character.status}}</h6>
        <h6>{{character.species}}</h6>
        <h6>{{character.gender}}</h6>
        <h6>{{character.origin?.name}}</h6>
      </div>
      
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: {},
    }
  },
  methods: {
    async mostrarCharacter() {
      try {
        const data = await fetch(
          `https://rickandmortyapi.com/api/character/${this.$route.params.id}`);
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

<style>
</style>