import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import i18n from './i18n';
import store from "./store";
import "./permission";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')

Vue.mixin({
  methods: {
    resetForm() {
      this.$nextTick(() => {
        this.$refs.form.resetValidation();
      });
    },
  }
  });