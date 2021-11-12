<template>
  <v-main>
    <router-view style="padding: 20px 20px 70px 20px" />
  </v-main>
</template>

<script>
export default {
  name: "IView",

  components: {
    // Footer: () => import("./Footer"),
  },
};
</script>
