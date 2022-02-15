<template>
  <header class="d-flex justify-content-between align-items-center">
    <div class="ms-4">
      <h1>BOOLFLIX</h1>
    </div>
    <div
      id="search"
      class="d-flex justify-content-center align-items-center me-4"
    >
      <label for="search" class="me-2"></label>
      <input
        v-model="query"
        id="search"
        type="text"
        @keyup.enter="$emit('click', query)"
      />
      <button class="btn btn-danger ms-2" @click="$emit('click', query)">
        CERCA
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      query: "",
    };
  },
};
</script>

<style scoped lang="scss">
header {
  height: 200px;
  background-color: black;
}
h1 {
  color: red;
}
</style>
