<template>
  <v-container class="px-16">
    <v-row class="mt-6 d-flex justify-center align-center">
      <v-col cols="1">
        <v-row>
          <v-col cols="12">
            <v-btn class="" small dark fab @click="handleSearch(undefined)">
              <v-icon>fas fa-search</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12">
            <v-tooltip top v-if="isSearch">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  class=""
                  small
                  dark
                  fab
                  @click="handleReset"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>fas fa-times</v-icon>
                </v-btn>
              </template>
              <span>Reset Search</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="10" class="pa-0" v-if="searchBar">
        <v-toolbar flat class="">
          <!-- <v-row class="mt-10"> -->
          <!-- <v-col cols="12"> -->
          <v-text-field
            full-width
            filled
            dense
            solo
            flat
            hide-details=""
            background-color="black lighten-3"
            dark
            v-model="search.keyword"
            @click:clear="handleSearch('')"
            @keyup.enter="handleSearch(undefined)"
            clearable
          />
          <!-- </v-col> -->
          <!-- </v-row> -->
        </v-toolbar>
      </v-col>

      <v-col cols="10" class="pa-0" v-else>
        <div class="box">
          <div
            class="secondBox"
            v-for="(item, key) in catList"
            :key="key"
            @click="handleCategory(item)"
          >
            <v-img
              alt="Bhutan"
              class="imgItem"
              :src="checkAvatar(item.image)"
              max-height="100%"
              max-width="100%"
            ></v-img>
            <div class="categoryName">
              <h5>{{ item.category_name }}</h5>
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="1" class="d-flex justify-end">
        <v-btn
          fab
          small
          color="pink"
          class="mt-"
          @click="$router.push('/recipe/' + 0)"
          ><v-icon>fas fa-plus</v-icon></v-btn
        >
      </v-col>
    </v-row>

    <!-- <v-flex
        v-if="!searchBar"
        v-for="(item, key) in stimulateCategoryData"
        :key="key"
        class="text-center"
      >
        <v-avatar size="100" class="red lighten-2">
          <v-img
            :src="item.images[0]"
            max-height="100%"
            max-width="100%"
            style="cursor: pointer"
          ></v-img>
        </v-avatar>
        <h5 class="mt-3">{{ item.name }}</h5>
      </v-flex> -->

    <!-- <v-toolbar flat>
      <v-row class="ml-6">
        <v-col cols="12" sm="11">
          <v-text-field
            full-width
            append-icon="search"
            filled
            dense
            solo
            flat
            background-color="black lighten-3"
            dark
          />
        </v-col>
        <v-col
          cols="12"
          sm="1"
          class="d-flex justify-center"
          align-self="center"
        >
          <v-btn
            fab
            small
            color="pink"
            class="mt-n6"
            @click="$router.push('/recipe')"
            ><v-icon>fas fa-plus</v-icon></v-btn
          >
        </v-col>
      </v-row>
    </v-toolbar> -->

    <v-row class="mt-6" align="center" justify="center">
      <v-col
        cols="12"
        lg="4"
        md="6"
        v-for="(item, key) in data"
        :key="key"
        class="d-flex flex-column justify-space-between align-center py-6"
      >
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card
            color="black lighten-5"
            :elevation="hover ? 16 : 2"
            width="450px"
            style="border-radius: 10px"
            dark
          >
            <v-app-bar flat color="rgba(0,0,0,0)">
              <h4
                class="ml-1 grey--text-lighten-3"
                style="
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                "
              >
                {{ item.recipe_title }}
              </h4>
              <v-spacer />

              <v-chip class="ma-2" color="black" text-color="white" dense>
                <v-avatar left>
                  <!-- <v-icon color="yellow">
                    fas fa-thumbs-up
                  </v-icon> -->
                  <v-btn fab x-small color="pink" @click="handleLike(item)"
                    ><v-icon>fas fa-heart</v-icon></v-btn
                  >
                </v-avatar>
                {{ item.num_of_like }}
              </v-chip>
            </v-app-bar>
            <!-- <h5 class="ml-5 mt-n5">$4.99</h5> -->
            <div
              class="d-flex flex-column justify-space-between align-center"
              style="height: 230px"
            >
              <v-img
                :src="checkAvatar(item.images[0])"
                max-height="100%"
                max-width="100%"
                style="cursor: pointer"
                @click="$router.push('/recipedetail/' + item.id)"
              ></v-img>
            </div>
            <v-app-bar flat color="rgba(0,0,0,0)">
              <h5
                style="
                  border-radius: 4px;
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                "
              >
                by {{ item.user_id.username }}
              </h5>
              <v-spacer />
              <!-- <v-btn fab small color="black"
                ><v-icon>fas fa-comment-dots</v-icon></v-btn
              > -->
              <v-spacer />
              <v-chip
                class="ma-2"
                color="grey lighten-3"
                text-color="red"
                dense
              >
                {{ item.cooking_time + item.prep_time + " min" }}
              </v-chip>
            </v-app-bar>
            <!-- <v-row>
              <v-col>
                abc
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                abc
              </v-col>
                <v-spacer></v-spacer>
              <v-col>
                abc
              </v-col>
            </v-row> -->
            <!-- <div class="rankGoodsBox" >
                  <div class="rankImg">
                 
                     <v-img :src="require('../assets/salad.jpg')" max-height="180" max-width="180"></v-img>
                  </div>
                  <div class="goodsTitleRank color1313 fontWeight">
                    <div class="van-ellipsis fontSize10">test</div>
                    <div class="rankNumber fontSize14 ">$100</div>
                  </div>
                </div> -->
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { listRecipeV2, updateRecipe } from "@/api/recipe";
// import { listUser } from "@/api/recipe";
import { listCategory } from "@/api/category";
// import UserDashboardLayout from "../layouts/UserDashboardLayout";
import ahmok from "../assets/ahmok.jpg";
import chickenSalad from "../assets/chickenSalad.jpg";
import chorizo from "../assets/chorizo.jpg";
import curry from "../assets/curry.jpg";
import salad from "../assets/salad.jpg";
import hamburger from "../assets/hamburger.jpg";
import pasta from "../assets/pasta.jpg";
import crab from "../assets/crab.jpg";
import papayaSalad from "../assets/papayaSalad.jpg";

const newSearch = () => {
  return {
    keyword: "",
    limit: "",
    skip: "",
    category: "",
    type: 1,
  };
};

export default {
  // components: { UserDashboardLayout },
  name: "Home",
  // created() {
  //   this.$emit(`update:layout`, UserDashboardLayout);
  //   console.log(this.$router);
  // },
  data() {
    return {
      // userList: [],
      data: [],
      isSearch: false,
      catList: [],
      search: newSearch(),
      searchBar: false, //

      // simulateRecipeData: [
      //   {
      //     title: "Ah Mok",
      //     by: "Phary",
      //     like: 12,
      //     images: [ahmok],
      //   },
      //   { title: "Papaya Salad", by: "Tim", like: 12, images: [papayaSalad] },
      //   { title: "Fried Crab", by: "Kolly", like: 12, images: [crab] },
      //   { title: "Pasta", by: "Anna", like: 12, images: [pasta] },
      //   { title: "hamburger", by: "Kimmy", like: 12, images: [hamburger] },
      //   { title: "Salad", by: "Samantha", like: 12, images: [salad] },
      //   { title: "Curry", by: "Porky", like: 12, images: [curry] },
      //   { title: "Chorizo", by: "Minhie", like: 12, images: [chorizo] },
      //   {
      //     title: "Chicken Salad",
      //     by: "Teachhay",
      //     like: 12,
      //     images: [chickenSalad],
      //   },
      // ],
      // stimulateCategoryData: [
      //   { name: "Asian", images: [ahmok] },
      //   { name: "Western", images: [western] },
      //   { name: "Fast Food", images: [hamburger] },
      //   { name: "Snack", images: [snack] },
      //   { name: "Vegetarian", images: [salad] },
      //   { name: "Special Occassion", images: [special] },
      //   { name: "Asian", images: [ahmok] },
      //   { name: "Western", images: [western] },
      //   { name: "Fast Food", images: [hamburger] },
      //   { name: "Other", images: [other] },
      // ],
    };
  },
  methods: {
    handleCategory(item) {
      this.isSearch = true;
      this.search.category = item.id;
      this.search.type = 1;
      this.getData();
    },
    handleLike(item) {
      //=========another way=========
      // const temp = JSON.parse(JSON.stringify(item));
      // temp.num_of_like += 1;
      // temp.category_id = temp.category_id.id;
      // temp.user_id = temp.user_id.id;
      // temp.comments = temp.comments.map(p => p.id);
      // updateRecipe(temp)

      item.num_of_like += 1;
      updateRecipe({ id: item.id, num_of_like: item.num_of_like })
        .then((res) => {
          if (res.meta == 2001) {
            this.getData();
          } else {
            console.log("edit", res);
          }
        })
        .catch((err) => {
          console.log("Edit Recipe Error", err);
        });
    },

    getData() {
      this.data = [];

      listRecipeV2(this.search)
        .then((res) => {
          if (res.meta == 2001) {
            if (res.datas.length == 0) {
              this.$toast("No Data Found");
              return true;
            }

            this.data = res.datas;
          }
        })
        .catch((err) => {
          console.log("err", err);
        });
    },
    handleSearch() {
      this.search.type = 0;

      if (!this.search.keyword) {
        this.searchBar = !this.searchBar;
        return;
      }

      this.isSearch = true;
      this.getData();

      setTimeout(() => {
        this.search = newSearch(); // when this is called, it means seach.type=1 yep so it should work
      }, 500);
    },
    handleReset() {
      this.isSearch = false;
      this.search = newSearch();
      this.getData();
    },
  },
  mounted() {
    this.catList = [];

    listCategory()
      .then((res) => {
        console.log(res);
        if (res.meta == 2001) {
          this.tableLoading = false;

          if (res.data.length == 0) {
            this.$toast("No Data Found");
            return true;
          }
          this.catList = res.data;
        }
      })
      .catch((err) => {
        console.log(err);
        this.$toast.error(`Error - ${err.meta}`);
      });

    this.getData();
  },
};
</script>
<style lang="scss" scoped>
.box {
  height: 140px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  padding-bottom: 12px;
  // &::-webkit-scrollbar {
  //   display: none;
  // }
  &:hover {
    cursor: grab;
  }
  &:active {
    cursor: grabbing;
  }
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
  &::-webkit-scrollbar-thumb:active {
    background: #000000;
  }
  &::-webkit-scrollbar-track {
    background: #6e6e6e;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  &::-webkit-scrollbar-track:hover {
    background: #666666;
  }
  &::-webkit-scrollbar-track:active {
    background: #333333;
  }
  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}

.secondBox {
  width: 100px;
  height: 100px;
  margin: 0 10px;
  cursor: pointer;
  .imgItem {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.categoryName {
  // mt-3 d-flex justify-center align-center" ;
  text-align: center;
  overflow-x: hidden;
  margin-top: 8px;
  white-space: nowrap;
  text-overflow: ellipsis;
  &:hover {
    color: coral;
    overflow: visible;
  }
}
</style>
