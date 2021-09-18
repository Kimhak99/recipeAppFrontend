<template>  
  <v-app>
    <v-container fluid>
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
    </v-container>  
  </v-app>
</template>

<script>

 import UserDashboardLayout from '../layouts/UserDashboardLayout'

  export default {
  // components: { UserDashboardLayout },
    name: 'Home',
    created(){
      this.$emit(`update:layout`, UserDashboardLayout);
    }

   
  }
</script>
