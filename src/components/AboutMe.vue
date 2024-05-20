<template>
    <div id="conoceme">
        <div class="my-5 pt-4 pb-3">
            <div class="d-flex flex-column flex-md-row justify-content-around align-items-center container">
                <div class="mb-3 mb-md-0">
                    <img src="../assets/jeanPrueba.svg" alt="jeanPhoto" class="img-fluid">
                </div>
        
                <div class="text-white text-center text-md-start">
                    <p class="my-3">¡Hola! Soy Jean Paul, un desarrollador web, con un sólido compromiso de mejorar
                        constantemente mis habilidades en este ámbito.</p>
                    <p class="my-3">Mi pasión radica en crear interfaces de usuario atractivas y funcionales que mejoren la
                        experiencia del usuario.</p>
                    <p class="my-3">Estoy dedicado a explorar nuevas tecnologías y metodologías para mantenerme al día con las
                        tendencias del desarrollo frontend y ofrecer resultados de calidad.</p>
        
                    <div class="my-4 text-center">
                        <button class="btn colorSecond mx-2">
                            <a href="#contacto" class="text-white nunito">CONTACTAME</a>
                        </button>
                        <button class="btn colorAccion mx-2 nunito">DESCARGAR CURRICULUM</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
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

.nunito{
    font-family: 'Nunito', sans-serif;

}
</style>
