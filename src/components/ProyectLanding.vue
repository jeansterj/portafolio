<template>
  <div class="container text-white my-5 pt-4" id="proyectos">

    <div class="d-flex justify-content-around container my-5">

      <div class="text-center">
        <h1 class="merriweather">OBSERVA MIS TRABAJOS REALIZADOS</h1>
        <p>Me dedico a crear sitios web de alta calidad, diseñado a perdurar. Todo con un enfoque de interfaces claras,
          simples y elegantes, facilitando la comprensión y uso para cualquier cliente.</p>
      </div>

    </div>

    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(proyecto, index) in proyectos" :key="proyecto.id"
          :class="{ 'carousel-item': true, 'active': index === 0 }">
          <img :src="require(`../assets/${proyecto.name}.gif`)" :alt="proyecto.name"
            class="d-block w-100 proyecto-img" />
          <div class="carousel-caption d-none d-md-block">
            <h5>{{ proyecto.name }}</h5>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      proyectos: [
        { id: 1, name: 'Pokemon' },
        { id: 2, name: 'Coleccion' },
        { id: 3, name: 'LaiaGame' },
        { id: 4, name: 'Pomodoro' },
        { id: 5, name: 'ManualIdentidad' },
        { id: 6, name: 'JoInvito' },
        { id: 7, name: 'JuegoRol' },
        { id: 8, name: 'Ahorcado' }
      ]
    };
  }
};
</script>

<style>
.proyecto-img {
  /* Establece aquí las dimensiones deseadas */
  width: 500px;
  height: 700px;
  /* Ajusta el tamaño según tus necesidades */
}
</style>
