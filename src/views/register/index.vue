<template>
  <div>
    <v-container fluid>
      <v-layout wrap class="register-layout">
        <v-flex md4 class="register-right-side ">
          <div class="register-image">
            <h1>مرحباً بعودتك</h1>
            <p>
              بالدخول الى المنصه يمكنكم الاطلاع و إداره كل ما يتعلق بإجتماعاتكم
              بيسر ومرونه
            </p>
          </div>
        </v-flex>
        <v-flex md8>
          <div class="register-form">
            <RegisterForm />
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm";
export default {
  components: {
    RegisterForm,
  },
};
</script>

<style lang="scss" scoped>
@import "./index";
</style>
