<template>
  <main>
    <div class="container">
      <!-- SECTION LOADER  -->
      <div
        v-if="!this.movies.length && !this.series.length"
        class="loader fw-bold fs-1 d-flex align-items-center justify-content-center"
      >
        <div>SEARCH FILMS OR TV SERIES <i class="fa-solid fa-film"></i></div>
      </div>

      <!-- SECTION FILMS & SERIES TV  -->
      <div v-else>
        <!-- FILMS  -->
        <div id="films">
          <h1 class="my-5 fw-bold text-center">FILM</h1>
          <div class="row gy-5">
            <div
              v-for="movie in movies"
              :key="movie.id"
              class="col-4 d-flex justify-content-center"
            >
              <Card :item="movie" />
            </div>
          </div>
        </div>

        <!-- SERIES TV  -->
        <div id="series">
          <h1 class="my-5 fw-bold text-center">SERIE TV</h1>
          <div class="row gy-5">
            <div
              v-for="serie in series"
              :key="serie.id"
              class="col-4 d-flex justify-content-center"
            >
              <Card :item="serie" @name="setName" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import axios from "axios";
import Card from "./Card.vue";

export default {
  name: "Main",
  components: {
    Card,
  },
  props: ["movies", "series"],
};
</script>

<style scoped lang="scss">
[class^="col-"] {
  cursor: pointer;
}
main {
  height: calc(100% - 200px);
  background-color: #676767;
}
.loader {
  height: calc(100vh - 200px);
}
</style>
