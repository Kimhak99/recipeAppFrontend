<template>
  <v-container fluid pa-0>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-16" elevation="2">
          <v-card-title primary-title class="justify-center">
            <span class="ml-2 mt-1 display-1" style="font-weight: bold">
              {{ data.recipe_title }}
            </span></v-card-title
          >
          <v-card-actions class="justify-center">
            <!-- <v-bottom-navigation v-model="value"> -->
            <!-- <v-btn value="recent"> -->
            <span
              class="m-10 px-5"
              style="border-right: 1px solid rgba(0, 0, 0, 0.2)"
              ><v-icon class="mr-2">mdi-history</v-icon>
              {{ data.cooking_time + data.prep_time + " min" }}</span
            >
            <!-- </v-btn> -->
            <span
              class="m-10 px-5"
              style="border-right: 1px solid rgba(0, 0, 0, 0.2)"
              ><v-icon class="mr-2" color="pink">mdi-heart</v-icon
              >{{ data.num_of_like }}</span
            >
            <span
              class="m-10 px-5"
              style="border-right: 1px solid rgba(0, 0, 0, 0.2)"
              ><v-icon class="mr-2">mdi-format-list-bulleted-type</v-icon
              >{{ data.category_id.category_name }}</span
            >
            <!-- </v-bottom-navigation> -->
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12">
        <!-- <v-row no-gutters>
              <v-col cols="12" sm="6"> -->
        <div class="containerBox">
          <div class="left">
            <!-- <v-img
              :src="checkAvatar(data.images[0])"
              height="100%"
              class="grey darken-4"
              style="border-radius: 8px"
              cover
            ></v-img> -->
            <v-carousel
              height="100%"
              class="grey darken-4"
              style="border-radius: 8px"
              :show-arrows="false"
            >
              <v-carousel-item
                v-for="(item, i) in data.images"
                :key="i"
                :src="checkAvatar(item)"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </div>

          <div class="right">
            <v-card
              color="basil"
              max-height="400px"
              width="100%"
              style="overflow: auto"
            >
              <v-tabs
                v-model="tab"
                background-color="transparent"
                color="basil"
                grow
                show-arrows
              >
                <v-tab v-for="item in items" :key="item">
                  {{ item }}
                </v-tab>
              </v-tabs>

              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <v-card color="basil" flat>
                    <v-card-text>{{ data.description }}</v-card-text>
                  </v-card>
                </v-tab-item>

                <v-tab-item>
                  <v-card
                    color="basil"
                    flat
                    v-for="(item, index) in data.ingredients"
                    :key="item"
                  >
                    <v-card-text
                      ><span style="font-weight: bold">{{ index + 1 }}.</span>
                      {{ item }}</v-card-text
                    >
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card
                    color="basil"
                    flat
                    v-for="(item, index) in data.cooking_steps"
                    :key="item"
                  >
                    <v-card-text>
                      <span style="font-weight: bold">{{ index + 1 }}.</span>
                      {{ item }}</v-card-text
                    >
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </div>
        </div>

        <!-- </v-col>

          </v-row> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getRecipe } from "@/api/recipe";
export default {
  name: "RecipeDetail",
  data() {
    return {
      data: [],
      tab: null,
      items: ["Description", "Ingredients", "Steps"],
    };
  },
  methods: {
    getData() {
      this.data = [];

      getRecipe(this.$route.params.id)
        .then((res) => {
          if (res.meta == 2001) {
            this.data = res.data;
            console.log(this.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    console.log(this.$route.params.id);
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
.containerBox {
  min-height: 100vh;
  width: 90%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  background-color: #fddcc356;
}
.left {
  width: 50%;
  height: 600px;
  border-radius: 8px;
}
.right {
  width: 40%;
  min-height: 400px;
  background-color: #2f3d3c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  color: white;
  border-radius: 8px;
  margin-left: -100px;
  z-index: 1;
}
@media only screen and (max-width: 1040px) {
  .containerBox {
    flex-direction: column;
    width: 100%;
  }

  .left {
    width: 70%;
    height: 420px;
    border-radius: 8px;
  }
  .right {
    width: 60%;
    margin: 0;
    margin-top: -70px;
  }
}
@media only screen and (max-width: 950px) {
  .containerBox {
    flex-direction: column;
    width: 100%;
  }
  .left {
    width: 90%;
    height: 400px;
  }
  .right {
    width: 80%;
    margin: 0;
    margin-top: -70px;
  }
}
</style>
