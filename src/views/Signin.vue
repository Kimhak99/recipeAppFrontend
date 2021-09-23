<template>
  <v-app>
    <home />
    <v-content>
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
                      <span style="color: #b71c1c"
                        >Sign in to The Recipe</span
                      >
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
                      />

                      <v-text-field
                        id="password"
                        label="Password"
                        name="Password"
                        prepend-icon="lock"
                        type="password"
                        color="#B71C1C"
                      />
                    </v-form>
                    <h3 class="text-center mt-3">Forget your password</h3>
                  </v-card-text>
                  <div class="text-center mt-3">
                    <v-btn @click="handleClick" rounded dark style="background-color: #b71c1c">
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
    </v-content>
  </v-app>
</template>

<script>
import UserDashboardLayout from "../layouts/UserDashboardLayout";

export default {
  // components: { UserDashboardLayout },
  name: "Signin",
  created() {
    this.$emit(`update:layout`, UserDashboardLayout);
  },
  data: () => ({
    step: 1,
  }),
  props: {
    source: String,
  },
  methods: {
    handleClick() {
      this.$store
        .dispatch("Login", { username: "samantha", password: "admin123" }) //what is ur login info //its cmt out before i comment out, the token is generate using that account okay
        .then((res) => {
          console.log(res);
          this.$router.push("/")
        })
        .catch(console.log);
    },
  },
};
</script>

<style>
.test {
  color: #b71c1c;
}
</style>