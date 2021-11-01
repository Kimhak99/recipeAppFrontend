<template>
  <v-container
    class="d-flex justify-center align-items-center fill-height"
    fluid
  >
    <v-card class="elevation-4" style="border-radius: 12px">
      <v-row no-gutters>
        <v-col cols="12" md="8">
          <v-card-text>
            <div
              class="display-2 text-center text-accent-3"
              style="color: #b71c1c"
            >
              Sign in to The Recipe
            </div>

            <div class="text-center mt-4">
              <v-btn class="mx-2" fab color="black" outlined>
                <v-icon>fab fa-facebook-f</v-icon>
              </v-btn>

              <v-btn class="mx-2" fab color="black" outlined>
                <v-icon>fab fa-google-plus-g</v-icon>
              </v-btn>

              <v-btn class="mx-2" fab color="black" outlined>
                <v-icon>fab fa-instagram</v-icon>
              </v-btn>

              <h4 class="text-center mt-4">
                Ensure your email for registration
              </h4>
            </div>

            <v-form>
              <v-text-field
                label="Username"
                name="Username"
                prepend-icon="person"
                type="text"
                color="#B71C1C"
                v-model="username"
                :disabled="isLoading"
              />

              <v-text-field
                id="password"
                label="Password"
                name="Password"
                prepend-icon="lock"
                type="password"
                color="#B71C1C"
                v-model="password"
                :disabled="isLoading"
              />
            </v-form>

            <!-- <h3 class="text-right mt-3">Forget your password</h3> -->

            <div class="d-flex justify-end">
              <v-btn @click="handleForgetDialog">Forget your password?</v-btn>
            </div>

            <div class="text-center mt-3">
              <v-btn
                :loading="isLoading"
                @click="handleClick"
                rounded
                dark
                style="background-color: #b71c1c"
              >
                SIGN IN
              </v-btn>
            </div>
          </v-card-text>
        </v-col>

        <v-col
          cols="12"
          md="4"
          style="background-color: #b71c1c; border-radius: 0 12px 12px 0"
        >
          <v-card-text class="text-center white--text">
            <h3 class="display-1">Haven't had an account?</h3>

            <h4 class="my-4">Enter your details and start joining with us!</h4>

            <v-btn
              rounded
              outlined
              dark
              :loading="isLoading"
              @click="$router.push({ path: '/signup' })"
              style="background-color: white; color: #b71c1c"
            >
              SIGN UP
            </v-btn>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <ForgetPwdCRUD
      :forgetPwd="forgetObj"
      :dialog.sync="forgetDialog"
      @handleData="handleForget"
    />
  </v-container>
</template>

<script>
import { forgetPassword } from "@/api/generalAPI";
const newForgetObj = () => {
  return {
    email: "",
    new_password: "",
    confirm_password: "",
  };
};
import { meta } from "../utils/enum";

export default {
  name: "Signin",
  components: {
    ForgetPwdCRUD: () => import("@/components/ForgetPwdCRUD"),
  },
  data: () => ({
    step: 1,
    username: "",
    password: "",
    isLoading: false,
    forgetDialog: false,
    forgetObj: newForgetObj(),
  }),
  methods: {
    handleForgetDialog() {
      this.forgetDialog = true;
      this.forgetObj = newForgetObj();
    },
    handleForget(item) {
      this.forgetDialog = false;
      forgetPassword(item)
        .then((res) => {
          if (res.meta == 2001) {
            this.$toast.success(res.message);
            console.log("item: ", item);
          } else {
            this.$toast.error("Erorr - " + res.meta);
            console.log("Forget Password Error", res);
          }
        })
        .catch((err) => {
          console.log("Forget Password Error", err);
        });
    },
    handleClick() {
      this.isLoading = true;
      this.$store
        .dispatch("Login", { username: this.username, password: this.password })
        .then((res) => {
          if (res.meta == meta.OK) return this.$router.push("/");

          this.$toast.error(res.message);
        })
        .catch((err) => {
          this.$toast.error("Error");
          console.log(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
