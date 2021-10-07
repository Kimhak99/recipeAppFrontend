<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-btn
          color="green"
          elevation="2"
          @click="$router.push({ path: '/home' })"
        >
          <v-icon left> mdi-keyboard-return </v-icon>
          {{ $t("home") }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Recipe",
};
</script>
<style>
h1 {
  color: #b71c1c;
  height: 120vh;
}
</style>