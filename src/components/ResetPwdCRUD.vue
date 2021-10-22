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
                :label="$t('currentPwd')"
                type="password"
                outlined
                :rules="rule"
                v-model="resetPwd.current_password"
              />
            </v-col>
            <v-col class="py-0" cols="12">
              <v-text-field
                :label="$t('newPwd')"
                type="password"
                :rules="rule"
                outlined
                v-model="resetPwd.new_password"
              />
            </v-col>
            <v-col class="py-0" cols="12">
              <v-text-field
                :label="$t('confirmPwd')"
                :rules="rule"
                type="password"
                outlined
                v-model="resetPwd.confirm_password"
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
  name: "resetPwdCRUD",
  data() {
    return {
      valid: false,
      rule: [(v) => !!v || "This field is required."],
    };
  },
  props: {
    resetPwd: Object,
    dialog: Boolean,
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.$emit("handleData", this.resetPwd);
        this.$emit("update:dialog", false);
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
