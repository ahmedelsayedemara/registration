<template>
  <div>
    <v-layout wrap>
      <v-flex sm12 pa-1>
        <TextField
          v-model="slug"
          name="slug"
          label="اسم المنشأه"
          type="text"
          prefix=".majles.tech"
          disabled
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { executeRequest } from "@/api/helpers/executeRequest";
import { getActivateEmailAccountRequest } from "@/api/auth/index";
import { actionsTypes } from "@/store/modules/notification/types";

export default {
  name: "ActivateUser",
  props: {
    email: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.handlerActiveUser();
  },
  methods: {
    ...mapActions({
      showNotification: `notification/${actionsTypes.showNotification}`,
    }),

    handlerActiveUser() {
      const body = {
        email: this.email,
        code: this.code,
        slug: this.slug,
      };
      executeRequest(getActivateEmailAccountRequest(body))
        .then(({ data }) => {
          if (data.isError) {
            this.showNotification({
              type: "error",
              message: "كود خطأ, من فضلك حاول مره أخري",
            });
          } else {
            this.showNotification({
              type: "success",
              message: "تم تفعيل المستخدم بنجاح",
            });
          }
        })
        .catch(() => {
          this.showNotification({
            type: "error",
            message: "هناك خطأ ما, من فضلك حاول مره أخري",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>
