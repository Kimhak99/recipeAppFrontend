<template>
  <h1>This is recipe page</h1>
</template>

<script>
 import UserDashboardLayout from '../layouts/UserDashboardLayout'

  export default {
  // components: { UserDashboardLayout },
    name: 'Recipt',
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