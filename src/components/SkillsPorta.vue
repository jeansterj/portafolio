<template>
<div class="d-none">

    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
        <label class="btn btn-outline-primary" for="btnradio1">PERSONALES</label>
      
        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio2">HABILIDADES</label>
      
        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
        <label class="btn btn-outline-primary" for="btnradio3">HERRAMIENTAS</label>
      </div>

    <div >
        <p>Caracteristicas personales que me crean como profesional.</p>

        <button v-for="skill in skillPersonal" :key="skill.id"> {{ skill.skill }}</button>
    </div>

    <div>
        <p>Habilidades con las que he desarrollado mis diferentes proyectos.</p>

    </div>

    <div>
        <p>Herramientas que han permitdo mejoras en el desarrollo.</p>
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
            ]
        }
    },
}
</script>