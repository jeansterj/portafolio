<template>
    <div class="d-none">
        <div>
        <h1>¿Algun proyecto en mente?</h1>
        <h1>Contacta y lo hacemos realidad</h1>

        <p>Ponte en contacto y déjame saber cómo puedo ayudarte. Rellena el formulario y me pondré en contacto lo antes posible.</p>

        <font-awesome-icon icon="fa-light fa-envelope" />
        <p>jdasilvao2223@politecnics.barcelona</p>
        <font-awesome-icon :icon="['fas', 'phone']" />
        <p>+34-658109985</p>
        </div>
        <div>

            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <p class="card-text"></p>
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                      </div>
                      <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                      </div>
                      <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                  
                </div>
              </div>

        </div>
    </div>
</template>
<script>
export default {
    
}
</script>