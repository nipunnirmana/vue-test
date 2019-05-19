<template>
  <div>
    <div class="header">MY TODO HEADER</div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: "todoHeader"
};
</script>

<style scoped>
.header {
  background: lightblue;
}
</style>
