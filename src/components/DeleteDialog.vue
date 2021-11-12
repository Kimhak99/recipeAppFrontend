<template>
  <v-dialog v-model="dialogDelete" max-width="500px">
    <v-card class="pa-0" elevation="2">
      <v-card-title class="">
        <v-icon mini color="red" class="mt-1 mr-2">mdi-message-alert</v-icon>
        <!-- {{ $vuetify.lang.t("$vuetify.delCurrentPersonInfo") }} -->
        <span>{{
          message ||
          `Are you sure you want to delete ${
            deleteObj[objKey] || `this record`
          } ?`
        }}</span>
      </v-card-title>

      <v-card-actions class="pb-6 pr-8">
        <v-spacer />
        <v-btn
          color="blue darken-1"
          outlined
          @click="$emit('update:dialogDelete', false)"
        >
          Cancel
        </v-btn>

        <v-btn color="red darken-1" @click="$emit('handleDelete', deleteObj)">
          Confirm
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DeleteDialog",
  props: {
    dialogDelete: Boolean,
    deleteObj: Object,
    objKey: String,
    message: String,
  },
};
</script>
