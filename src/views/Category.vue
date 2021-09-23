<template>
  <v-container fluid>
    <!-- <PageNavigation :items="navigation" /> -->
    <v-row no-gutters>
      <v-col cols="8" offset="2" >
        <v-card class="px-4">
          <v-card-title>  
            <v-icon
            large
            color="#b71c1c"
          >
          mdi-account-group
          </v-icon><span class="ml-2 mt-1 display-1" style=" font-weight: bold">{{$t("category")}}</span></v-card-title>
          <!-- <v-sheet> -->
            <v-toolbar-items class="d-flex align-center">
              <v-row>
                <v-col cols="12" lg="6" md="6" sm="6">
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
                    {{ $t("add")}}
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
          <CategoryCRUD
          :category="obj"
          :dialog.sync="dialog"
          @handleData="handleCategory"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserDashboardLayout from "../layouts/UserDashboardLayout";

import {
  listCategory,
  deleteCategory,
  addCategory,
  updateCategory,
} from "@/api/category";

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
    category_name: "",
    image: "",
    remark: "",
    is_active: Boolean

  }
}

export default {
  // components: { UserDashboardLayout },
  name: "Category",
  components: {
    // PageNavigation: () => import("@/components/PageNavigation"),
      DeleteDialog: () => import("@/components/DeleteDialog"),
      CategoryCRUD: () => import("@/components/CategoryCRUD"),
  },
  created() {
    this.$emit(`update:layout`, UserDashboardLayout);
  },
  data: () => ({
    // navigation:[{ text: "User"}]
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
        text: "Category Image",
        align: "start",
        sortable: false, 
        value: "image",
      },
      {
        text: "Category Name",
        align: "start",
        sortable: false, 
        value: "category_name",
      },
      {
        text: "Remark",
        align: "start",
        sortable: false,
        value: "remark",
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

      listCategory(this.search) 
        .then((res) => {
          console.log(res);
          if(res.meta == 2001) {
            this.tableLoading = false;
            
            if(res.data.length == 0) {
              this.$toast("No Data Found");
              return true;
            }

            res.data.forEach((p, i) => (p.itemNo = i + 1));
            this.datas = res.data;
            console.log(this.datas)
          }
        })
        .catch((err) => {
          console.log(err);
          this.$toast.error(`Error - ${err.meta}`);
        });
    },
    handleSearch(item) {
      if(item == "") {
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
    },
    handleCategory(item) {
       if (this.obj.id == "") {
        addCategory(item)
          .then((res) => {
            if (res.meta == 2001) {
              this.getData();
              this.$toast.success(res.message);
            } else {
              this.$toast.error("Erorr - " + res.meta);
              console.log("Add Error", res);
            }
          })
          .catch(console.log);
        }
        else {
           updateCategory(item)
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

      deleteCategory(obj.id)
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
  },
  mounted() {
    this.getData();

  }
};
</script>
<style>
h1 {
  color: #b71c1c;
}
</style>