<template>
  <div class="card-poster list-unstyled d-flex flex-column align-items-center">
    <div class="poster">
      <img class="poster-img img-fluid h-100" :src="getPoster" alt="" />
    </div>
    <div class="info">
      <div class="h3">{{ item.title || item.name }}</div>
      <div>{{ item.original_title || item.original_name }}</div>
      <div>
        <img
          class="w-10"
          v-if="item.original_language === 'it'"
          src="../assets/img/it.png"
          alt="flag Italy"
        />
        <img
          class="w-10"
          v-else-if="item.original_language === 'en'"
          src="../assets/img/en.png"
          alt="flag England"
        />
        <div v-else>{{ item.original_language }}</div>
      </div>
      <div class="d-flex my-2 justify-content-center">
        <i v-for="item in getStar" :key="item" class="fa-solid fa-star"></i>
        <i
          v-for="star in 5 - getStar"
          :key="star"
          class="fa-regular fa-star"
        ></i>
      </div>
      <div class="plot text-white">
        <h3 class="text-warning">Plot:</h3>
        <div v-if="item.overview">{{ item.overview }}</div>
        <div v-else>Siamo Spiacenti al momento non è disponibile la trama</div>
      </div>
      <h4 class="my-3 text-warning">Release date:</h4>
      <div v-if="item.release_date" class="my-2">
        <strong> {{ item.release_date }}</strong>
      </div>
      <div v-else>Available soon</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
  data() {
    return {};
  },
  computed: {
    getStar() {
      return Math.ceil(this.item.vote_average / 2);
    },
    getPoster() {
      if (!this.item.poster_path) {
        return "https://www.altavod.com/assets/images/poster-placeholder.png";
      } else {
        return `https://image.tmdb.org/t/p/w342${this.item.poster_path}`;
      }
    },
  },
  // mounted: {
  //   getIdName() {
  //     const arrayItem = [...this.item];

  //     let { id } = arrayItem;
  //     this.$emit("name", id);
  //   },
  // },
};
</script>

<style scoped lang="scss">
.poster {
  width: 342px;
  height: 513px;
}
[class^="fa-"] {
  color: #ffc107;
}
.w-10 {
  width: 10%;
}
.card-poster {
  margin: 0;
  width: 342px;
  height: 513px;
  position: relative;
  border-radius: 10%;
  overflow: hidden;
}
.info {
  padding: 20px;
  display: none;
  width: 342px;
  height: 513px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
  background-color: rgba(#2b2a2a, 0.7);
  overflow: auto;
  animation: slide-in-bck-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

@keyframes slide-in-bck-left {
  0% {
    transform: translateZ(700px) translateX(-400px);
    transform: translateZ(700px) translateX(-400px);
    opacity: 0;
  }
  100% {
    transform: translateZ(0) translateX(0);
    transform: translateZ(0) translateX(0);
    opacity: 1;
  }
}

.card-poster:hover .info {
  display: block;
}
</style>
