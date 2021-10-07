<template>
  <v-container class="px-16">
    <v-toolbar flat>
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
    </v-toolbar>
    <v-row class="mt-n6" align="center" justify="center">
      <v-col
        cols="12"
        lg="4"
        sm="6"
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
              <!-- <v-spacer></v-spacer> -->
              <h2 class="ml-1 grey--text-lighten-3">{{ item.title }}</h2>
              <!-- chorizo-mozarella-gnocchi-bake-cropped -->
              <v-spacer></v-spacer>
              <h5 class="ml-5" style="border-radius: 4px">by Tim</h5>
              <!-- <v-btn fab x-small color="pink"><v-icon>fas fa-plus</v-icon></v-btn> -->
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
              ></v-img>
            </div>
            <v-app-bar flat color="rgba(0,0,0,0)">
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

export default {
  // components: { UserDashboardLayout },
  name: "Home",
  // created() {
  //   this.$emit(`update:layout`, UserDashboardLayout);
  //   console.log(this.$router);
  // },
  data() {
    return {
      //ur data strucutre make no sense, 2 diff arrays // make more sense? this is even worse
      recipeObj: {
        images: [
          require("../assets/ahmok.jpg"),
          require("../assets/chickenSalad.jpg"),
          require("../assets/chorizo.jpg"),
          require("../assets/curry.jpg"),
          require("../assets/salad.jpg"),
          require("../assets/hamburger.jpg"),
          require("../assets/pasta.jpg"),
          require("../assets/crab.jpg"),
          require("../assets/papayaSalad.jpg"),
        ],
        foodTitles: [
          "title11",
          "title22",
          "title33",
          "title44",
          "title55",
          "title66",
          "title77",
          "title88",
          "title99",
        ],
      },
      simulateRecipeData: [
        { title: "ahmok", like: 12, images: [ahmok] },
        { title: "papayaSalad", like: 12, images: [papayaSalad] },
        { title: "crab", like: 12, images: [crab] },
        { title: "pasta", like: 12, images: [pasta] },
        { title: "hamburger", like: 12, images: [hamburger] },
        { title: "salad", like: 12, images: [salad] },
        { title: "curry", like: 12, images: [curry] },
        { title: "chorizo", like: 12, images: [chorizo] },
        { title: "chickenSalad", like: 12, images: [chickenSalad] },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
// .rankGoodsBox {
//     width: 124px;
//     overflow: hidden;
//     height: 170px;
//     border-radius: 8px;
//     box-shadow: 0px 0px 5px rgba($color: #000000, $alpha: 0.2);
//     .rankImg {
//       margin: auto;
//       margin-bottom: 20px;
//       width: 100%;
//       height: 100px;
//       border-radius: 8px;
//       border-bottom-right-radius: 0px;
//       border-bottom-left-radius: 0px;
//       box-shadow: 1px 2px 16px rgba($color: #000000, $alpha: 0.2);

//       overflow: hidden;
//       img {
//         height: 100%;
//         width: 100%;
//         object-fit: cover;
//       }
//     }
//     .goodsTitleRank {

//       background: #fff;
//       // width: 100px;
//       height: 44px;
//       border-bottom-left-radius: 6px;
//       border-bottom-right-radius: 6px;
//       text-align: center;
//       .van-ellipsis{
//         padding: 0 8px;
//       }
//       // padding: 10px 6px 0 6px;
//       .rankNumber {
//         padding: 0 8px;
//         text-align: center;
//         margin-top: 8px;
//         height: 20px;
//         text-overflow: ellipsis;
//         overflow: hidden;
//         white-space: nowrap;
//         line-height: 1;
//       }
//     }
//   }
</style>
