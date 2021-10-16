<template>
  <v-container class="px-16">
    <v-row class="ma-12">
      <v-btn class="mt-9 mr-2" small dark fab @click="searchBtn"
        ><v-icon>fas fa-search</v-icon></v-btn
      >
      <v-toolbar flat v-if="searchBar" class="mt-6">
        <v-row class="mt-10">
          <v-col cols="12" sm="12">
            <v-text-field
              full-width
              filled
              dense
              solo
              flat
              background-color="black lighten-3"
              dark
              v-model="search.keyword"
              clearable
            />
          </v-col>
          <v-col
            cols="12"
            sm="1"
            class="d-flex justify-center"
            align-self="center"
          >
          </v-col>
        </v-row>
      </v-toolbar>

      <v-flex
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
      </v-flex>
      <v-btn
        fab
        small
        color="pink"
        class="mt-9"
        @click="$router.push('/recipe')"
        ><v-icon>fas fa-plus</v-icon></v-btn
      >
    </v-row>
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
    <v-row class="mt-n6" align="center" justify="center">
      <v-col
        cols="12"
        lg="4"
        md="6"
        v-for="(item, key) in simulateRecipeData"
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
              <h2
                class="ml-1 grey--text-lighten-3"
                style="
                  overflow: hidden;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                "
              >
                {{ item.title }}
              </h2>
              <v-spacer />

              <v-chip class="ma-2" color="black" text-color="white" dense>
                <v-avatar left>
                  <!-- <v-icon color="yellow">
                    fas fa-thumbs-up
                  </v-icon> -->
                  <v-btn fab x-small color="pink"
                    ><v-icon>fas fa-heart</v-icon></v-btn
                  >
                </v-avatar>
                {{ item.like }}
              </v-chip>
            </v-app-bar>
            <!-- <h5 class="ml-5 mt-n5">$4.99</h5> -->
            <div
              class="d-flex flex-column justify-space-between align-center"
              style="height: 230px"
            >
              <v-img
                :src="item.images[0]"
                max-height="100%"
                max-width="100%"
                style="cursor: pointer"
                @click="$router.push('/recipedetail/0')"
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
                by {{ item.by }}
              </h5>
              <v-spacer />
              <v-btn fab small color="black"
                ><v-icon>fas fa-comment-dots</v-icon></v-btn
              >
              <v-spacer />
              <v-chip
                class="ma-2"
                color="grey lighten-3"
                text-color="red"
                dense
              >
                25 min
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
import { listRecipeV2 } from "@/api/recipe";
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
import snack from "../assets/snack.jpg";
import other from "../assets/other.png";
import special from "../assets/special.jpg";
import western from "../assets/western.jpg";

const newSearch = () => {
  return {
    keyword: "",
    limit: "",
    category: "",
  };
}; // these are the variable u use on backend, so im wondering if type is the same.. will we call it here?
// we add type here so we know for sure taht it will send type to backend, then in backend we can use sth.type;// can we use other word beside type?
//anything u want, just need to make sure we can in backend by its correct name too, just fyi

export default {
  // components: { UserDashboardLayout },
  name: "Home",
  // created() {
  //   this.$emit(`update:layout`, UserDashboardLayout);
  //   console.log(this.$router);
  // },
  data() {
    return {
      data: [],
      search: newSearch(),
      searchBar: false, //
      //ur data strucutre make no sense, 2 diff arrays // make more sense? this is even worse
      simulateRecipeData: [
        {
          title: "Ah Mok",
          by: "Phary",
          like: 12,
          images: [ahmok],
        },
        { title: "Papaya Salad", by: "Tim", like: 12, images: [papayaSalad] },
        { title: "Fried Crab", by: "Kolly", like: 12, images: [crab] },
        { title: "Pasta", by: "Anna", like: 12, images: [pasta] },
        { title: "hamburger", by: "Kimmy", like: 12, images: [hamburger] },
        { title: "Salad", by: "Samantha", like: 12, images: [salad] },
        { title: "Curry", by: "Porky", like: 12, images: [curry] },
        { title: "Chorizo", by: "Minhie", like: 12, images: [chorizo] },
        {
          title: "Chicken Salad",
          by: "Teachhay",
          like: 12,
          images: [chickenSalad],
        },
      ],
      stimulateCategoryData: [
        { name: "Asian", images: [ahmok] },
        { name: "Western", images: [western] },
        { name: "Fast Food", images: [hamburger] },
        { name: "Snack", images: [snack] },
        { name: "Vegetarian", images: [salad] },
        { name: "Special Occassion", images: [special] },
        { name: "Other", images: [other] },
      ],
    };
  },
  methods: {
    searchBtn() {
      if (!this.search.keyword) return (this.searchBar = !this.searchBar); // lol

      console.log("do the search");

      // if (this.test == null) {
      //   this.searchBar = this.searchBar? false : true;
      // } else {
      //   console.log("do the search");
      // }
    },
  },
  mounted() {
    this.data = [];
    listRecipeV2(this.search)
      .then((res) => {
        if (res.meta == 2001) {
          if (res.datas.length == 0) {
            this.$toast("No Data Found");
            return true;
          }

          this.data = res.datas;
          console.log(this.data);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  },
};
</script>
<style lang="scss" scoped>
// https://www.youtube.com/watch?v=2_E5uoiLCLY
//https://www.youtube.com/watch?v=Qc-LFzxoU6Q
</style>
