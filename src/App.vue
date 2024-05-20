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

::-webkit-scrollbar {
  width: 12px; /* Ancho de la barra de desplazamiento */
  border-radius: 10px; /* Radio de borde para hacerla más redonda */
}

/* Fondo de la barra de desplazamiento */
::-webkit-scrollbar-track {
  background: #25292B;
}

/* Color del manillar (el "mango" de la barra de desplazamiento) */
::-webkit-scrollbar-thumb {
  background: #D97B29;
  border-radius: 10px; /* Hacer el "mango" más redondo */
}

/* Efecto de sombra en la barra de desplazamiento */
::-webkit-scrollbar-thumb:hover {
  background: #955c17; /* Cambia el color al pasar el mouse */
}
</style>
