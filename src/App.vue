<template>
  <LandingPorta></LandingPorta>

</template>

<script>
import LandingPorta from './components/LandingPorta.vue'

export default {
  name: 'App',
  components: {
    LandingPorta
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  background-color: #25292B;
  font-family: 'Nunito', sans-serif;
}
</style>
