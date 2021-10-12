import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import i18n from "./i18n";
import store from "./store";
import "./permission";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import "@/permission";
import basicConfig from "./utils/basicConfig";
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";

Vue.use(VueViewer);
VueViewer.setDefaults({
  movable: false,
});

Vue.config.productionTip = false;

Vue.mixin({
  methods: {
    resetForm() {
      this.$nextTick(() => {
        this.$refs.form.resetValidation();
      });
    },
    checkAvatar(item) {
      if (!item) return basicConfig.blank_profile_img;

      return `${basicConfig.file_url}${item}`;
    },
    checkFileSize(data) {
      if (Array.isArray(data)) {
        const temp = data.filter(p => {
          let size = p.size / 1024 / 1024;

          return size > 5 ? true : false;
        });

        return temp;
      } else {
        let size = data.size / 1024 / 1024;

        return size > 5 ? true : false;
      }
    },
    checkFileType(file) {
      const fileType = ["application/pdf", "image/png", "image/jpeg"];

      if (Array.isArray(file)) {
        const temp = file.filter(p => !fileType.includes(p.type));

        return temp.length == 0 ? false : true;
      } else {
        return !fileType.includes(file.type);
      }
    },
  },
});

Vue.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
  position: POSITION.TOP_CENTER,
  timeout: 3000,
});

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

// Styles
// import '../../styles/main.sass'

// Locale
// import { en } from '../../locale'

//let me give you a tour of typescript and how to notice whether it ts or js

//this preset is a type of VuetifyPreset, JS doesnt accpet type
//many js libraries nowadaysm, either keep or switch to TS, so u need to make sure what work, if u dont need any of the field inside the object, just remove them, leave only
//the one u needed
export const preset = {
  breakpoint: {
    scrollBarWidth: 16,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920,
    },
  },
  icons: {
    iconfont: "mdi",
    values: {},
  },
  // lang: {
  //   current: 'en',
  //   locales: { en },
  //   t: undefined as any,
  // },
  rtl: false,
  theme: {
    dark: false,
    default: "light",
    disable: false,
    options: {
      cspNonce: undefined,
      customProperties: undefined,
      minifyTheme: undefined,
      themeCache: undefined,
    },
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#424242",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00",
      },
      dark: {
        primary: "#2196F3",
        secondary: "#424242",
        accent: "#FF4081",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FB8C00",
      },
    },
  },
};
