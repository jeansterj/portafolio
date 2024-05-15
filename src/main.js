import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';

// Agregar los iconos que necesitas a la biblioteca
library.add(fas);

const app = createApp(App);

// Registrar el componente `font-awesome-icon` para que esté disponible en todos los componentes Vue
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
