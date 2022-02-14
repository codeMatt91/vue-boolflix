<template>
  <Main :movies="movies" @click="setQuery" />
</template>

<script>
import axios from "axios";

import Main from "./components/Main.vue";

export default {
  name: "App",
  data() {
    return {
      movies: [],
      user_key: "1ed3a172e57823689018496d86094f75",
      query: "",
      // userQuery: "",
    };
  },
  components: {
    Main,
  },
  methods: {
    getData() {
      const config = {
        params: {
          api_key: this.user_key,
          query: this.query,
          language: "it-IT",
        },
      };

      axios
        .get(`https://api.themoviedb.org/3/search/movie`, config)
        .then((res) => {
          this.movies = res.data.results;
        });
    },
    setQuery(val) {
      this.query = val;
      this.getData();
    },
  },
  computed: {
    
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
