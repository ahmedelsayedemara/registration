<template>
  <div v-if="isLoading">
    <div class="page-preloader">
      <span class="spinner"></span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Loader",
  computed: {
    ...mapState({
      isLoading: (state) => state.loader.isLoading,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>
