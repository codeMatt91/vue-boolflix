<template>
  <main>
    <div class="container">
      <!-- SECTION LOADER  -->
      <div
        v-if="!this.movies.length && !this.series.length"
        class="loader my-5 fw-bold fs-1 text-center position-fixed top-50 start-50 translate-middle"
      >
        <div>SEARCH FILMS OR TV SERIES <i class="fa-solid fa-film"></i></div>
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
              <Card :item="movie" />
            </div>
          </div>
        </div>

        <!-- SERIES TV  -->
        <div id="series">
          <h1 class="my-4 fw-bold">SERIE TV</h1>
          <div class="row">
            <div
              v-for="serie in series"
              :key="serie.id"
              class="col-3 text-center"
            >
              <Card :item="serie" />
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
    return {};
  },
};
</script>

<style></style>
