<template>
  <v-container
    class="d-flex justify-center align-items-center fill-height"
    fluid
  >
    <!-- u dont need the above row and col, jsut fyi -->
    <v-card class="elevation-4" style="border-radius: 12px">
      <v-row no-gutters>
        <v-col
          cols="12"
          md="4"
          style="background-color: #b71c1c; border-radius: 12px 0 0 12px"
        >
          <v-card-text class="text-center white--text">
            <h3 class="display-1">Welcome Back!</h3>
            <h4 class="my-4">
              To Keep connected with us, please log in!
            </h4>
            <v-btn
              rounded
              outlined
              dark
              @click="$router.push({ path: '/signin' })"
              style="background-color: white; color: #b71c1c"
              >SIGN IN</v-btn
            >
          </v-card-text>
        </v-col>

        <v-col cols="12" md="8" style="border-radius: 12px">
          <v-card-text>
            <div class="display-2" style="color: #b71c1c">
              Create an Account
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
            </div>
            <h4 class="text-center mt-4">
              Ensure your email for registration
            </h4>
            <v-form v-model="valid" ref="form" lazy-validation>
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
                    :rules="Rules"
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
                    :rules="Rules"
                    color="#B71C1C"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Username"
                    name="Username"
                    prepend-icon="person"
                    v-model="obj.username"
                    :rules="Rules"
                    type="text"
                    color="#B71C1C"
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Email"
                    name="Email"
                    prepend-icon="email"
                    v-model="obj.email"
                    :rules="Rules"
                    type="text"
                    color="#B71C1C"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col>
                  <v-text-field
                    label="Password"
                    name="Password"
                    v-model="obj.password"
                    :rules="Rules"
                    prepend-icon="lock"
                    type="text"
                    color="#B71C1C"
                  />
                </v-col>
                <v-col>
                  <v-text-field
                    label="Confirm Password"
                    name="ConfirmPassword"
                    :rules="[Rules, matchingPasswords]"
                    v-model="obj.confirmPassword"
                    prepend-icon="lock"
                    type="text"
                    color="#B71C1C"
                  />
                </v-col>
              </v-row>
            </v-form>
            <div class="text-center mt-3">
              <v-btn
                @click="validate"
                rounded
                dark
                style="background-color: #b71c1c"
                >SIGN UP</v-btn
              >
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

//TODO:: clear form
<script>
// import UserDashboardLayout from "../layouts/UserDashboardLayout";
// eslint-disable-next-line
import { addUser } from "@/api/user";
import { uploadProfileSignup } from "@/api/generalAPI";

const newObj = () => {
  return {
    id: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
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
    valid: false,
    uploadedImg: undefined,
    obj: newObj(),
    Rules: [(v) => !!v || "this field is required"],
  }),
  methods: {
    // handleClick() {
    //   this.$store
    //     .dispatch("getUserInfo") //what is ur login info
    //     .then((res) => console.log(res))
    //     .catch(console.log);
    // },
    async validate() {
      if (this.$refs.form.validate()) {
        if (this.uploadedImg != undefined && this.uploadedImg != "") {
          const fileImageForm = new FormData();
          fileImageForm.append("file", this.uploadedImg);

          await uploadProfileSignup(fileImageForm)
            .then((res) => {
              if (res.meta === 201) {
                this.obj.profile_image = res.file.filename;
                return;
              }

              console.log(res);
              this.$toast.error(res.message);
              return;
            })
            .catch((err) => {
              console.log(err);
              this.$toast.error(err.message);
            });
        }

        addUser(this.obj)
          .then((res) => {
            if (res.meta == 2001) {
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
      }
      this.$refs.form.reset();
      this.resetForm();
    },
    matchingPasswords: function() {
      if (this.obj.password === this.obj.confirmPassword) {
        return true;
      } else {
        return "Passwords do not match.";
      }
    },
  },
};
</script>
<style>
h1 {
  color: #b71c1c;
}
</style>
