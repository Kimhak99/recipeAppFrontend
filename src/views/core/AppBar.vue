

<template>
  <v-app-bar fixed color="black" elevate-on-scroll dark app>
    <v-btn @click="handleDrawer" icon v-if="$vuetify.breakpoint.xs">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-toolbar-title class="titleStyle">{{ $t("app_name") }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      @click="$router.push({ name: 'Signin' }).catch(() => {})"
      class="mr-5 test"
    >
      {{ $t("signin") }}
    </v-btn>

    <v-btn @click="$router.push({ name: 'Signup' }).catch(() => {})">
      {{ $t("signup") }}
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Appbar",
  data() {
    return {};
  },
  computed: {
    ...mapState(["drawer"]),
  },
  methods: {
    handleDrawer() {
      this.$store.dispatch("SetDrawer", !this.drawer);
    },
  },
};
</script>

<style>
.test {
  border-radius: 5px;
  background-color: green;
  color: pink;
}
</style>