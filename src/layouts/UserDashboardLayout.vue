<template>
    <v-app>
        <AppBar/>
        <Sidebar/>
        <slot/>
        <Footer/>
    </v-app>
</template>

<script>

export default {
  name: 'UserDashboardLayout',

 components: {
    // View: () => import("../views/core/View"),
    AppBar: () => import("../views/core/AppBar"),
    Sidebar: () => import("../views/core/Sidebar"),
    Footer: () => import("../views/core/Footer"),
 }
};
</script>
