import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VueQueryPlugin } from "vue-query";
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
        sets: {}
    },
})

createApp(App).use(vuetify).use(VueQueryPlugin).use(store).use(router).mount("#app");
