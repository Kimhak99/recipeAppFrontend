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
            <v-form ref="form" lazy-validation>
              <v-container fluid>
                <v-row class="pt-2">
                  <v-col cols="12" md="6">
                    <!-- for img upload -->
                    <v-row>
                      <v-col cols="12" class="pa-0">
                        <span class="headline">
                          <v-icon left class="pb-1"
                            >mdi-file-image-outline</v-icon
                          >
                          {{ $t("recipImg") }}
                        </span>
                      </v-col>
                      <v-col class="py-0" cols="12">
                        <v-btn
                          color="primary"
                          class="mt-4"
                          @click="handleUploadClick"
                        >
                          Upload Images(s)
                        </v-btn>

                        <span
                          class="mt-2 d-flex align-end font-weight-bold error--text"
                        >
                          only JPG or PNG format and must be less than 2MB
                        </span>

                        <v-file-input
                          ref="uploader"
                          class="d-none"
                          type="file"
                          multiple
                          accept="image/jpeg, image/png, application/pdf"
                          @change="(item) => handleFileChange(item)"
                        />
                      </v-col>
                      <v-col cols="12">
                        <v-row v-if="file.length != 0">
                          <v-col cols="4" class="pt-6">
                            <viewer
                              :images="file"
                              class="prop-image__preview"
                              @close="$emit('update:dialog', true)"
                              @
                            >
                              <template slot-scope="scope">
                                <div
                                  class="pitem"
                                  v-for="(img, imgk) in scope.images"
                                  :key="imgk"
                                >
                                  <img
                                    :src="getImgPreviewUrl(img)"
                                    draggable
                                    style="height: 120px; width: 120px; margin-right: 10px; object-fit: cover"
                                  />
                                  <!-- @click="$emit('update:dialog', false)" -->

                                  <v-icon
                                    class="delbtn"
                                    @click="handleFileRemove(img)"
                                    >mdi-close</v-icon
                                  >
                                </div>
                              </template>
                            </viewer>
                          </v-col>
                        </v-row>
                      </v-col>
                      <!-- end img upload -->
                      <v-col class="py-0" cols="12">
                        <v-text-field
                          :label="$t('foodTitle')"
                          type="text"
                          prepend-icon="ramen_dining"
                          v-model="recipeObj.recipe_title"
                        />
                      </v-col>

                      <v-col class="py-0" cols="12">
                        <v-row>
                          <v-col cols="12" md="3">
                            <v-text-field
                              :label="$t('prepTime')"
                              type="text"
                              prepend-icon="schedule"
                              v-model="recipeObj.prep_time"
                            />
                          </v-col>
                          <v-col cols="12" md="3">
                            <v-text-field
                              :label="$t('cookTime')"
                              type="text"
                              prepend-icon="schedule"
                              v-model="recipeObj.cooking_time"
                            />
                          </v-col>
                          <v-col cols="12" md="6">
                            <v-autocomplete
                              :items="categoryList"
                              label="Category"
                              clearable
                              v-model="recipeObj.category_id"
                            />
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col class="mt-4" cols="12">
                        <v-textarea
                          :label="$t('description')"
                          outlined
                          v-model="recipeObj.description"
                        />
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col cols="12" md="6">
                    <v-row>
                      <!-- <v-col class="py-0" cols="12">
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
                      </v-col> -->

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
          <v-card-actions class="pt-6 pb-6 pr-6">
            <v-spacer />

            <v-btn color="success" class="mx-6 px-6" @click="handleAdd">
              {{ $t("addrecipe") }}
            </v-btn>

            <v-btn @click="handleCancel" color="error" outlined class="px-6">
              {{ $t("cancel") }}
            </v-btn>

            <v-spacer v-if="$vuetify.breakpoint.xsOnly" />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { uploadFiles } from "@/api/generalAPI";
import { urlImg, removeFile } from "@/utils/generalFunc";
import { addRecipe, updateRecipe } from "@/api/recipe";
import { listCategory } from "@/api/category";
import { mapGetters } from "vuex";

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
    categoryList: [],
    recipeObj: {},
    cooking_steps_str: [],
    ingredients_str: [],
    // imgUrl: serverConfig.file_url,
    file: [],
    tempFile: [],
    // blankImg: serverConfig.blank_product_img,
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
    urlImg,
    handleUploadClick() {
      this.$refs.uploader.$refs.input.click();
    },
    handleFileChange(item) {
      if (this.checkFileSize(item).length > 0) {
        this.$toast("Cannot Upload File that bigger than 2mb");
        return true;
      }

      if (this.checkFileType(item)) {
        this.$toast("wrong contentType");
        return true;
      }

      if (item.length > 0) {
        this.file.push(...item);
      }
    },
    handleFileRemove(item) {
      if (typeof item == typeof "") {
        this.tempFile.push(item);
      }
      this.file.splice(this.file.indexOf(item), 1);
    },
    getImgPreviewUrl(img) {
      return URL.createObjectURL(img);
    },
    async handleAdd() {
      if (this.$refs.form.validate()) {
        this.recipeObj.user_id = this.userInfo.id;
        this.recipeObj.images = this.file.filter((p) => typeof p == typeof "");

        if (this.file.length > 0) {
          const files = this.file.filter((p) => p instanceof File);

          const fileForm = new FormData();
          files.forEach((p) => {
            fileForm.append("file", p);
          });

          if (files.length > 0) {
            await uploadFiles(fileForm)
              .then((res) => {
                res.files.forEach((p) => this.recipeObj.images.push(p.md5));
              })
              .catch(console.log);
          }
        }
        if (this.recipeObj.id == "") {
          await addRecipe(this.recipeObj)
            .then((res) => {
              if (res.meta == 2001) {
                this.$toast.success(res.message); //you are trying to access this component, when it does not exist or properly intergrade
                console.log("added recipe: ", this.recipeObj);
              } else {
                this.$toast.error("Erorr - " + res.meta);
                console.log("Add Recipe Error", res);
              }
            })
            .catch((err) => {
              console.log("Add User Error", err);
            });
        } else {
          updateRecipe(this.recipeObj)
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
      }
      this.resetForm();
    },
    handleCancel() {},
  },

  mounted() {
    console.log("user id", this.userInfo._id)
    // this.cooking_steps_str.length = 1;
    this.recipeObj = newObj();
    listCategory()
      .then((res) => {
        console.log(res);
        if (res.meta == 2001) {
          this.categoryList= res.data;
          console.log("category name: ", res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        this.$toast.error(`Error - ${err.meta}`);
      });
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
};
</script>
<style lang="scss">
h1 {
  color: #b71c1c;
  height: 120vh;
}
.prop-image__preview {
  .pitem {
    display: inline-block;
    position: relative;
    margin-right: 6px;
    .delbtn {
      cursor: pointer;
      position: absolute;
      top: -10px !important;
      right: 0px !important;
      font-size: 15px;
      font-weight: bold;
      background-color: red;
      color: white;
      padding: 5px;
      border-radius: 50%;
    }
  }
}
</style>
