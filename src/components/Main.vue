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
    <div class="container">
      <!-- SECTION LOADER  -->
      <div
        v-if="!this.movies.length && !this.series.length"
        class="loader my-5 fw-bold fs-1 text-center"
      >
        <div>Aggiungi un film <i class="fa-solid fa-star"></i></div>
      </div>

      <!-- SECTION FILMS & SERIES TV  -->
      <div v-else>
        <!-- FILMS  -->
        <div id="films">
          <h1 class="my-4 fw-bold">FILM</h1>
          <div class="row">
            <div
              v-for="movie in movies"
              :key="movie.id"
              class="col-3 text-center"
            >
              <Card :item="movies" />
            </div>
          </div>
        </div>

        <!-- SERIES TV  -->
        <div  id="series">
          <h1 class="my-4 fw-bold">SERIE TV</h1>
          <div class="row">
            <div
              v-for="serie in series"
              :key="serie.id"
              class="col-3 text-center"
            >
              <Card :item="series" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Main",
  components: {
    Card,
  },
  props: ["movies", "series"],
  data() {
    return {
      query: "",
    };
  },
};
</script>

<style></style>
