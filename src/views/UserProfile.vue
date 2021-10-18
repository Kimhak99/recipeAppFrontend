<template>
  <v-container fluid pa-0>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-0" elevation="2">
          <v-card-text class="pa-0">
            <v-row no-gutters>
              <v-col cols="12" md="2" class="pa-0">
                <v-row no-gutters>
                  <v-col cols="12" style="background-color: blue">
                    <v-img
                      :src="require('../assets/salad.jpg')"
                      width="100%"
                      height="250"
                    ></v-img>
                  </v-col>
                  <v-col
                    cols="12"
                    style="background-color: silver"
                    class="py-4 text-center"
                  >
                    <span
                      style="text-transform: uppercase; font-weight: bold"
                      >{{ this.userInfo.username }}</span
                    >
                  </v-col>
                  <v-col cols="12">
                    <v-card class="mx-auto" max-width="100%" tile>
                      <v-list dense>
                        <v-subheader
                          style="font-weight: bold; font-size: 14px"
                          >{{ $t("setting") }}</v-subheader
                        >
                        <v-list-item-group color="primary">
                          <v-list-item @click="handleEdit">
                            <v-list-item-icon>
                              <v-icon>mdi-account-edit</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              <v-list-item-title>{{
                                $t("editProfile")
                              }}</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item @click="$router.push({ path: '/home' })">
                            <v-list-item-icon>
                              <v-icon>mdi-account-key</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              <v-list-item-title>{{
                                $t("resetPwd")
                              }}</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item @click="$router.push({ path: '/home' })">
                            <v-list-item-icon>
                              <v-icon>mdi-delete-alert</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              <v-list-item-title>{{
                                $t("deleteAccount")
                              }}</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-card>
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="12" md="10" class="pa-0">
                <v-row no-gutters>
                  <v-col cols="12">
                    <div style="height: 250px">
                      <v-img
                        :src="require('../assets/foodcover.jpg')"
                        height="160"
                        class="grey darken-4"
                        cover
                      ></v-img>
                      <v-row>
                        <v-col cols="10" md="6" class="pt-2 ml-6">
                          <v-text-field
                            label="Search"
                            hint="Empty input will clear filter"
                            persistent-hint
                            clearable
                          />
                        </v-col>
                        <v-col
                          cols="1"
                          md="1"
                          align-self="center"
                          :class="
                            $vuetify.breakpoint.mdAndDown
                              ? 'd-flex justify-end pr-0'
                              : ''
                          "
                        >
                          <v-btn
                            fab
                            small
                            color="primary"
                            @click="handleSearch(undefined)"
                          >
                            <v-icon>mdi-magnify</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </div>
                  </v-col>
                  <v-col cols="12" class="py-4">
                    <h3
                      class="text-center"
                      style="text-transform: uppercase; font-weight: bold"
                    >
                      {{ this.userInfo.username + "'s" }} Recipe List
                    </h3>

                    <v-data-table
                      :headers="headers"
                      :items="datas"
                      class="elevation-0 mt-4"
                      :loading="tableLoading"
                      mobile-breakpoint="600"
                    >
                    </v-data-table>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <UserCRUD :user="obj" :dialog.sync="dialog" @handleData="handleUser" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import UserDashboardLayout from "../layouts/UserDashboardLayout";

// const newObj = () => {
//   return {
//     id: "",
//     recipe_title: "",
//     images: [],
//     ingredients: [],
//     cooking_steps: [],
//     description: "",
//     prep_time: "",
//     cooking_time: "",
//     category_id: "",
//     comments: [],
//     user_id: "",
//     num_of_like: 0,
//     num_of_dislike: 0,
//     is_active: true,
//   }
// };
const newObj = () => {
  return {
    id: "1111",
    firstname: "hello",
    lastname: "hi",
    password: "",
    confirmPassword: "",
    email: "",
    profile_image: "",
    is_admin: false,
    is_active: true,
  };
};

export default {
  // components: { UserDashboardLayout },
  name: "UserProfile",
  components: {
    UserCRUD: () => import("@/components/UserCRUD"),
  },
  created() {
    this.$emit(`update:layout`, UserDashboardLayout);
  },
  data: () => ({
    dialog: false,
    obj: newObj(),
    tableLoading: false,
    datas: [],
    headers: [
      {
        text: "ID",
        align: "center",
        sortable: false,
        value: "itemNo",
        width: "100px",
      },
      {
        text: "Image",
        align: "start",
        sortable: false,
        value: "image",
      },
      {
        text: "Recipe Title",
        align: "start",
        sortable: false,
        value: "recipe_title",
        width: "150px",
      },
      {
        text: "Category",
        align: "start",
        sortable: false,
        value: "category_id",
      },
      {
        text: "Created Date",
        align: "start",
        sortable: false,
        value: "createdAt",
      },
      {
        text: "Updated Date",
        align: "start",
        sortable: false,
        value: "updatedAt",
      },
      {
        text: "Action",
        align: "center",
        sortable: false,
        width: "100",
        value: "actions",
      },
    ],
  }),
  methods: {
    handleEdit() {
      this.dialog = true;
      this.obj = this.userInfo;
    },
    handleUser() {},
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
};
</script>
<style>
h1 {
  color: #b71c1c;
}
</style>
