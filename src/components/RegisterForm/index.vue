<template>
  <div data-app>
    <ValidationObserver v-slot="{ passes }">
      <v-form @submit.prevent="passes(handlerRegister)">
        <v-layout wrap>
          <v-flex sm6 pa-1>
            <TextField
              v-model="form.title_ar"
              name="title_ar"
              label="اسم المنشأه بالعربية"
              type="text"
              rules="required"
            />
          </v-flex>
          <v-flex sm6 pa-1>
            <TextField
              v-model="form.title_en"
              name="title_en"
              label="اسم المنشأه بالانجليزية"
              type="text"
              rules="required"
            />
          </v-flex>
          <v-flex sm12 pa-1>
            <TextField
              v-model="form.slug"
              name="slug"
              label="اسم المنشأه "
              type="text"
              rules="required"
              prefix=".majles.tech"
            />
          </v-flex>
          <v-flex sm12 pa-1>
            <TextField
              v-model="form.mobile"
              name="mobile"
              label="رقم الجوال"
              type="text"
              rules="required|numeric"
            />
          </v-flex>
          <v-flex sm6 pa-1>
            <TextField
              v-model="form.account_ar"
              name="account_ar"
              label="اللقب بالعربية"
              type="text"
              rules="required"
            />
          </v-flex>
          <v-flex sm6 pa-1>
            <TextField
              v-model="form.account_en"
              name="account_en"
              label="اللقب بالانجليزية"
              type="text"
              rules="required"
            />
          </v-flex>
          <v-flex sm6 pa-1>
            <TextField
              v-model="form.name_ar"
              name="name_ar"
              label="الاسم بالعربية"
              type="text"
              rules="required"
            />
          </v-flex>
          <v-flex sm6 pa-1>
            <TextField
              v-model="form.name_en"
              name="name_en"
              label="الاسم بالانجليزية"
              type="text"
              rules="required"
            />
          </v-flex>
          <v-flex sm6 pa-1>
            <TextField
              v-model="form.email"
              name="email"
              label="البريد الالكتروني"
              type="text"
              rules="required|email"
            />
          </v-flex>
          <v-flex sm6 pa-1>
            <TextField
              v-model="form.password"
              name="password"
              label="كلمة المرور"
              type="password"
              rules="required|verify_password"
            />
          </v-flex>
          <v-flex sm6 pa-1>
            <TextField
              v-model="form.password_confirmation"
              name="password_confirmation"
              label="تاكيد كلمه المرور"
              type="password"
              rules="required|confirmed:password"
            />
          </v-flex>
          <v-flex sm6 pa-1>
            <SelectField
              v-model="form.nationality_id"
              name="nationality"
              label="الجنسية"
              return-object
              :options="nationalities"
              item-text="name"
              item-value="id"
              rules="required"
            />
          </v-flex>

          <v-flex sm12 pa-1 class="text-left">
            <v-btn class="btn-primary" type="submit">
              دخول
              <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-form>
    </ValidationObserver>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { executeRequest } from "@/api/helpers/executeRequest";
import {
  getLoadNationalitiesRequest,
  getRegisterRequest,
} from "@/api/auth/index";
import { actionsTypes } from "@/store/modules/notification/types";

export default {
  name: "RegisterForm",
  data() {
    return {
      nationalities: [],
      form: {
        email: "",
        mobile: "",
        password: "",
        password_confirmation: "",
        title_en: "",
        title_ar: "",
        name_ar: "",
        name_en: "",
        nationality_id: "",
        account_en: "",
        account_ar: "",
        slug: "",
        activate_link: "http://localhost:8080/activate-user",
        role_id: 1,
      },
    };
  },
  created() {
    this.getLoadNationalities();
  },

  methods: {
    ...mapActions({
      showNotification: `notification/${actionsTypes.showNotification}`,
    }),
    getLoadNationalities() {
      executeRequest(getLoadNationalitiesRequest())
        .then(({ data }) => { 
          this.nationalities = data.result.nationalities;
        })
        .catch(() => {
          this.showNotification({
            type: "error",
            message: "هناك خطأ ما, من فضلك حاول مره أخري",
          });
        });
    },
    handlerRegister() {
      const body = {
        ...this.form,
        nationality_id: this.form.nationality_id.id,
      };
      executeRequest(getRegisterRequest(body))
        .then(({ data }) => {
          if (data.isError) {
            this.showNotification({
              type: "error",
              message: "إسم المنشأه موجود",
            });
          } else {
            this.showNotification({
              type: "success",
              message: "تم تسجيل المستخدم بنجاح,من فضلك راجع بريدك الالكتروني ",
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
