import './core/CatchError.ts';
import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import {key, store} from "./store";

export const app = createApp(App)
    .use(router)
    .use(store, key)
    .mount('#app')

