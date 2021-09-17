<template>
  <v-app-bar
    id="app-bar"
    app
    color="transparent"
    elevation="10"
    absolute
    height="75"
  >
      <v-row class="child-flex">
        <div>
          <v-toolbar color="#B71C1C" dark>
            <!-- <v-btn
              icon
              class="hidden-xs-only"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn> -->
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>The Foodie's Tongue</v-toolbar-title>

            <v-spacer></v-spacer>
          </v-toolbar>
        </div>

        <div style="flex-basis: 20%">
          <v-toolbar dark>
            <v-spacer></v-spacer>

            <v-btn>
              Sign Up
            </v-btn>

            <v-btn icon>
              Log In
            </v-btn>
          </v-toolbar>
        </div>
      </v-row>
 

  </v-app-bar>
</template>

<script>

export default {
  name: 'AppBar',

  data: () => ({
    //
  }),
};
</script>
