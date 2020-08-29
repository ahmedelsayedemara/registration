<template>
  <div>
    <v-container fluid>
      <v-layout wrap class="register-layout">
        <v-flex md6 class="register-right-side ">
          <div class="register-image">
            <h1>مرحباً بعودتك</h1>
            <p>
              بالدخول الى المنصه يمكنكم الاطلاع و إداره كل ما يتعلق بإجتماعاتكم
              بيسر ومرونه
            </p>
          </div>
        </v-flex>
        <v-flex md6>
          <div class="activate-layout">
            <v-img
              :src="require('@/assets/images/logo.svg')"
              class="logo"
            ></v-img>

            <div class="login-container">
              <span class="border-outline active">{{ slug }}</span>
              <router-link to="/" class="border-outline"
                >تسجيل الدخول</router-link
              >
            </div>
            <div class="active-user">
              <ActivateUser :email="email" :code="code" :slug="slug" />
            </div>
            <v-flex sm12 pa-1 class="text-left">
              <v-btn class="btn-primary">
                التالى
                <v-icon>keyboard_arrow_left</v-icon>
              </v-btn>
            </v-flex>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import ActivateUser from "@/components/ActivateUser";
export default {
  components: {
    ActivateUser,
  },
  data() {
    return {
      email: this.$route.query.email,
      code: this.$route.query.code,
      slug: this.$route.query.slug,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>
