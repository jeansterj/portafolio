<template>
<div class="container-fluid my-5">

    <div class="btn-group text-white" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" :checked="personal" @click="prueba('personal')">
        <label class="btn btn-outline" for="btnradio1">PERSONALES</label>
      
        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" :checked="habilidades" @click="prueba('habilidades')">
        <label class="btn btn-outline" for="btnradio2">HABILIDADES</label>
      
        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" :checked="herramientas" @click="prueba('herramientas')">
        <label class="btn btn-outline" for="btnradio3">HERRAMIENTAS</label>
      </div>

    <div v-if="personal"  class="container text-white">
        <p class="my-5">Caracteristicas personales que me crean como profesional.</p>
        <div class="button-container my-4">
        <button class="btn text-white colorPrimary" v-for="skill in skillPersonal" :key="skill.id"> {{ skill.skill }}</button>
    </div>
    </div>

    <div v-else-if="habilidades" class="container text-white">
        <p class="my-5">Habilidades con las que he desarrollado mis diferentes proyectos.</p>

    </div>

    <div v-else-if="herramientas" class="container text-white">
        <p class="my-5">Herramientas que han permitdo mejoras en el desarrollo.</p>
    </div>
    
</div>
        
    
</template>
<script>
export default {
    data() {
        return {
            skillPersonal: [
                {id: 1, skill: 'TRABAJO EN EQUIPO'},
                {id: 2, skill: 'RESPONSABILIDAD'},
                {id: 3, skill: 'APRENDIZAJE CONTINUO'},
                {id: 4, skill: 'EMPATIA'},
                {id: 5, skill: 'INNOVACIÓN'},
                {id: 6, skill: 'ADAPTABILIDAD'}
            ],
            personal: true,
            habilidades: false,
            herramientas: false,
            skillHabilidades: [
            {id: 1, name: 'vue-logo', src:''},
            {id: 2, name: 'html-logo', src:''},
            {id: 3, name: 'css-logo', src:''},
            {id: 4, name: 'js-logo', src:''},
            {id: 5, name: 'java-logo', src:''},
            {id: 6, name: 'laravel-logo', src:''},
            {id: 6, name: 'bootstrap-logo', src:''},

            ],
            skillHerramientas: [
            {id: 1, name: 'figma-logo', src:''},
            {id: 2, name: 'clickUp-logo', src:''},
            {id: 3, name: 'jira-logo', src:''},
            {id: 4, name: 'visual-Estudio-Code-logo', src:''},
            
            ]
        }
    },
    methods:{
        prueba(opcion){
        if (opcion === 'personal') {
            this.personal = true;
            this.habilidades = false;
            this.herramientas = false;
        } else if (opcion === 'habilidades') {
            this.personal = false;
            this.habilidades = true;
            this.herramientas = false;
        } else if (opcion === 'herramientas') {
            this.personal = false;
            this.habilidades = false;
            this.herramientas = true;
        }
    }
    }
}
</script>
<style>
  .btn-outline {
    color: white;
    border-color: white;
  }

  .btn-outline:hover {
  color: white !important; 
  background-color: #DB995C !important; 
  border-color: white !important; 
}

.btn.text-white.colorPrimary:hover{
    background-color: #35A2BD !important; 
    color: white !important; 
    border-color: white !important; 

}
  
.btn-outline-primary {
  background-color: #D97B29;
  color: white; 
  border-color: white; 
}

.btn-check:checked + .btn, .btn.active, .btn.show, .btn:first-child:active, :not(.btn-check) + .btn:active {
  background-color: #D97B29;
  border-color: white; 
}

.btn-check:checked + .btn {
  color: white;
  border-color: white;
}


.button-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 20px; 
  }


</style>