<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-row class="fill-height">
                <v-col cols="12" md="4" style="background-color: #b71c1c">
                  <v-card-text class="white--text mt-12">
                    <h3 class="text-center display-1">Welcome Back!</h3>
                    <h4 class="text-center my-4 mb-8">
                      To Keep connected with us, please log in!
                    </h4>
                  </v-card-text>
                  <div class="text-center mt-8">
                    <v-btn
                      rounded
                      outlined
                      dark
                      @click="$router.push({ name: 'Signin' }).catch(() => {})"
                      style="background-color: white; color: #b71c1c"
                      >SIGN IN</v-btn
                    >
                  </div>
                </v-col>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <h1 class="text-center display-2">
                      <span style="color: #b71c1c">Create an Account</span>
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
                    </div>
                    <h4 class="text-center mt-4">
                      Ensure your email for registration
                    </h4>
                    <v-form>
                      <v-row>
                        <v-col>
                          <v-text-field
                            label="Firstname"
                            name="Firstname"
                            prepend-icon="person"
                            type="text"
                            color="#B71C1C"
                          />
                        </v-col>
                        <v-col>
                          <v-text-field
                            label="Lastname"
                            name="Lastname"
                            type="text"
                            color="#B71C1C"
                          />
                        </v-col>
                      </v-row>
                      <v-text-field
                        label="Username"
                        name="Username"
                        prepend-icon="person"
                        type="text"
                        color="#B71C1C"
                      />
                      <v-text-field
                        label="Email"
                        name="Email"
                        prepend-icon="email"
                        type="text"
                        color="#B71C1C"
                      />
                      <v-text-field
                        label="Password"
                        name="Password"
                        prepend-icon="lock"
                        type="text"
                        color="#B71C1C"
                      />
                      <v-text-field
                        label="Confirm Password"
                        name="ConfirmPassword"
                        prepend-icon="lock"
                        type="text"
                        color="#B71C1C"
                      />
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-n5">
                    <v-btn
                      @click="handleClick"
                      rounded
                      dark
                      style="background-color: #b71c1c"
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
import UserDashboardLayout from "../layouts/UserDashboardLayout";

export default {
  // components: { UserDashboardLayout },
  name: "Signup",
  created() {
    this.$emit(`update:layout`, UserDashboardLayout);
  },
  methods: {
    handleClick() {
      this.$store
        .dispatch("getUserInfo") //what is ur login info
        .then((res) => console.log(res))
        .catch(console.log);
    },
  },
};
</script>
<style>
h1 {
  color: #b71c1c;
}
</style>