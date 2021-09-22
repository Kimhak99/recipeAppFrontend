
<template>
  <v-card flat class="test">
    <v-container fluid>
      <v-row class="child-flex">
        <div>
          <v-toolbar color="#B71C1C" dark>
            <!-- <v-btn
              icon
              class="ml-8"
            >
              <v-app-bar-nav-icon @click="$router.push({ name: 'Home'}).catch(() => {})"></v-app-bar-nav-icon>
            </v-btn> -->
            <v-toolbar-side-icon @click="$router.push({ name: 'Home'}).catch(() => {})">
            <v-img class="mr-3" src="@/assets/tongue-circle.png" height="50px" width="50px"> 
            </v-img>
          </v-toolbar-side-icon>
            <v-toolbar-title>{{$t("welcome")}}</v-toolbar-title>
          </v-toolbar>
        </div>

        <div style="flex-basis: 20%"> 
          <v-toolbar dark>
            <v-spacer></v-spacer>

            <v-btn @click="$router.push({ name: 'Signin' }).catch(() => {})">
              {{$t('signin')}}
            </v-btn>

            <v-btn @click="$router.push({ name: 'Signup' }).catch(() => {})">
               {{$t('signup')}}
            </v-btn>
            <!-- <v-btn class="mx-2" fab color="white" outlined> -->
              <i class="fas fa-sign-out-alt mx-4" style='font-size:24px' @click="$router.push({ name: 'Signin' }).catch(() => {})"></i>
            <!-- </v-btn> -->
          </v-toolbar>
        </div>
      </v-row>
    </v-container>
  </v-card>
</template>


<style>
  .test {
/* z-index: 999999 !important; */
z-index: 1;
}
  
</style>