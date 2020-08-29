<template>
  <v-snackbar
    class="snackbar"
    :value="notification.isVisible"
    @input="hideNotification"
    :timeout="notification.isActive ? 0 : 7000"
    :color="notificationTypeColorMap[notification.type]"
    top
  >
    <span>
      {{ notification.message }}
    </span>
    <v-btn
      fab
      flat
      small
      @click="hideNotification"
      class="close-btn"
      :class="{ [`${notification.type}-color`]: notification.type }"
    >
      <v-icon class="close-icon">close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { actionsTypes } from "@/store/modules/notification/types";

export default {
  name:"Alert",
  data() {
    return {
      notificationTypeColorMap: {
        error: "#e74c3c",
        success: "#3EBD93",
        info: "#1992D4",
        warning: "#DE911D",
      },
    };
  },
  computed: {
    ...mapState({
      notification: (state) => state.notification.notification,
    }),
  },
  methods: {
    ...mapActions({
      hideNotification: `notification/${actionsTypes.hideNotification}`,
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>
