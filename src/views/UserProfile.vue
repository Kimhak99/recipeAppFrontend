<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card class="pa-0" elevation="2">
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="2" class="pa-0">
                <v-row>
                  <v-col cols="12">
                    <v-img
                      :src="require('../assets/salad.jpg')"
                      width="100%"
                      height="250"
                    ></v-img>
                  </v-col>
                  <v-col cols="12" style="background-color: blue">
                    side bar for user profile
                  </v-col>
                </v-row>
              </v-col>

              <v-col
                cols="12"
                sm="10"
                class="pa-0"
                style="background-color: red"
              >
                <v-row>
                  <v-col cols="12">
                    <div style="height: 250px">
                      <v-img
                        :src="require('../assets/foodcover.jpg')"
                        height="180"
                        class="grey darken-4"
                        cover
                      ></v-img>
                      <span style="height: 70px;">this is user profile</span>
                    </div>
                  </v-col>
                  <v-col cols="12" style="background-color: yellow">
                    this is for displaying recipe list
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserDashboardLayout from "../layouts/UserDashboardLayout";

export default {
  // components: { UserDashboardLayout },
  name: "UserProfile",
  created() {
    this.$emit(`update:layout`, UserDashboardLayout);
  },
};
</script>
<style>
h1 {
  color: #b71c1c;
}
</style>
