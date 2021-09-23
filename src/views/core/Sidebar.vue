<template>
      <!-- <v-navigation-drawer
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
      </v-navigation-drawer> -->
      <div>
        <nav>
          <v-navigation-drawer dark app class="black" width="100">
            <div class="text-center mt-5">
              <v-btn fab color="white" x-large>
                <v-icon color="black">fab fa-asymmetrik</v-icon>
              </v-btn>
            </div>
             <v-list flat class="mt-5">
                <v-list-item-group v-model="selectedItem" color="black">
                  <v-list-item v-for="(item, i) in items" :key="i" active-class="border" 
                  :ripple="false" class="ml-2 my-3" :to="item.route">
                  <b></b>
                  <b></b>
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
              <div style="position: abolute; bottom: 20px; margin-left: auto; margin-right: auto; left:0; right:0;
              text-align: center;">
                <v-btn text>
                  <v-icon>fas fa-sign-out-alt</v-icon>
                </v-btn>
              </div>
          </v-navigation-drawer>
        </nav>
      </div>
</template>

<script>
  export default {
    name: "Sidebar",
    data () {
      return {
        // showSidebar: true,
        selectedItem:0,
        drawer: null,
        items: [
          {icon: 'fas fa-home', route: '/' },
          {icon: 'fas fa-utensils', route: '/Recipe' },
          {icon: 'fas fa-grip-horizontal', route: '/Category'},
          {icon: 'fas fa-users', route: '/User'},       
        ]

      }
    },//your structure is not dynamic so no point in using dynamic function
  }
</script>
<style>
 /* #core-navigation-drawer{
   z-index: 0;
 } */
 .border {
   background: #fff;
   border-top-left-radius: 30px;
   border-bottom-left-radius: 30px;
   text-decoration: none;
 }
 .border b:nth-child(1){
   position: absolute;
   top: -20px;
   height: 20px;
   widows: 83%;
   background: #fff;
   display: none;
 }
 .border b:nth-child(1)::before{
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   border-bottom-right-radius: 20px;
   background: black;
 }
 .border b:nth-child(2){
   position: absolute;
   bottom: -20px;
   height: 20px;
   widows: 83%;
   background: none;
 }
 .border b:nth-child(2)::before{
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
  height: 100%;
   border-bottom-right-radius: 20px;
   background: black;
 }
 .border b:nth-child(1),
 .border b:nth-child(2){
   display: block;
 }

</style>