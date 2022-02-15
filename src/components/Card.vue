<template>
  <ul class="list-unstyled">
    <li>
      <img :src="getPoster" alt="" />
    </li>
    <li>{{ item.original_title || item.original_name }}</li>
    <li>{{ item.title || item.name }}</li>
    <li>
      <img
        class="w-25"
        v-if="item.original_language === 'it'"
        src="../assets/img/it.png"
        alt="flag Italy"
      />
      <img
        class="w-25"
        v-else-if="item.original_language === 'en'"
        src="../assets/img/en.png"
        alt="flag England"
      />
      <div v-else>{{ item.original_language }}</div>
    </li>
    <li class="d-flex justify-content-center">
      <i v-for="item in getStar" :key="item" class="fa-solid fa-star"></i>
      <i v-for="star in 5 - getStar" :key="star" class="fa-regular fa-star"></i>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
  data() {
    return {
      rest: "",
    };
  },
  computed: {
    getStar() {
      return Math.floor(this.item.vote_average / 2);
    },

    getPoster() {
      if (!this.item.poster_path) {
        return "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png";
      } else {
        return `https://image.tmdb.org/t/p/w342${this.item.poster_path}`;
      }
    },
  },
};
</script>

<style></style>
