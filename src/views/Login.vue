<template>
  <v-app>
    <h1>This is a login page</h1>
  </v-app>
</template>

<script>
 import UserDashboardLayout from '../layouts/UserDashboardLayout'

  export default {
  // components: { UserDashboardLayout },
    name: 'Login',
    created(){
      this.$emit(`update:layout`, UserDashboardLayout);
    }
  }
</script>

<style>
  h1{
    color: #B71C1C
  }
</style>