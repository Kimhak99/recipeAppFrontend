<template>
  <v-app>
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
                        <h1 class="text-center display-2 text-accent-3"><span style="color: #B71C1C">Sign in to The Foodie's Tongue</span></h1>
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
                          <h4 class="text-center mt-4">Ensure your email for registration</h4>
                        </div>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="teal accent-3"
                            />
                  
                          <v-text-field
                            id="password"
                            label="Password"
                            name="Password"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                            />
                        </v-form>
                        <h3 class="text-center mt-3">Forget your password</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded dark style="background-color: #B71C1C;">
                          SIGN IN
                        </v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" style="background-color: #B71C1C">
                      <v-card-text class="white--text mt-12">
                        <h3 class="text-center display-1">Haven't had an account?</h3>
                        <h4 class="text-center my-4 mb-8">Enter your details and start joining with us!</h4>
                      </v-card-text>
                      <div class="text-center mt-8">
                        <v-btn rounded outlined dark @click="$router.push({ name: 'Signup' }).catch(() => {})" style="background-color: white; color: #B71C1C">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                <!-- </v-window-item>
                 <v-window-item :value="2">
                   <v-row class="fill-height">
                     <v-col cols="12" md="4" style="background-color: #B71C1C">
                       <v-card-text class="white--text mt-12">
                         <h3 class="text-center display-1">Welcome Back!</h3>
                         <h4 class="text-center my-4 mb-8">To Keep connected with us, please log in!</h4>
                       </v-card-text>
                       <div class="text-center mt-8">
                         <v-btn rounded outlined dark @click="step--" style="background-color: white; color: #B71C1C">SIGN IN</v-btn>
                       </div>
                     </v-col>
                     <v-col cols="12" md="8">
                       <v-card-text class="mt-12">
                         <h1 class="text-center display-2"><span style="color: #B71C1C">Create an Account</span></h1>
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
                         <h4 class="text-center mt-4">Ensure your email for registration</h4>
                         <v-form>
                           <v-row>
                             <v-col>
                               <v-text-field
                                label="Firstname"
                                name="Firstname"
                                prepend-icon="person"
                                type="text"
                              />
                             </v-col>
                             <v-col>
                               <v-text-field
                                label="Lastname"
                                name="Lastname"
                                type="text"
                              />
                             </v-col>
                           </v-row>                
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                          />
                           <v-text-field
                            label="Username"
                            name="Username"
                            prepend-icon="person"
                            type="text"
                          />
                          <v-text-field
                            label="Password"
                            name="Password"
                            prepend-icon="lock"
                            type="text"
                          />
                          <v-text-field
                            label="Confirm Password"
                            name="ConfirmPassword"
                            prepend-icon="lock"
                            type="text"
                          />
                         </v-form>
                       </v-card-text>
                       <div class="text-center mt-n5">
                         <v-btn rounded dark style="background-color: #B71C1C;">SIGN UP</v-btn>
                       </div>
                     </v-col>
                   </v-row>
                </v-window-item> -->
              <!-- </v-window> -->
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
 import UserDashboardLayout from '../layouts/UserDashboardLayout'

  export default {
  // components: { UserDashboardLayout },
    name: 'Signin',
    created(){
      this.$emit(`update:layout`, UserDashboardLayout);
    },
    data: () => ({
      step: 1
    }),
    props: {
      source: String
    }
  }
</script>

<style>
  .test{
    color: #B71C1C
  }
</style>