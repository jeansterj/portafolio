<template>
  <div class="my-5 pt-5" id="habilidades">
    <div class="container-fluid my-5 pt-5">
      <div class="btn-group text-white" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" :checked="personal" @click="prueba('personal')">
        <label class="btn btn-outline" for="btnradio1">PERSONALES</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" :checked="habilidades" @click="prueba('habilidades')">
        <label class="btn btn-outline" for="btnradio2">HABILIDADES</label>

        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" :checked="herramientas" @click="prueba('herramientas')">
        <label class="btn btn-outline" for="btnradio3">HERRAMIENTAS</label>
      </div>

      <div class="skills-content">
        <div v-if="personal" class="skills-box text-white">
          <p class="my-5">Características personales que me crean como profesional.</p>
          <div class="button-container my-4">
            <button class="btn text-white colorPrimary" v-for="skill in skillPersonal" :key="skill.id">{{ skill.skill }}</button>
          </div>
        </div>

        <div v-else-if="habilidades" class="skills-box skills text-white">
          <p class="my-5">Habilidades con las que he desarrollado mis diferentes proyectos.</p>
          <div class="skill-list">
            <div v-for="skillH in skillHabilidades" :key="skillH.id" class="skill-card mx-4">
              <div class="tooltip">{{ skillH.name.replace('-', ' ') }}</div>
              <div class="card-icon">
                <img :src="require(`../assets/${skillH.name}.svg`)" :alt="skillH.name">
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="herramientas" class="skills-box skills text-white">
          <p class="my-5">Herramientas que han permitido mejoras en el desarrollo.</p>
          <div class="skill-list">
            <div v-for="skillHe in skillHerramientas" :key="skillHe.id" class="skill-card mx-4">
              <div class="tooltip">{{ skillHe.name.replace('-', ' ') }}</div>
              <div class="card-icon">
                <img :src="require(`../assets/${skillHe.name}.svg`)" :alt="skillHe.name" :class="{ 'github-icon': skillHe.name === 'github' }">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillPersonal: [
        { id: 1, skill: 'TRABAJO EN EQUIPO' },
        { id: 2, skill: 'RESPONSABILIDAD' },
        { id: 3, skill: 'APRENDIZAJE CONTINUO' },
        { id: 4, skill: 'EMPATIA' },
        { id: 5, skill: 'INNOVACIÓN' },
        { id: 6, skill: 'ADAPTABILIDAD' }
      ],
      personal: true,
      habilidades: false,
      herramientas: false,
      skillHabilidades: [
        { id: 1, name: 'Vue-logo', src: "../assets/vue-logo.svg" },
        { id: 2, name: 'HTML-logo', src: '../assets/HTML-logo.svg' },
        { id: 3, name: 'CSS-logo', src: '../assets/CSS-logo.svg' },
        { id: 4, name: 'Javascript', src: '../assets/Javascript.svg' },
        { id: 5, name: 'Java-logo', src: '../assets/Java-logo.svg' },
        { id: 6, name: 'Laravel-logo', src: '../assets/Laravel-logo.svg' },
        { id: 7, name: 'Bootstrap-logo', src: '../assets/Bootstrap-logo.svg' },
        { id: 8, name: 'Mysql-logo', src: '../assets/Mysql-logo.svg' }
      ],
      skillHerramientas: [
        { id: 1, name: 'Figma-logo', src: '../assets/Figma-logo.svg' },
        { id: 2, name: 'ClickUp-logo', src: '../assets/ClickUp-logo.svg' },
        { id: 3, name: 'Jira-Logo', src: '../assets/Jira-Logo.svg' },
        { id: 4, name: 'Visual-Studio-Code', src: '../assets/Visual-Studio-Code.svg' },
        { id: 5, name: 'github', src: '../assets/github.svg' },
        { id: 6, name: 'Git', src: '../assets/Git.svg' }
      ]
    };
  },
  methods: {
    prueba(opcion) {
      this.personal = opcion === 'personal';
      this.habilidades = opcion === 'habilidades';
      this.herramientas = opcion === 'herramientas';
    }
  }
};
</script>

<style>
.skills-content {
  min-height: 400px; /* Ajusta según sea necesario */
}

.skills-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.skill-card {
  position: relative;
  background: #25292B;
  width: 200px;
  height: 200px;
  display: grid;
  place-items: center;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  cursor: help;
}

.tooltip {
  position: absolute;
  top: -40px;
  background: #D4AF37;
  min-width: max-content;
  color: white;
  font-size: 15px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-10px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.skill-card:hover .tooltip {
  transform: translateY(0);
  opacity: 1;
}

.button-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 20px;
}

.github-icon {
  width: 100px;
  height: 100px;
}

.btn-outline {
  color: white;
  border-color: white;
}

.btn-outline:hover {
  color: white !important;
  background-color: #DB995C !important;
  border-color: white !important;
}

.btn.text-white.colorPrimary:hover {
  background-color: #35A2BD !important;
  color: white !important;
  border-color: white !important;
}

.btn-check:checked + .btn, .btn.active, .btn.show, .btn:first-child:active, :not(.btn-check) + .btn:active {
  background-color: #D97B29;
  border-color: white;
}

.btn-check:checked + .btn {
  color: white;
  border-color: white;
}
</style>
