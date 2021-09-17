<template>
    <v-app>
    <h1>This is a signup page</h1>
  </v-app>
</template>

<script>
 import UserDashboardLayout from '../layouts/UserDashboardLayout'

  export default {
  // components: { UserDashboardLayout },
    name: 'Signup',
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