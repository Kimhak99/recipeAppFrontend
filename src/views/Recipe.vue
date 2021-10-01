<template>
 <v-app>
    <v-container fluid>
      <v-row>
        <v-main>
          <v-container fluid style="height: 100vh">
            <v-row class="text-center">
              <v-col cols="12">
                <v-img
                  :src="require('../assets/tongue.jpg')"
                  class="my-3"
                  contain
                  height="200"
                />
              </v-col>

              <v-col class="mb-4">
                <h1 class="display-2 font-weight-bold mb-3">
                  {{ $t("welcome") }}
                </h1>

                <p class="subheading font-weight-regular">
                  Let's show off our food and share the world our recipe!
                  <br />Please join us now!
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-row>
    </v-container>
  </v-app>
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