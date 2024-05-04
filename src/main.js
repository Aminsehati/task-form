import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'

import { required, email } from '@vee-validate/rules';


defineRule('required', required);
defineRule('email', email);

configure({
    validateOnInput: true,
});


const app = createApp(App)



app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);

app.use(router)

app.mount('#app')
