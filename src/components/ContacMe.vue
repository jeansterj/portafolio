<template>
    <div class="d-flex justify-content-around my-5 container">
      <div class="text-start">
        <div class="text-white">
          <h1>¿Algun proyecto en mente?</h1>
          <h1>Contacta y lo hacemos realidad</h1>
  
          <p>Ponte en contacto y déjame saber cómo puedo ayudarte.</p> 
          <p>Rellena el formulario y me pondré en contacto lo antes posible.</p>
  
          <div>
            <h4><font-awesome-icon :icon="['fas', 'envelope']" /> Correo</h4>
            <p>jdasilvao2223@politecnics.barcelona</p>
          </div>
          
          <div>
            <h4><font-awesome-icon :icon="['fas', 'phone']" /> Telefono</h4>
            <p>+34-658109985</p>
          </div>
          
          </div>

      </div>
       
        <div class="col-sm-5 mb-4 mb-sm-0 ">

            <div class="card colorFormCard container cardPerso">
                <div class="card-body text-white ">
                  <p class="card-text"></p>
                  <form>
                   
                    <div class="mb-4 text-start">
                      <label for="nombre" class="form-label ">Nombre</label>
                      <input type="text" class="form-control custom-input" id="nombre" placeholder="Juan Cabrera" required>
                    </div>
                    <div class="mb-4 text-start">
                      <label for="email" class="form-label">Correo</label>
                      <input type="email" class="form-control custom-input" id="email" placeholder="name@example.com" aria-describedby="emailHelp" required>
                    </div>
                      <div class="mb-4 text-start">
                        <label for="phone" class="form-label">Telefono</label>
                        <input type="text" class="form-control custom-input" id="phone" placeholder="658XXXXXX" required>
                      </div>
                      <div class="mb-5 text-start">
                        <label for="mensaje" class="form-label">Mensaje</label>
                        <textarea class="form-control custom-input" id="mensaje" rows="3" placeholder="Redacta el mensaje" required></textarea>
                      </div>
                      <div class="d-grid gap-2 my-4">
                        <button type="submit" class="btn btn-light text-center">ENVIAR</button>
                      </div>
                  </form>
                  
                </div>
              </div>

        </div>
    </div>
</template>
<script>
export default {
  mounted(){
    this.colorInputs();
  },
  methods:{

    colorInputs(){

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

<style >

.form-control{
  background-color: #25292B
}

.colorFormCard {
  background-color: #3B4245 !important; /* Color ligeramente más claro que el fondo principal */
  border-radius: 20px; /* Ajuste de bordes redondeados */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8); /* Sombra para resaltar la tarjeta */
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

</style>