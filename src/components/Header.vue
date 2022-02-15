<template>
  <header>
    <div
      id="search"
      class="d-flex justify-content-center align-items-center my-5"
    >
      <label for="search" class="me-2">Inserisci un film</label>
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

<style></style>
