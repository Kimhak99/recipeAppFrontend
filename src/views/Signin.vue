<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <!-- <v-window v-model="step">
                <v-window-item :value="1"> -->
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2 text-accent-3">
                      <span style="color: #b71c1c">Sign in to The Recipe</span>
                    </h1>
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
                    <h3 class="text-center mt-3">Forget your password</h3>
                  </v-card-text>
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
                </v-col>
                <v-col cols="12" md="4" style="background-color: #b71c1c">
                  <v-card-text class="white--text mt-12">
                    <h3 class="text-center display-1">
                      Haven't had an account?
                    </h3>
                    <h4 class="text-center my-4 mb-8">
                      Enter your details and start joining with us!
                    </h4>
                  </v-card-text>
                  <div class="text-center mt-8">
                    <v-btn
                      rounded
                      outlined
                      dark
                      :loading="isLoading"
                      @click="$router.push({ name: 'Signup' }).catch(() => {})"
                      style="background-color: white; color: #b71c1c"
                      >SIGN UP</v-btn
                    >
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { meta } from "../utils/enum";

export default {
  name: "Signin",
  data: () => ({
    step: 1,
    username: "",
    password: "",
    isLoading: false,
  }),
  methods: {
    handleClick() {
      console.log(this.username, this.password);

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

<style>
.test {
  color: #b71c1c;
}
</style>