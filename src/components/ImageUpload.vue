<template>
  <div class="mt-4">
    <v-btn
      elevation="0"
      height="100px"
      width="100px"
      :style="`background-image: url(${profilePic}); background-position: 50% 0; background-size: cover; background-color: rgba(0, 0, 0, 0)}`"
      class="btnStyle"
    >
      <v-icon @click="imgClick" color="white">fas fa-camera</v-icon>
      <span v-if="image">&nbsp;&nbsp;</span>
      <v-icon v-if="image" @click="imgRemove" color="white"
        >fas fa-times-circle</v-icon
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
    imgRemove() {
      this.$emit("update:image", undefined);
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

<style lang="scss" scoped>
.btnStyle {
  border-radius: 50%;
  align-items: center;
  border: 1px solid silver;
  /* background: grey; */
}

.v-icon:hover:before {
  background: black;
  opacity: 0.5;
  padding: 6px;
  border-radius: 50%;
}
</style>