

<template>
  <!-- <v-card class="overflow-hidden"> -->
    <v-app-bar
      absolute
      color="black"
      dark
    >
    <!-- <v-img
        class="ml-16"
        src="@/assets/tongue-circle.png"
        max-height="50"
        max-width="50"
         @click="$router.push({ name: 'Home'}).catch(() => {})"
        contain
      ></v-img> -->
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title class="titleStyle">{{$t("app_name")}}</v-toolbar-title>

      <v-spacer></v-spacer>

              
             <v-btn @click="$router.push({ name: 'Signin' }).catch(() => {})" class="mr-5 test">
               {{$t('signin')}}
             </v-btn>

            <v-btn @click="$router.push({ name: 'Signup' }).catch(() => {})">
                {{$t('signup')}}
             </v-btn>    
    </v-app-bar>
    <!-- <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 1500px;">
      </v-container>
    </v-sheet> -->
  <!-- </v-card> -->
</template>
<style>
  .test {
/* z-index: 999999 !important; */
border-radius: 5px;
background-color: green;
color: pink;
}
.titleStyle{
  margin-left: 7%;
}
  
</style>