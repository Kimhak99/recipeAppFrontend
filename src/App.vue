<template>
  <!-- <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    > -->
    <v-app>
       <v-card flat>
    <v-container fluid>
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

            <v-btn flat>
              Sign Up
            </v-btn>

            <v-btn icon>
              Log In
            </v-btn>
          </v-toolbar>
        </div>
      </v-row>
      <v-row>
         <v-content>
            <hello-world/>
          </v-content>
      </v-row>
    
        <v-footer class="pa-3" color="#B71C1C" dark>
          <v-spacer></v-spacer>
          <div>The Foodie's Tongue &nbsp; &copy; {{new Date().getFullYear()}}</div>
          <v-spacer></v-spacer>
        </v-footer>
     
    </v-container>
  </v-card>
  </v-app>
    <!-- </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app> -->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: { HelloWorld },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
