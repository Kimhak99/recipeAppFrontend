<template>
  <div>
    <nav>
      <v-navigation-drawer
        dark
        app
        class="black"
        mobile-breakpoint="600"
        width="100"
        v-model="drawer"
      >
        <div class="text-center mt-5">
          <v-btn fab color="white" x-large>
            <v-icon color="black">fab fa-asymmetrik</v-icon>
          </v-btn>
        </div>
        <v-list flat class="mt-5">
          <v-list-item-group v-model="selectedItem" color="black">
            <!-- <v-list-item
              v-for="(item, i) in items"
              :key="i"
              active-class="border"
              :ripple="false"
              class="ml-2 my-3"
              :to="item.route"
            >
              <b></b>
              <b></b>
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
            </v-list-item> -->

            <v-list-item
              @click="refresh"
              active-class="border"
              :ripple="false"
              class="ml-2 my-3"
            >
              <b></b>
              <b></b>
              <v-list-item-icon>
                <v-icon>fas fa-home</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-list-item
              @click="$router.push('/recipe/' + 0).catch(() => {})"
              active-class="border"
              :ripple="false"
              class="ml-2 my-3"
            >
              <b></b>
              <b></b>
              <v-list-item-icon>
                <v-icon>fas fa-utensils</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-list-item
              @click="$router.push('/category').catch(() => {})"
              v-if="this.userInfo.is_admin"
              active-class="border"
              :ripple="false"
              class="ml-2 my-3"
            >
              <b></b>
              <b></b>
              <v-list-item-icon>
                <v-icon>fas fa-grip-horizontal</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-list-item
              @click="$router.push('/user').catch(() => {})"
              v-if="this.userInfo.is_admin"
              active-class="border"
              :ripple="false"
              class="ml-2 my-3"
            >
              <b></b>
              <b></b>
              <v-list-item-icon>
                <v-icon>fas fa-user</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <div
          style="
            position: abolute;
            bottom: 20px;
            margin-left: auto;
            margin-right: auto;
            left: 0;
            right: 0;
            text-align: center;
          "
        >
          <v-btn text>
            <v-icon @click="logout">fas fa-sign-out-alt</v-icon>
          </v-btn>
        </div>
      </v-navigation-drawer>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Sidebar",
  data() {
    return {
      // showSidebar: true,
      selectedItem: 0,
      items: [
        { icon: "fas fa-home", route: "/home" },
        { icon: "fas fa-utensils", route: "/recipe/" + 0 },
        { icon: "fas fa-grip-horizontal", route: "/category" },
        { icon: "fas fa-users", route: "/user" },
      ],
      //remember that this is fixed item, so if u happened to change in index route
      //need to change here too
    };
  },
  methods: {
    refresh() {
      // this.$router.push("/home");
      this.$route.matched.some(({ name }) => name === "Home")
        ? window.location.reload()
        : this.$router.push("/home").catch(() => {});
    },
    logout() {
      this.$store.dispatch("LogOut").then(() => {
        this.$router.push({ path: "/signin" });
      });
    },
  },
  computed: {
    ...mapGetters(["userInfo"]),
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit("SET_DRAWER", val);
      },
    },
  },
};
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
.border b:nth-child(1) {
  position: absolute;
  top: -20px;
  height: 20px;
  widows: 83%;
  background: #fff;
  display: none;
}
.border b:nth-child(1)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 20px;
  background: black;
}
.border b:nth-child(2) {
  position: absolute;
  bottom: -20px;
  height: 20px;
  widows: 83%;
  background: none;
}
.border b:nth-child(2)::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom-right-radius: 20px;
  background: black;
}
.border b:nth-child(1),
.border b:nth-child(2) {
  display: block;
}
</style>