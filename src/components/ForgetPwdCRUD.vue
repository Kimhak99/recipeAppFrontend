<template>
  <v-dialog v-model="dialog" persistent max-width="400px">
    <v-card class="pa-0" elevation="2">
      <v-card-title>
        <v-icon large color="#b71c1c1"> mdi-lock-reset </v-icon
        ><span class="ml-2 display-1" style="font-weight: bold">
          {{ $t("reset") }}
        </span>
      </v-card-title>
      <v-card-text class="pb-0">
        <v-form v-model="valid" ref="form" lazy-validation>
          <v-container fluid>
            <v-col class="py-0" cols="12">
              <v-text-field
                :label="$t('email')"
                type="email"
                outlined
                :rules="Rules"
                v-model="forgetPwd.email"
              />
            </v-col>
            <v-col class="py-0" cols="12">
              <v-text-field
                :label="$t('newPwd')"
                type="password"
                :rules="Rules"
                outlined
                v-model="forgetPwd.new_password"
              />
            </v-col>
            <v-col class="py-0" cols="12">
              <v-text-field
                :label="$t('confirmPwd')"
                :rules="[Rules, matchingPasswords]"
                type="password"
                outlined
                v-model="forgetPwd.confirm_password"
              />
            </v-col>
          </v-container>
        </v-form>
      </v-card-text>

      <v-card-actions class="pb-6 pr-12">
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
// import basicConfig from "@/utils/basicConfig";
export default {
  name: "forgetPwdCRUD",
  data() {
    return {
      valid: false,
      Rules: [(v) => !!v || "This field is required."],
    };
  },
  props: {
    forgetPwd: Object,
    dialog: Boolean,
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$emit("handleData", this.forgetPwd);
        this.$emit("update:dialog", false);
      }
    },
    cancelDialog() {
      this.$emit("update:dialog", false);
      this.$refs.form.resetValidation();
    },
    matchingPasswords: function () {
      if(this.forgetPwd.new_password === this.forgetPwd.confirm_password) {
        return true;
      } else {
        return "Passwords do not match.";
      }
    }
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
