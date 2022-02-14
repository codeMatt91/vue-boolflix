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
      <div v-if="this.query == ''" class="loader my-5 fw-bold fs-1 text-center">
        <div>Aggiungi un film <i class="fa-solid fa-film fa-2x"></i></div>
      </div>
      <div v-else>
        <h1 v-if="this.query !== ''" class="my-4 fw-bold">FILM</h1>
        <div class="row">
          <div
            v-for="movie in movies"
            :key="movie.id"
            class="col-3 text-center"
          >
            <ul class="list-unstyled">
              <li>{{ movie.original_title }}</li>
              <li>{{ movie.title }}</li>
              <li>
                <img
                  class="w-25"
                  v-if="movie.original_language === 'it'"
                  src="../assets/img/it.png"
                  alt="flag Italy"
                />
                <img
                  class="w-25"
                  v-else-if="movie.original_language === 'en'"
                  src="../assets/img/en.png"
                  alt="flag England"
                />
                <div v-else>{{ movie.original_language }}</div>
              </li>
              <li>{{ movie.vote_average }}</li>
            </ul>
          </div>
        </div>
        <h1 v-if="this.query !== ''" class="my-4 fw-bold">SERIE TV</h1>
        <div class="row">
          <div
            v-for="serie in series"
            :key="serie.id"
            class="col-3 text-center"
          >
            <ul class="list-unstyled">
              <li>{{ serie.original_name }}</li>
              <li>{{ serie.name }}</li>
              <li>
                <img
                  class="w-25"
                  v-if="serie.original_language === 'it'"
                  src="../assets/img/it.png"
                  alt="flag Italy"
                />
                <img
                  class="w-25"
                  v-else-if="serie.original_language === 'en'"
                  src="../assets/img/en.png"
                  alt="flag England"
                />
                <div v-else>{{ serie.original_language }}</div>
              </li>
              <li>{{ serie.vote_average }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
  props: ["movies", "series"],
  data() {
    return {
      query: "",
    };
  },
};
</script>

<style></style>
