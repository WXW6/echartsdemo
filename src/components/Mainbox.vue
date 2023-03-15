<template>
  <div class="mainbox">
    <div class="column">
      <Panel chart="chart1"></Panel>
      <Panel chart="chart2"></Panel>
      <Panel chart="chart3"></Panel>
    </div>
    <div class="column">
      <Number></Number>
      <Map></Map>
    </div>
    <div class="column">
      <Panel chart="chart4"></Panel>
      <Panel chart="chart5"></Panel>
      <Panel chart="chart6"></Panel>
    </div>
  </div>
</template>

<script>
import Panel from "@/components/Panel";
import Number from "@/components/charts/Number";
import Map from "@/components/charts/map/Map";
export default {
  name: "Mainbox",
  components: {
    Panel,
    Number,
    Map,
  },
};
</script>

<style lang="scss" scoped>
.mainbox {
  min-width: 1024px;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  display: flex;
  .column {
    flex: 3;
  }
  .column:nth-child(2) {
    flex: 5;
    margin: 0 0.125rem 0.1875rem;
  }
}
</style>