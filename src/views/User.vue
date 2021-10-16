<template>
  <v-container fluid>
    <!-- <PageNavigation :items="navigation" /> -->
    <v-row no-gutters>
      <v-col cols="12">
        <v-card class="px-4">
          <v-card-title>
            <v-icon large color="#b71c1c"> mdi-account-group </v-icon
            ><span class="ml-2 mt-1 display-1" style="font-weight: bold">{{
              $t("user")
            }}</span></v-card-title
          >
          <!-- <v-sheet> -->
          <v-toolbar-items class="d-flex align-center">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Search"
                  v-model="search.keyword"
                  prepend-inner-icon="mdi-magify"
                  hint="Empty input will clear filter"
                  persistent-hint
                  clearable
                  @click:clear="handleSearch('')"
                  @keyup.enter="handleSearch(undefined)"
                />
              </v-col>
              <v-col
                cols="12"
                lg="1"
                md="1"
                sm="1"
                align-self="center"
                :class="
                  $vuetify.breakpoint.mdAndDown ? 'd-flex justify-end pr-0' : ''
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
              <v-spacer />
              <v-col
                cols="12"
                lg="2"
                md="2"
                sm="2"
                class="d-flex justify-end"
                align-self="center"
              >
                <v-btn color="green" elevation="2" @click="handleDialog">
                  <v-icon left>mdi-account-plus</v-icon>
                  {{ $t("add") }}
                </v-btn>
              </v-col>
            </v-row>
          </v-toolbar-items>
          <!-- </v-sheet> -->
          <v-data-table
            :headers="headers"
            :items="datas"
            class="elevation-0 mt-4"
            :loading="tableLoading"
            mobile-breakpoint="600"
          >
            <template v-slot:[`item.profile_image`]="{ item }">
              <v-img
                :src="checkAvatar(item.profile_image)"
                width="65px"
                height="70px"
                style="margin: 10px; border-radius: 50px"
              />
            </template>
            <template v-slot:[`item.fullname`]="{ item }">
              {{ item.lastname + " " + item.firstname }}
            </template>
            <template v-slot:[`item.is_admin`]="{ item }">
              <!-- <span v-if="item.is_admin==1?">Admin</span> -->

              {{ item.is_admin ? "Admin" : "User" }}
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    class="mr-2"
                    color="green"
                    @click.stop="handleEdit(item)"
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
        </v-card>

        <DeleteDialog
          :dialogDelete.sync="deleteDialog"
          :deleteObj="obj"
          @handleDelete="handleDeleteConfirm"
        />
        <UserCRUD :user="obj" :dialog.sync="dialog" @handleData="handleUser" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { listUser, deleteUser, addUser, updateUser } from "@/api/user";
import { uploadFile } from "@/api/generalAPI";
import basicConfig from "@/utils/basicConfig";

const newSearch = () => {
  return {
    limit: 0,
    skip: 0,
    keyword: "",
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

// const updateObj = () => {
//   return {
//     id: "",
//     firstname: "",
//     lastname: "",
//     password: "",
//     email: "",
//     profile_image: "",
//     is_admin: Boolean,
//     is_active: Boolean,
//   };
// };
export default {
  // components: { UserDashboardLayout },
  name: "User",
  components: {
    // PageNavigation: () => import("@/components/PageNavigation"),
    DeleteDialog: () => import("@/components/DeleteDialog"),
    UserCRUD: () => import("@/components/UserCRUD"),
  },
  data: () => ({
    // navigation:[{ text: "User"}]
    imgUrl: basicConfig.file_url,
    search: newSearch(),
    dialog: false,
    datas: [],
    tableLoading: true,
    deleteDialog: false,
    obj: newObj(),
    headers: [
      {
        text: "ID",
        align: "center",
        sortable: false,
        value: "itemNo",
        width: "100px",
      },
      {
        text: "Profile Picture",
        align: "start",
        sortable: false,
        value: "profile_image",
      },
      {
        text: "Full Name",
        align: "start",
        sortable: false,
        value: "fullname",
        width: "150px",
      },
      {
        text: "Username",
        align: "start",
        sortable: false,
        value: "username",
      },
      {
        text: "Email",
        align: "start",
        sortable: false,
        value: "email",
      },
      {
        text: "Role",
        align: "start",
        sortable: false,
        value: "is_admin",
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
      this.datas = [];
      this.tableLoading = true;

      listUser(this.search)
        .then((res) => {
          // console.log("Res", res);
          if (res.meta == 2001) {
            this.tableLoading = false;

            if (res.data.length == 0) {
              this.$toast("No Data Found");
              return true;
            }

            res.data.forEach((p, i) => (p.itemNo = i + 1));
            // res.data.forEach((p) =>
            //   p.is_admin == 1 ? (p.is_admin = "Admin") : (p.is_admin = "User")//move this to the table? //yep and why need to loop twice
            // );
            this.datas = res.data;
            console.log(this.datas);
          }
        })
        .catch((err) => {
          console.log("err", err);
          // this.$toast.error(`Error - ${err.meta}`);
        });
    },
    handleSearch(item) {
      if (item == "") {
        this.search = newSearch();
      }
      this.getData();
      setTimeout(() => {
        this.search = newSearch();
      }, 500);
    },
    handleDialog() {
      this.dialog = true;
      this.obj = newObj();
    },
    handleEdit(obj) {
      this.dialog = true;
      this.obj = obj;
      this.obj.confirmPassword = obj.password;
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

      if (this.obj.id == "") {
        addUser(item)
          .then((res) => {
            if (res.meta == 2001) {
              this.getData();
              this.$toast.success(res.message); //you are trying to access this component, when it does not exist or properly intergrade
              console.log("added item: ", item);
            } else {
              this.$toast.error("Erorr - " + res.meta);
              console.log("Add User Error", res);
            }
          })
          .catch((err) => {
            console.log("Add User Error", err);
          });
      } else {
        console.log(item);

        updateUser(item)
          .then((res) => {
            if (res.meta == 2001) {
              this.getData();
              this.$toast.success(res.message);
            } else {
              console.log("edit", res);
              this.$toast.error("Error - " + res.meta);
            }
          })
          .catch((err) => {
            console.log("Edit User Error", err);
          });
      }
    },

    handleDelete(obj) {
      this.deleteDialog = true;
      this.obj = obj;
    },
    handleDeleteConfirm(obj) {
      this.deleteDialog = false;

      deleteUser(obj.id)
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
    },
    // checkAvatar(item) {
    //   return typeof item.profile_image === "string" ||
    //     item.profile_image == undefined
    //     ? item.profile_image == "" || item.profile_image == undefined
    //       ? basicConfig.blank_profile_img
    //       : this.imgUrl + item.profile_image
    //     : item.profile_image != 0
    //     ? this.imgUrl + item.profile_image[0]
    //     : basicConfig.blank_profile_img;
    // },
  },
  mounted() {
    this.getData();
  },
};
</script>
<style>
h1 {
  color: #b71c1c;
}
</style>