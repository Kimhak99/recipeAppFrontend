<template>
    <v-card elevation="2">
        <v-breadcrumbs :items="navigationItems" divider="/" />
    </v-card>
</template>

<script>
export default {
    name: "pageNavigation",
    computed: {
        navigationItems() {
            return this.$route.matched.map(e => { return { text: this.$t(e.meta.title )}});
        },
    }
}
</script>
