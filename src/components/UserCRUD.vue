<template>
  <v-dialog v-model="dialog" persistent max-width="800px">
    <v-card class="pa-0" elevation="2">
      <v-card-text class="pb-0">
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-container fluid>
            <v-row class="pt-2">
              <v-col cols="12" class="pa-0">
                <span class="display-2">
                  <v-icon left class="pb-1"> mdi-apple-finder </v-icon>
                  {{ $t("userInfo") }}
                </span>
              </v-col>
            </v-row>
            <v-row>
              <v-col
                class="py-0"
                cols="12"
                lg="2"
                md="2"
                sm="4"
                style="height: 100%; width: 100%"
              >
                <ImageUpload
                  :image.sync="uploadedImg"
                  :avatar="user.profile_image"
                />

                <!-- <img :src="blankProfile" alt="" /> -->
              </v-col>
            </v-row>
            <v-row>
              <v-col class="py-0" cols="12" lg="4" md="4" sm="6">
                <v-text-field
                  label="First Name"
                  type="text"
                  :rules="Rule"
                  v-model="user.firstname"
                />
              </v-col>
              <v-col class="py-0" cols="12" lg="4" md="4" sm="6">
                <v-text-field
                  label="Last Name"
                  type="text"
                  :rules="Rule"
                  v-model="user.lastname"
                />
              </v-col>

              <v-col class="py-0" cols="12" lg="4" md="4" sm="6">
                <v-text-field
                  label="Username"
                  type="text"
                  :rules="Rule"
                  v-model="user.username"
                />
              </v-col>
              <v-col class="py-0" cols="12" lg="4" md="4" sm="6">
                <v-text-field
                  label="Email"
                  type="email"
                  :rules="Rule"
                  v-model="user.email"
                />
              </v-col>
              <v-col class="py-0" cols="12" lg="4" md="4" sm="6">
                <v-text-field
                  label="Password"
                  type="password"
                  :rules="Rule"
                  v-model="pwd"
                />
              </v-col>
              <v-col class="py-0" cols="12" lg="4" md="4" sm="6">
                <v-text-field
                  label="Confirm Password"
                  type="password"
                  :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
                  v-model="confirmPassword"
                />
              </v-col>
            </v-row>
            <v-row cols="12" justify="end" class="pr-2">
              <v-checkbox checked: false v-model="user.is_admin" label="Are you
              an admin?" />
            </v-row>
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
// import basicConfig from "../utils/basicConfig";
export default {
  components: {
    ImageUpload: () => import("@/components/ImageUpload"),
  },
  name: "UserCRUD",
  data() {
    return {
      confirmPassword: "",
      pwd: "",
      uploadedImg: undefined,
      // blankProfile: basicConfig.blank_profile_img,
      valid: false,
      Rule: [(v) => !!v || "this field is required"],
      confirmPasswordRules: [
        (value) => !!value || "type confirm password",
        (value) =>
          value === this.password ||
          "The password confirmation does not match.",
      ],
    };
  },
  props: {
    user: Object,
    dialog: Boolean,
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$emit("handleData", this.user, this.uploadedImg);
        this.uploadedImg = undefined;
        // this.$emit("update:dialog", false);
      } else {
        this.$toast.warning(this.$t("fillRequire"));
      }
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    cancelDialog() {
      this.$refs.form.resetValidation();
      this.uploadedImg = undefined;
      this.$emit("update:dialog", false);
    },
  },
  watch: {
    dialog() {
      if (this.dialog) {
        this.resetForm();
      }
    },
  },
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "Password must match";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>