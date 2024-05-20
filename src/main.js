import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { createI18n } from 'vue-i18n';
import translations from '../translations.json';
import App from './App.vue';

// Agregar los iconos que necesitas a la biblioteca
library.add(fas);

// Configuración de vue-i18n
const i18n = createI18n({
  locale: 'es', // idioma por defecto
  fallbackLocale: 'en', // idioma de respaldo
  messages: translations, // mensajes de traducción
});

// Crear la aplicación Vue
const app = createApp(App);

// Usar i18n en la aplicación
app.use(i18n);

// Registrar el componente `font-awesome-icon` globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Montar la aplicación
app.mount('#app');

