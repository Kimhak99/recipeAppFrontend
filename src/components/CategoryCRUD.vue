<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-card class="pa-0" elevation="2">
      <v-card-text class="pb-0">
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-container fluid>
            <v-row class="pt-2">
              <v-col cols="12" class="pa-0">
                <span class="display-2">
                  <v-icon left class="pb-1"> mdi-apple-finder </v-icon>
                  {{ $t("category") }}
                </span>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                cols="12"
                lg="2"
                md="2"
                sm="4"
                class="d-flex justify-center align-center"
              >
                <ImageUpload
                  :image.sync="uploadedImg"
                  :avatar="category.profile_image"
                />
              </v-col>
            </v-row>

            <v-col class="py-0" cols="12">
              <v-text-field
                :label="$t('catName')"
                type="text"
                :rules="rule"
                v-model="category.category_name"
              />
            </v-col>
            <v-col class="py-0" cols="12">
              <v-textarea
                :label="$t('remark')"
                outlined
                v-model="category.remark"
              />
            </v-col>
          </v-container>
        </v-form>
      </v-card-text>

      <v-card-actions class="pb-6 pr-8">
        <v-spacer />
        <v-btn @click="validate" color="success"> {{ $t("save") }} </v-btn>
        <v-btn @click="cancelDialog" color="red" outlined>
          {{ $t("cancel") }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import basicConfig from "@/utils/basicConfig";
export default {
  components: {
    ImageUpload: () => import("@/components/ImageUpload"),
  },
  name: "CategoryCRUD",
  data() {
    return {
      uploadedImg: undefined,
      // blankProfile: basicConfig.blank_profile_img,
      valid: false,
      rule: [(v) => !!v || "This field is required."],
    };
  },
  props: {
    category: Object,
    dialog: Boolean,
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$emit("handleData", this.category, this.uploadedImg);
        this.uploadedImg = undefined;
        // this.$emit("update:dialog", false);
      }
    },
    cancelDialog() {
      this.$emit("update:dialog", false);
      this.$refs.form.resetValidation();
    },
  },
   resetValidation() {
      this.$refs.form.resetValidation();
    },
  watch: {
    dialog() {
      if (this.dialog) {
        this.resetForm();
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
