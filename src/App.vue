<template>
  <Main :series="series" :movies="movies" @click="setQuery" />
</template>

<script>
import axios from "axios";

import Main from "./components/Main.vue";

export default {
  name: "App",
  data() {
    return {
      series: [],
      movies: [],
      user_key: "1ed3a172e57823689018496d86094f75",
      query: "",
    };
  },
  components: {
    Main,
  },
  methods: {
    getDataMovies() {
      const config = {
        params: {
          api_key: this.user_key,
          query: this.query,
          language: "it-IT",
        },
      };
      axios
        .get(`https://api.themoviedb.org/3/search/movie?`, config)
        .then((res) => {
          this.movies = res.data.results;
        });
    },
    setDataSeries() {
      const config = {
        params: {
          api_key: this.user_key,
          query: this.query,
          language: "it-IT",
        },
      };

      axios
        .get(`https://api.themoviedb.org/3/search/tv?`, config)
        .then((res2) => {
          this.series = res2.data.results;
        });
    },
    setQuery(val) {
      this.query = val;
      this.getDataMovies();
      this.setDataSeries();
    },
  },
  computed: {},
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
