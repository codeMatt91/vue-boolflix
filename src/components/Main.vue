<template>
  <main>
    <div
      id="search"
      class="d-flex justify-content-center align-items-center my-5"
    >
      <label for="search" class="me-2">Inserisci un film</label>
      <input v-model="query" id="search" type="text" />
      <button class="btn btn-danger ms-2" @click="$emit('click', query)">
        CERCA
      </button>
    </div>
    <div class="container d-flex justify-content-center align-items-center">
      <div v-if="this.query == ''" class="loader my-5 fw-bold fs-1">
        <div>Aggiungi un film <i class="fa-solid fa-film fa-2x"></i></div>
      </div>
      <div v-else class="row">
        <div v-for="movie in movies" :key="movie.id" class="col-3 text-center">
          <ul class="list-unstyled">
            <li>{{ movie.original_title }}</li>
            <li>{{ movie.title }}</li>
            <li>{{ movie.original_language }}</li>
            <li>{{ movie.vote_average }}</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
  props: ["movies"],
  data() {
    return {
      query: "",
    };
  },
};
</script>

<style></style>
