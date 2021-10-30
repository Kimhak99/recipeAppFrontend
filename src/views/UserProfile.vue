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
                      :src="checkAvatar(userInfo.profile_image)"
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
                      <!-- <v-card-title>
                        <v-icon large color="#b71c1c1"> mdi-cog </v-icon
                        ><span class="ml-2" style="font-weight: bold">
                          {{ $t("setting") }}
                        </span>
                      </v-card-title> -->
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
                          <v-list-item @click="handleResetDialog">
                            <v-list-item-icon>
                              <v-icon>mdi-account-key</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              <v-list-item-title>{{
                                $t("resetPwd")
                              }}</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item @click.stop="handleDeleteAccount()">
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
                        <v-col cols="10" md="6" class="pt-4 ml-6">
                          <v-text-field
                            label="Search"
                            v-model="search.keyword"
                            @click:clear="handleSearch('')"
                            @keyup.enter="handleSearch(undefined)"
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
                      :items="recipeDatas"
                      class="elevation-0 mt-4"
                      :loading="tableLoading"
                      mobile-breakpoint="600"
                    >
                      <template v-slot:[`item.image`]="{ item }">
                        <v-img
                          :src="checkAvatar(item.images[0])"
                          width="70px"
                          height="70px"
                          style="margin: 10px; border-radius: 50px"
                        />
                      </template>
                      <template v-slot:[`item.updatedAt`]="{ item }">
                        {{
                          item.createdAt === item.updatedAt
                            ? "No Update"
                            : item.updatedAt
                        }}
                      </template>
                      <template v-slot:[`item.actions`]="{ item }">
                        <v-tooltip top>
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon
                              class="mr-2"
                              color="green"
                              @click.stop="handleEditRecipe(item)"
                              v-bind="attrs"
                              v-on="on"
                            >
                              mdi-pencil
                            </v-icon>
                          </template>
                          <span>edit</span>
                        </v-tooltip>

                        <v-tooltip top>
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon
                              @click.stop="handleDelete(item)"
                              color="red"
                              v-bind="attrs"
                              v-on="on"
                            >
                              mdi-delete
                            </v-icon>
                          </template>
                          <span>delete</span>
                        </v-tooltip>
                      </template>
                    </v-data-table>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <DeleteDialog
           v-if="isDeleteRecipe"
          :dialogDelete.sync="deleteDialog"
          :deleteObj="recipeObj"
          @handleDelete="handleDeleteConfirm"
        />
        <DeleteDialog
           v-if="!isDeleteRecipe"
          :dialogDelete.sync="deleteDialog"
          :deleteObj="obj"
          @handleDelete="handleDeleteConfirm"
        />
        <ResetPwdCRUD
          :resetPwd="resetObj"
          :dialog.sync="resetDialog"
          @handleData="handleReset"
        />
        <UserCRUD :user="obj" :dialog.sync="dialog" @handleData="handleUser" />
      </v-col>
    </v-row>
  </v-container>
</template>

//FIXME::created date and updated date
//TODO::comment

<script>
import { mapGetters } from "vuex";
import { listUser, deleteUser, updateUser } from "@/api/user";
import { uploadFile } from "@/api/generalAPI";
import { resetPassword } from "@/api/generalAPI";
import { listRecipeV2, deleteRecipe } from "@/api/recipe";

const newSearch = () => {
  return {
    limit: 0,
    skip: 0,
    category: "",
    username: "",
    keyword: "",
    type: 1,
  };
};
const newResetObj = () => {
  return {
    current_password: "",
    new_password: "",
    confirm_password: "",
  };
};

const newRecipeObj = () => {
  return {
    id: "",
    recipe_title: "",
    images: [],
    ingredients: [],
    cooking_steps: [],
    description: "",
    prep_time: "",
    cooking_time: "",
    category_id: "",
    comments: [],
    user_id: "",
    num_of_like: 0,
    num_of_dislike: 0,
    createdAt: "",
    updatedAt: "",
    is_active: true,
  };
};
const newObj = () => {
  return {
    id: "",
    firstname: "",
    lastname: "",
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
    ResetPwdCRUD: () => import("@/components/ResetPwdCRUD"),
    DeleteDialog: () => import("@/components/DeleteDialog"),
  },
  // created() {
  //   this.$emit(`update:layout`, UserDashboardLayout);
  // },
  data: () => ({
    isDeleteRecipe: false,
    deleteDialog: false,
    search: newSearch(),
    resetDialog: false,
    resetObj: newResetObj(),
    dialog: false,
    obj: newObj(),
    recipeObj: newRecipeObj(),
    tableLoading: false,
    datas: [],
    recipeDatas: [],
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
        value: "category_id.category_name",
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
    getData() {
      this.recipeDatas = [];
      // this.datas = [];
      this.tableLoading = true;
      this.search.username = this.userInfo._id;

      listRecipeV2(this.search)
        .then((res) => {
          if (res.meta == 2001) {
            this.tableLoading = false;
            if (res.datas.length == 0) {
              this.$toast("No Data Found");
              return true;
            }

            res.datas.forEach((p, i) => {
              p.itemNo = i + 1;
              p.createdAt = this.moment(p.createdAt).format(
                "YYYY-MM-DD h:mm A"
              );
              p.updatedAt = this.moment(p.updatedAt).format(
                "YYYY-MM-DD h:mm A"
              );
              console.log(p.createdAt);
            });
            this.recipeDatas = res.datas;
            // console.log("recipe: ", this.recipeDatas);
          }
        })
        .catch((err) => {
          console.log("err", err);
        });

      listUser()
        .then((res) => {
          if (res.meta == 2001) {
            if (res.data.length == 0) {
              this.$toast("No Data Found");
              return true;
            }
            this.obj = res.data;
            console.log(this.datas);
          }
        })
        .catch((err) => {
          console.log("err", err);
          // this.$toast.error(`Error - ${err.meta}`);
        });
    },
    handleSearch() {
      if (this.search.keyword) {
        this.search.type = 2;
        this.getData();
        setTimeout(() => {
          this.search = newSearch();
        }, 500);
      } else {
        this.search.type = 1;
        this.getData();
        setTimeout(() => {
          this.search = newSearch();
        }, 500);
      }
    },

    handleDeleteAccount() {
      this.deleteDialog = true;
      this.isDeleteRecipe = false;
    },
    handleDelete(item) {
      this.deleteDialog = true;
      this.recipeObj = item;
      this.isDeleteRecipe = true;
    },
    handleDeleteConfirm(item) {
      this.deleteDialog = false;
      if (this.isDeleteRecipe) {
       deleteRecipe(item.id)
        .then((res) => {
          if (res.meta == 2001) {
            this.$toast.success(res.message);
            this.getData();
          } else {
            this.$toast.error("Error - " + res.meta);
            console.log("Delete Error", res);
          }
        })
        .catch((err) => {
          console.log(err);
        });
        this.isDeleteRecipe = false;
      } else {
        deleteUser(this.userInfo._id)
          .then((res) => {
            if (res.meta == 2001) {
              this.$toast.success(res.message);
              this.logout();
            } else {
              this.$toast.error("Error - " + res.meta);
              console.log("Delete Error", res);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

    logout() {
      this.$store.dispatch("LogOut").then(() => {
        this.$router.push({ path: "/signin" });
      });
    },

    // handleSearchBtn() {
    //   this.search.type =1;
    //   this.getData();

    //   setTimeout(() => {
    //     this.search = newSearch();
    //   }, 500);
    // },
    handleResetDialog() {
      this.resetDialog = true;
      this.resetObj = newResetObj();
    },
    handleReset(item) {
      this.resetDialog = false;
      resetPassword(item)
        .then((res) => {
          if (res.meta == 2001) {
            this.$toast.success(res.message);
          }
          else {
            this.$toast.error("Erorr - " + res.message);
            console.log("Reset Password Error", res);
          }
        })
        .catch((err) => {
          console.log("Reset Password Error", err);
        });
    },
    handleEditRecipe(item) {
        //  item.category_id = item.category_id.id;
      this.$router.push("/recipe/" + item.id);
    },
    handleEdit() {
      this.dialog = true;
      this.obj = this.userInfo;
      this.obj.id = this.userInfo._id;
      this.obj.confirmPassword = this.userInfo.password;
      // console.log("id ", this.obj.id);
    },
    async handleUser(item, imagefile) {
      this.dialog = false;

      if (imagefile != undefined && imagefile != "") {
        const fileImageForm = new FormData();
        fileImageForm.append("file", imagefile);

        await uploadFile(fileImageForm)
          .then((res) => {
            item.profile_image = res.file.filename;
          })
          .catch(console.log);
      }

      updateUser(item)
        .then((res) => {
          if (res.meta == 2001) {
            // this.getData();
            this.$toast.success(res.message);
          } else {
            console.log("edit", res);
            this.$toast.error("Error - " + res.meta);
          }
        })
        .catch((err) => {
          console.log("Edit User Error", err);
        });
    },
  },
  mounted() {
    this.getData();
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
