<template>
  <v-app-bar fixed color="black" elevate-on-scroll dark app>
    <v-btn @click="handleDrawer" icon v-if="$vuetify.breakpoint.xs">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-toolbar-title class="titleStyle">{{ $t("app_name") }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      v-if="!this.userInfo._id"
      @click="$router.push({ path: '/signin' })"
      class="mr-5 test"
    >
      {{ $t("signin") }}
    </v-btn>

    <v-btn v-if="!this.userInfo._id" @click="$router.push({ path: '/signup' })">
      {{ $t("signup") }}
    </v-btn>
    <span
      v-if="this.userInfo._id"
      class="px-3"
      style="color: red; text-transform: uppercase; font-weight: bold"
      >{{ this.userInfo.username }}</span
    >
    <v-badge
      v-if="this.userInfo._id"
      bordered
      bottom
      color="green"
      dot
      offset-x="10"
      offset-y="10"
    >
      <v-avatar
        size="40"
        style="cursor: pointer"
        @click="
          $router.push({ path: '/userProfile/' + userInfo._id }).catch(() => {})
        "
      >
        <!-- <v-img :src="require('../../assets/pumpkin.jpg')" ></v-img> -->
        <!-- http://localhost:5000/file/askfjklasjfsdf.png -->
        <v-img :src="checkAvatar(userInfo.profile_image)"></v-img>
      </v-avatar>
    </v-badge>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "Appbar",
  data() {
    return {};
  },
  computed: {
    ...mapState(["drawer"]),
    ...mapGetters(["userInfo"]),
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
