<template>
  <div>
    <div class="my-5 pt-4 pb-5">
      <div class="d-flex flex-column flex-md-row justify-content-around align-items-center container pt-5 pb-5">
        <div class="mb-3 mb-md-0">
          <img src="@/assets/jean-brazo.svg" alt="Foto de Jean" class="img-fluid" />
        </div>

        <div class="text-white text-center text-md-start">
          <p class="my-3 zoom-effect">{{ $t('CONTACTO-PARRAFO1') }}</p>
          <p class="my-3 zoom-effect">{{ $t('CONTACTO-PARRAFO2') }}</p>
          <p class="my-3 zoom-effect">{{ $t('CONTACTO-PARRAFO3') }}</p>

          <div class="my-4 text-center">
            <a href="#contacto" class="btn colorSecond mx-2 text-white nunito zoom-effect" aria-label="Contacto">{{ $t('CONTACTO') }}</a>
            <a href="@/assets/CV Jean Paul.pdf" class="btn colorAccion mx-2 text-white nunito zoom-effect" download aria-label="Descargar CV">{{ $t('DESCARGAR') }}</a>
          </div>
        </div>
      </div>
      <!-- <div class="text-center mt-4">
        <button @click="toggleColorScheme" class="btn btn-secondary nunito" aria-label="Cambiar esquema de colores">Cambiar esquema de colores</button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alternativeColorScheme: false
    };
  },
  methods: {
    toggleColorScheme() {
      this.alternativeColorScheme = !this.alternativeColorScheme;
      if (this.alternativeColorScheme) {
        document.documentElement.classList.add('alt-color-scheme');
      } else {
        document.documentElement.classList.remove('alt-color-scheme');
      }
    }
  }
}
</script>

<style>
@media (max-width: 767px) {
  .flex-md-row {
    flex-direction: column !important;
  }
  .mb-md-0 {
    margin-bottom: 0 !important;
  }
}

.btn:hover {
  background-color: none;
}

a.text-white {
  text-decoration: none;
}

.nunito {
  font-family: 'Nunito', sans-serif;
}

.zoom-effect {
  transition: transform 0.3s ease;
}

.zoom-effect:hover {
  transform: scale(1.1);
}

/* Default color scheme */
.colorSecond {
  background-color: #007bff; /* Default color */
}

.colorAccion {
  background-color: #28a745; /* Default color */
}

/* Alternative color scheme for accessibility */
.alt-color-scheme .colorSecond {
  background-color: #ffbf00; /* High contrast color */
}

.alt-color-scheme .colorAccion {
  background-color: #ff007f; /* High contrast color */
}
</style>
