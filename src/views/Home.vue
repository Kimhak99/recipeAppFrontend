<template>  <v-app>
 <v-container fluid>
   
        <AppBar/>
        <v-row>
           <v-main>
             <v-container fluid style="height: 100vh;">
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
          Welcome to The Foodie's Tongue
        </h1>

        <p class="subheading font-weight-regular">
          Let's show off our food and share the world our recipe!
          <br>Please join us now!
        </p>
      </v-col>
    </v-row>
  </v-container> 
            </v-main>
        </v-row>
      
          <v-footer class="pa-3" color="#B71C1C" dark fixed>
            <v-spacer></v-spacer>
            <div>The Foodie's Tongue &nbsp; &copy; {{new Date().getFullYear()}}</div>
            <v-spacer></v-spacer>
          </v-footer>
       
      </v-container>  </v-app>
</template>

<script>

   import AppBar from '../views/AppBar'

  export default {
  components: { AppBar },
    name: 'Home',

   
  }
</script>
