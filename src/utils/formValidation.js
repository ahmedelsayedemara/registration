import { extend } from "vee-validate";
import { required, email, numeric, confirmed } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "هذاالحقل مطلوب",
});

extend("email", {
  ...email,
  message: "من فضلك ادخل البريد الالكتروني بشكل صحيح ",
});

extend("numeric", {
  ...numeric,
  message: "من فضلك ادخل الرقم بشكل صحيح",
});

extend("confirmed", {
  ...confirmed,
  message: "كلمة المرور غير مطابقة",
});
extend("verify_password", {
  message: `يجب أن تتكون كلمة المرور من 8 خانات تتضمن حروف وأرقام ورمزًا واحدًا على الأقل`,
  validate: (value) => {
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    return strongRegex.test(value);
  },
});
