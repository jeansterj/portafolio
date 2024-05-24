<template >
  <div class=" d-flex justify-content-around my-5 container pt-5 pb-4" >
    <div class="text-start me-3">
      <div class="text-white">
        <div class="my-3 me-3">
          <h1>{{$t('contacMe') }}</h1>
          <h1> {{$t('contacMe1') }}</h1>

        </div>
        <div class="my-5 me-3">
          <h3 class="my-3">{{$t('contacMe2') }} </h3>
          <h3> {{$t('contacMe3') }}</h3>
        </div>

        <div class="my-5 me-3">
          <h4><font-awesome-icon :icon="['fas', 'envelope']" />{{$t('Correo') }}</h4>
          <p>jdasilvao2223@politecnics.barcelona</p>
        </div>

        <div class="my-5 me-3">
          <h4><font-awesome-icon :icon="['fas', 'phone']" />{{$t('Telefono') }} </h4>
          <p>+34-658109985</p>
        </div>

      </div>

    </div>

    <div class="col-sm-5 my-4 mb-sm-0 ">

      <div class="card colorFormCard container cardPerso">
        <div class="card-body text-white ">
          <p class="card-text"></p>
          <form>

            <div class="mb-4 text-start">
              <label for="nombre" class="form-label "> {{$t('Nombre') }}</label>
              <input type="text" class="form-control custom-input" id="nombre" placeholder="Juan Cabrera" required>
            </div>
            <div class="mb-4 text-start">
              <label for="email" class="form-label">{{$t('Correo') }} </label>
              <input type="email" class="form-control custom-input" id="email" placeholder="name@example.com"
                aria-describedby="emailHelp" required>
            </div>
            <div class="mb-4 text-start">
              <label for="phone" class="form-label">{{$t('Telefono') }} </label>
              <input type="text" class="form-control custom-input" id="phone" placeholder="658XXXXXX" required>
            </div>
            <div class="mb-5 text-start">
              <label for="mensaje" class="form-label">{{$t('Mensaje') }} </label>
              <textarea class="form-control custom-input" id="mensaje" rows="3" placeholder="Redacta el mensaje"
                required></textarea>
            </div>
            <div class="d-grid gap-2 my-4">
              <button type="submit" class="btn colorAccion text-center text-white">{{$t('ENVIAR') }} </button>
            </div>
          </form>

        </div>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.colorInputs();
  },
  methods: {

    colorInputs() {

      const inputs = document.querySelectorAll('.custom-input');

      inputs.forEach(input => {
        input.addEventListener('input', () => {
          if (input.value) {
            input.classList.add('filled');
          } else {
            input.classList.remove('filled');
          }
        });
      });

    }

  },


}
</script>

<style>
.form-control {
  background-color: #25292B
}

.colorFormCard {
  background-color: #3B4245 !important;
  /* Color ligeramente más claro que el fondo principal */
  border-radius: 20px;
  /* Ajuste de bordes redondeados */
  /* Sombra para resaltar la tarjeta */
box-shadow: 
  5px 5px 0px rgba(59, 66, 69, 0.56),
  10px 10px 5px rgba(45, 49, 51, 0.56),
  15px 15px 10px rgba(37, 41, 43, 0.56),
  20px 20px 15px rgba(33, 37, 39, 0.56),
  25px 25px 20px rgba(30, 33, 35, 0.56);
}

.cardPerso {
  background-color: transparent;
}

.colorFormCard .custom-input::placeholder {
  color: #bfbfbf;
}

.colorFormCard .custom-input:focus {
  color: #D97B29;
  background-color: #25292B;
  border: solid #D97B29;
  box-shadow: 0 0 0 1px #D97B29;
}

.colorFormCard .custom-input.filled {
  color: #D97B29;
}

.btn.colorAccion.text-center.text-white:hover {
  background-color: #D4AF37;
}
</style>