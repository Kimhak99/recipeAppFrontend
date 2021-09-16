<template>
  <!-- <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    > -->
       <v-card flat>
    <v-container fluid>
      <v-row class="child-flex">
        <div>
          <v-toolbar>
            <!-- <v-btn
              icon
              class="hidden-xs-only"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn> -->
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>The Avid Foodie's</v-toolbar-title>

            <v-spacer></v-spacer>
          </v-toolbar>
        </div>

        <div style="flex-basis: 20%">
          <v-toolbar dark>
            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-reply</v-icon>
            </v-btn>

            <v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-toolbar>
        </div>
      </v-row>
    </v-container>
  </v-card>
    <!-- </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app> -->
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
