<template>
  <div
    :class="
      this.$vuetify.breakpoint.smAndUp
        ? 'myClass elevation-4'
        : 'myXs elevation-4'
    "
  >
    <v-btn
      @click="imgClick"
      elevation="0"
      height="100%"
      width="100%"
      :style="
        'background-image: url(' +
        profilePic +
        '); background-position: 50% 0; background-size: cover; background-color: rgba(0, 0, 0, 0)'
      "
    >
    </v-btn>

    <v-file-input
      v-model="tempImage"
      name="file"
      ref="avatarUpload"
      class="pa-0 ma-0 mt-1"
      label="Avatar"
      prepend-icon=""
      :hide-input="true"
      accept="image/jpeg, image/png"
    />
  </div>
</template>

<script>
import basicConfig from "@/utils/basicConfig";

export default {
  name: "ImageUpload",
  props: {
    image: File,
    avatar: String,
    defaultImg: {
      type: String,
      default: function () {
        return basicConfig.blank_profile_img; //blank image
      },
    },
  },
  methods: {
    imgClick() {
      this.$refs.avatarUpload.$refs.input.click();
    },
  },
  computed: {
    profilePic: function () {
      return this.image == undefined
        ? this.avatar != ""
          ? basicConfig.file_url + this.avatar
          : this.defaultImg
        : URL.createObjectURL(this.image);
    },
    tempImage: {
      get: function () {
        return this.image;
      },
      set: function (value) {
        console.log("value: ", value);
        value.type == "image/jpeg" || value.type == "image/png"
          ? this.$emit("update:image", value)
          : this.$toast.error("Please Upload Image Only");
      },
    },
  },
};
</script>

<style>
.myClass {
  width: 100%;
  height: 100%;
}
.myXs {
  width: 30rem;
  height: 25rem;
}
</style>