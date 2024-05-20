<template>
    <div id="conoceme">
        <div class="my-5 pt-4 pb-3">
            <div class="d-flex flex-column flex-md-row justify-content-around align-items-center container">
                <div class="mb-3 mb-md-0">
                    <img src="../assets/jeanPrueba.svg" alt="jeanPhoto" class="img-fluid">
                </div>
        
                <div class="text-white text-center text-md-start">
                    <p class="my-3">{{ $t('CONTACTO-PARRAFO1') }}</p>
                    <p class="my-3">{{ $t('CONTACTO-PARRAFO2') }}</p>
                    <p class="my-3">{{ $t('CONTACTO-PARRAFO3') }}</p>
        
                    <div class="my-4 text-center">
                        <button class="btn colorSecond mx-2">
                            <a href="#contacto" class="text-white nunito">{{$t('CONTACTO') }}</a>
                        </button>
                        <button class="btn colorAccion mx-2 nunito">{{ $t('DESCARGAR') }}</button>
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
