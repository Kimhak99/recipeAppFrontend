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
                            :avatar="obj.profile_image"
                          />

                          <!-- <img :src="blankProfile" alt="" /> -->
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col>
                          <v-text-field
                            label="Firstname"
                            name="Firstname"
                            prepend-icon="person"
                            v-model="obj.firstname"
                            type="text"
                            color="#B71C1C"
                          />
                        </v-col>
                        <v-col>
                          <v-text-field
                            label="Lastname"
                            name="Lastname"
                            type="text"
                            prepend-icon="person"
                              v-model="obj.lastname"
                            color="#B71C1C"
                          />
                        </v-col>
                      </v-row>
                      <v-text-field
                        label="Username"
                        name="Username"
                        prepend-icon="person"
                          v-model="obj.username"
                        type="text"
                        color="#B71C1C"
                      />
                      <v-text-field
                        label="Email"
                        name="Email"
                        prepend-icon="email"
                          v-model="obj.email"
                        type="text"
                        color="#B71C1C"
                      />
                      <v-text-field
                        label="Password"
                        name="Password"
                          v-model="obj.password"
                        prepend-icon="lock"
                        type="text"
                        color="#B71C1C"
                      />
                      <v-text-field
                        label="Confirm Password"
                        name="ConfirmPassword"
                        v-model="confirmPassword"
                        prepend-icon="lock"
                        type="text"
                        color="#B71C1C"
                      />
                    </v-form>
                  </v-card-text>
                  <div class="text-center mt-n5">
                    <v-btn
                      @click="validate"
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
// import UserDashboardLayout from "../layouts/UserDashboardLayout";
import { addUser } from "@/api/user";

const newObj = () => {
  return {
    id: "",
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    profile_image: "",
    is_admin: Boolean,
    is_active: Boolean,
  };
};

export default {
  // components: { UserDashboardLayout },
  components: {
    ImageUpload: () => import("@/components/ImageUpload"),
  },
  name: "Signup",
  // created() {
  //   this.$emit(`update:layout`, UserDashboardLayout);
  // },
  data: () => ({
    confirmPassword: "",
    uploadedImg: undefined,
    obj: newObj(),
  }),
  methods: {
    // handleClick() {
    //   this.$store
    //     .dispatch("getUserInfo") //what is ur login info
    //     .then((res) => console.log(res))
    //     .catch(console.log);
    // },
    async validate() {
      if (this.obj.profile_image != undefined && this.obj.profile_image != "") {
        const fileImageForm = new FormData();
        fileImageForm.append("file", this.obj.profile_image);

        await uploadFile(fileImageForm)
          .then((res) => {
            this.obj.profile_image = res.file.filename;
          })
          .catch(console.log);
      }
       addUser(this.obj)
          .then((res) => {
            if (res.meta == 2001) {
              this.getData();
              this.$toast.success(res.message); //you are trying to access this component, when it does not exist or properly intergrade
              console.log("added item: ", this.obj);
            } else {
              this.$toast.error("Erorr - " + res.meta);
              console.log("Add User Error", res);
            }
          })
          .catch((err) => {
            console.log("Add User Error", err);
          });
    },
  },
};
</script>
<style>
h1 {
  color: #b71c1c;
}
</style>
