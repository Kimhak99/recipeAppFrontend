<template>
  <v-container fluid>
    <v-row class="pa-4">
      <v-col>
        <v-btn
          color="green"
          elevation="2"
          @click="$router.push({ path: '/home' })"
        >
          <v-icon left> mdi-keyboard-return </v-icon>
          {{ $t("home") }}
        </v-btn>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12">
        <v-card class="px-4" elevation="2">
          <v-card-title>
            <v-icon large color="#b71c1c1"> mdi-silverware-variant </v-icon
            ><span class="ml-2 mt-2 display-1" style="font-weight:bold">
              {{ $t("recipe") }}
            </span>
          </v-card-title>
          <v-card-text class=" pb-0">
            <v-form>
              <v-container fluid>
                <v-row class="pt-2">
                  <v-col cols="12" md="6">
                    <v-btn color="silver" class="mt-4" width="100%" height="200px">
                      
    <img src="https://randomuser.me/api/portraits/men/1.jpg">

                        </v-btn>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-row>
                      <v-col class="py-0" cols="12">
                        <v-text-field
                          :label="$t('foodTitle')"
                          type="text"
                          prepend-icon="ramen_dining"
                          v-model="recipeObj.recipe_title"
                        />
                      </v-col>

                      <v-col class="py-0" cols="12">
                        <v-textarea
                          :label="$t('description')"
                          outlined
                          v-model="recipeObj.description"
                        />
                      </v-col>

                      <!-- ingredients -->
                      <v-col cols="12">
                        <v-card class="pa-4" elevation="2">
                          <v-col
                            cols="12"
                            class="pa-0 my-2 d-flex align-center"
                          >
                            <span class="mr-auto" style="font-weight: bold;">
                              <v-icon>mdi-spoon-sugar</v-icon>
                              {{ $t("ingredients") }}</span
                            >
                            <v-btn color="primary" @click="newIngredient">
                              <v-icon>mdi-plus</v-icon>
                            </v-btn>
                          </v-col>

                          <v-col
                            cols="12"
                            v-for="(item, key) in ingredients_str"
                            :key="key"
                          >
                            <v-row>
                              <v-col cols="12" lg="10" class="pa-0">
                                <v-text-field
                                  :label="$t('ingredient')"
                                  outlined
                                  v-model="item.ingredients"
                                />
                              </v-col>
                              <v-col
                                cols="12"
                                lg="2"
                                class="d-flex justify-end pa-0"
                              >
                                <v-btn
                                  color="red"
                                  class="mt-2"
                                  outlined
                                  @click="deleteIngredient(item)"
                                >
                                  <v-icon>mdi-delete</v-icon>
                                </v-btn>
                              </v-col>
                            </v-row>
                          </v-col>
                        </v-card>
                      </v-col>

                      <!-- cooking steps -->
                      <v-col cols="12">
                        <v-card class="pa-4" elevation="2">
                          <v-col
                            cols="12"
                            class="pa-0 my-2 d-flex align-center"
                          >
                            <span class="mr-auto" style="font-weight: bold;">
                              <v-icon>mdi-chef-hat</v-icon>
                              {{ $t("cookingSteps") }}</span
                            >
                            <v-btn color="primary" @click="newCookingStep">
                              <v-icon>mdi-plus</v-icon>
                            </v-btn>
                          </v-col>

                          <v-col
                            cols="12"
                            v-for="(item, key) in cooking_steps_str"
                            :key="key"
                          >
                            <v-row>
                              <v-col cols="12" lg="10" class="pa-0">
                                <v-text-field
                                  :label="$t('step')"
                                  outlined
                                  v-model="item.cooking_steps"
                                />
                              </v-col>
                              <v-col
                                cols="12"
                                lg="2"
                                class="d-flex justify-end pa-0"
                              >
                                <v-btn
                                  color="red"
                                  class="mt-2"
                                  outlined
                                  @click="deletecookingSteps(item)"
                                >
                                  <v-icon>mdi-delete</v-icon>
                                </v-btn>
                              </v-col>
                            </v-row>
                          </v-col>
                        </v-card>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const newObj = () => {
  return {
    id: "",
    recipe_title: "",
    images: [],
    ingredients: [],
    cooking_steps: [],
    recipe_images: [],
    description: "",
    prep_time: "",
    cooking_time: "",
    category_id: "",
    comments: [],
    user_id: "",
    num_of_like: 0,
    num_of_dislike: 0,
    is_active: true,
  };
};
export default {
  name: "Recipe",
  data: () => ({
    recipeObj: {},
    cooking_steps_str: [],
    ingredients_str: [],
  }),

  methods: {
    newCookingStep() {
      console.log("length of step ", this.cooking_steps_str);
      this.cooking_steps_str.push({});
    },
    deletecookingSteps(item) {
      this.cooking_steps_str.splice(this.cooking_steps_str.indexOf(item), 1);
    },
    newIngredient() {
      this.ingredients_str.push({});
    },
    deleteIngredient(item) {
      this.ingredients_str.splice(this.ingredients_str.indexOf(item), 1);
    },
  },
  mounted() {
    // this.cooking_steps_str.length = 1;
    this.recipeObj = newObj();
  },
};
</script>
<style>
h1 {
  color: #b71c1c;
  height: 120vh;
}
</style>
