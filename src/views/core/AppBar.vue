
<template>
  <v-card flat>
    <v-container fluid>
      <v-row class="child-flex">
        <div ml-50>
          <v-toolbar color="#B71C1C" dark>
            <v-btn
              icon
              class="hidden-xs-only"
            >
              <v-app-bar-nav-icon @click="$router.push({ name: 'Home'}).catch(() => {})"></v-app-bar-nav-icon>
            </v-btn>

            <v-toolbar-title>The Foodie's Tongue</v-toolbar-title>
          </v-toolbar>
        </div>

        <div style="flex-basis: 20%">
          <v-toolbar dark>
            <v-spacer></v-spacer>

            <v-btn @click="$router.push({ name: 'Signup' }).catch(() => {})">
              Signup
            </v-btn>

            <v-btn @click="$router.push({ name: 'Login' }).catch(() => {})">
              Login
            </v-btn>
          </v-toolbar>
        </div>
      </v-row>
    </v-container>
  </v-card>
</template>