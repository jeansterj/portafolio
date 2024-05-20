<template>
  <div class="bodyLanding" id="home">
    <nav class="navbar navbar-expand-lg bg-body-tertiary nabvarStyle fixed-top" id="navbar">
      <div class="container-fluid justify-content-around">
        <a class="navbar-brand" href="#"><img src="../assets/jeanPaulLogo.svg" alt="Jean Paul"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-between merriweather navigation" id="navbarNav">
          <a class="nav-link active mx-4" aria-current="page" href="#home">{{ $t('HOME') }}</a>
          <a class="nav-link active mx-4" href="#conoceme">{{ $t('CONOCEME') }}</a>
          <a class="nav-link active mx-4" href="#habilidades">{{ $t('HABILIDADES') }}</a>
          <a class="nav-link active mx-4" href="#proyectos">{{ $t('PROYECTOS') }}</a>
          <a class="nav-link active mx-4" href="#contacto">{{ $t('CONTACTO') }}</a>
          <div class="d-flex">
            <a class="nav-link active" href="#" @click.prevent="changeLanguage('es')">ES/</a>
            <a class="nav-link active" href="#" @click.prevent="changeLanguage('cat')">CAT/</a>
            <a class="nav-link active" href="#" @click.prevent="changeLanguage('en')">EN</a>
          </div>
        </div>
      </div>
    </nav>

    <div class="container-fluid mt-5 pt-1">
      <div class="row justify-content-center align-items-center" style="height: 100vh;">
        <div class="col-md-1 text-center">
          <div class="d-grid gap-3">
           <a href="https://github.com/jeansterj"> <img class="p-5" src="../assets/github.svg" alt="GitHub-logo"></a>
            <a href="https://x.com/jeansterj"><img class="p-5" src="../assets/twitter.svg" alt="twitter-logo"></a>
            <a href="https://www.linkedin.com/in/jean-paul-da-silva-410896198/"><img class="p-5" src="../assets/linkedin-logo.svg" alt="linkedin-logo"></a>
          </div>
        </div>
        <div class="col-md-11 text-center">
          <div class="d-grid">
            <h1 class="text-white merriweather">{{ $t('DESARROLLADOR') }}</h1>
            <img class="imgPortada" src="../assets/logoLanding.svg" alt="logoLanding">
          </div>
        </div>
        <a href="#conoceme">
        <div class="arrow-scroll">
          <div class="arrow"></div>
          <div class="arrow"></div>
          <div class="arrow"></div>
        </div>
      </a>
      </div>
    </div>

    <AboutMe></AboutMe>
    <ProyectLanding></ProyectLanding>
    <SkillsPorta></SkillsPorta>
    <ContacMe></ContacMe>
  </div>
</template>

<script>
import SkillsPorta from "./SkillsPorta.vue";
import ProyectLanding from "./ProyectLanding.vue";
import AboutMe from "./AboutMe.vue";
import ContacMe from "./ContacMe.vue";

export default {
  components: {
    SkillsPorta,
    ProyectLanding,
    AboutMe,
    ContacMe,
  },
  methods: {
    changeLanguage(language) {
      this.$i18n.locale = language;
      console.log('paseeee')
    },
  }
};
</script>

<style>

html {
  scroll-behavior: smooth;
}

.navigation a {
  position: relative;
  font-size: 1.1em;
  text-decoration: none;
  font-weight: 500;
  
}

.navigation a::after{
  content: '';
  position: absolute;
  left: 0;
  top: 11px;
  width: 100%;
  height: 3px;
  background-color: #D97B29;
  border-radius: 5px;
  transform: scaleX(0);
  transition: transform .5s;
  
}

.navigation a:hover::after{
  transform: scaleX(1)
}

.colorPrimary {
  background-color: #35A2BD;
}

.colorSecond {
  background-color: #D97B29;
}

.colorAccion {
  background-color: #D4AF37;
}

.nabvarStyle {
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: #35A2BD !important;
  color: white;
  transition: background-color 0.3s ease;
}

.bodyLanding {
  display: flex;
  margin: 0;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  height: 100vh;
}

.imgPortada {
  display: flex;
  justify-self: center;
  width: 40%;
}

.arrow-scroll {
  position: relative;
  height: 5em;
}

.arrow {
  border: solid #D97B29;
  border-width: 0 10px 10px 0;
  display: inline-block;
  padding: 30px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
}

.arrow:nth-child(2) {
  animation: arrow1 1.5s ease-in-out infinite;
}

.arrow:nth-child(3) {
  animation: arrow1 1.5s ease-in-out infinite;
}

@keyframes arrow1 {
  100% {
    opacity: 0;
    top: 100%;
  }
}

.fixed-top {
  right: none;
  left: none;
}

.merriweather {
  font-family: 'Merriweather', serif;
}
</style>
