<template>
      <v-navigation-drawer
        permanent
        expand-on-hover
        id="core-navigation-drawer"
        dark
        mobile-breakpoint="1280"
        app
        v-show="showSidebar"
        width="200"
      >
        <v-list>
          <v-list-item class="px-2 mt-16">
            <v-list-item-avatar>
              <v-img :src="require('../../assets/crown.png')"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content @click="$router.push({ name: 'UserProfile'}).catch(() => {})">
              <v-list-item-title class="text-h6">
                Sandra Adams
              </v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          dense
        >
          <v-list-item @click="$router.push({ name: 'Recipe'}).catch(() => {})">
            <v-list-item-icon>
              <v-icon>mdi-book-check-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{$t("Recipe")}}</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="$store.getters.userInfo.is_admin" @click="$router.push({ name: 'Category'}).catch(() => {})">
            <v-list-item-icon>
              <v-icon>mdi-table-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{$t("Category")}}</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="$store.getters.userInfo.is_admin" @click="$router.push({ name: 'User'}).catch(() => {})">
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{$t("User")}}</v-list-item-title>
          </v-list-item> 
          <v-list-item @click="$router.push({ name: 'Signin'}).catch(() => {})">
            <v-list-item-icon>
              <v-icon>mdi-logout-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{$t("signout")}}</v-list-item-title>
          </v-list-item> 
        </v-list>
      </v-navigation-drawer>
</template>

<script>
  export default {
    name: "Sidebar",
    data () {
      return {
        showSidebar: true
      }
    },//your structure is not dynamic so no point in using dynamic function
  }
</script>
