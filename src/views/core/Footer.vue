<template>
  <!-- <v-footer id="footer">
     <v-container> -->
      <!--<v-row align="center" no-gutters>
        <v-spacer class="hidden-sm-and-down" />

        <v-col cols="12" md="auto">
          <div class="body-1 font-weight-light pt-6 pt-md-0 text-center">
            <label>&copy; {{ currentYear }} - A9 Online</label>
          </div>
        </v-col>
      </v-row> -->
      <v-footer class="pa-3" color="black" dark fixed>
        <v-spacer></v-spacer>
        <div>{{$t("app_name")}} &nbsp; &copy; {{new Date().getFullYear()}}</div>
        <v-spacer></v-spacer>
      </v-footer>
    <!-- </v-container>
  </v-footer> -->
</template>

<script>
// import moment from "moment";

export default {
  name: "Footer",
//   data: () => ({
//     currentYear: moment().format("YYYY"),
//   }),
};
</script>

