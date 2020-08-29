import Vue from "vue";

import { ValidationProvider, ValidationObserver } from "vee-validate";
import Loader from "@/components/Loader";
import Alert from "@/components/Alert";
import TextField from "@/components/Forms/TextField";
import SelectField from "@/components/Forms/SelectField";
const components = {
  ValidationProvider,
  ValidationObserver,
  Alert,
  Loader,
  TextField,
  SelectField,
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
