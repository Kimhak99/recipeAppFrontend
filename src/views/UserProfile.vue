<template>
  <h1>This is user profile page</h1>
</template>

<script>
 import UserDashboardLayout from '../layouts/UserDashboardLayout'

  export default {
  // components: { UserDashboardLayout },
    name: 'UserProfile',
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