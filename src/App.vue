<template>
  <div class="wrapper">
    <Header @click="setQuery" />
    <Main :series="series" :movies="movies" />
  </div>
</template>

<script>
import axios from "axios";

import Main from "./components/Main.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  data() {
    return {
      series: [],
      movies: [],
      castMovie: [],
      castTv: [],
      user_key: "1ed3a172e57823689018496d86094f75",
      base_uri: "https://api.themoviedb.org/3/",
      query: "",
    };
  },
  components: {
    Main,
    Header,
  },
  methods: {
    getDataMovies() {
      if (!this.query) {
        this.movies = [];
        this.series = [];
        return;
      }

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
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
