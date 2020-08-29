<template>
  <div id="app">
    <Alert />
    <Loader />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
import { actionsTypes } from "@/store/modules/loader/types";

export default {
  created() {
    this.enableInterceptor();
  },
  methods: {
    ...mapActions({
      showLoader: `loader/${actionsTypes.showLoader}`,
      hideLoader: `loader/${actionsTypes.hideLoader}`,
    }),
    enableInterceptor() {
      axios.interceptors.request.use(
        (config) => {
          this.showLoader();
          return config;
        },
        (error) => {
          this.isLoading = false;
          return Promise.reject(error);
        }
      );

      axios.interceptors.response.use(
        (response) => {
          this.hideLoader();
          return response;
        },
        function(error) {
          this.hideLoader();
          return Promise.reject(error);
        }
      );
    },
  },
};
</script>

<style lang="scss">
body {
  background: $primary-color;
  direction: rtl;
  font-family: $font-Cairo;
}
.text-left {
  text-align: left;
}
</style>
