<template>
  <v-dialog v-model="dialogDelete" max-width="500px">
    <v-card>
      <v-card-title class="display-2 pa-2 deleteTitle">
        <!-- {{ $vuetify.lang.t("$vuetify.delCurrentPersonInfo") }} -->
        {{ message || `Are you sure you want to delete ${ deleteObj[objKey] || `this record` } ?`}}
      </v-card-title>

      <v-card-actions>
        <v-spacer />

        <v-btn
          color="blue darken-1"
          outlined
          @click="$emit('update:dialogDelete', false)"
        >
          Cancel
        </v-btn>

        <v-spacer />

        <v-btn color="red darken-1" @click="$emit('handleDelete', deleteObj)">
          Confirm
        </v-btn>

        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DeleteDialog",
  props: { dialogDelete: Boolean, deleteObj: Object, objKey: String, message: String },
};
</script>
