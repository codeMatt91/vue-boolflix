<template>
  <ul class="list-unstyled">
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
    <li>{{ item.vote_average }}</li>
  </ul>
</template>

<script>
export default {
  name: "Card",
  props: ["item"],
};
</script>

<style></style>
