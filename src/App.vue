<template>
  <div id="app">
    <div id="nav">
      <Header/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/layout/header";
export default {
  components: {
    Header
  }
};
</script>
