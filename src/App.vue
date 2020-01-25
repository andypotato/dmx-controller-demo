<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss">

@import "./sass/_common";

#app {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
