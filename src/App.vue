<template>
  <div id="app" class="mobile-wrapper">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
  background: #F2F2F2;
}

.mobile-wrapper {
  width: 100%;
  max-width: 750px;
  min-height: 100vh;
  background: #fff;
  margin: 0 auto;
}

</style>

