<template>
  <div id="app">
    <Page />
    <!-- <Test></Test> -->
  </div>
</template>

<script>
import Page from "./components/Page.vue";
import Test from "@/components/Test";

export default {
  name: "App",
  components: {
    Page,
    Test,
  },
};
</script>

<style>
</style>
