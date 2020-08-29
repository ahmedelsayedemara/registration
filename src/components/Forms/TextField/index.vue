<template>
  <ValidationProvider
    :name="name"
    :rules="rules"
    v-slot="{ errors, validated, invalid }"
  >
    <label v-if="label" class="label" :style="labelStyles">{{ label }}</label>
    <span v-if="showRequiredAstric()" class="red--text ml-2">*</span>
    <v-text-field
      v-model="innerValue"
      :error-messages="errors"
        class="text-field"
      :class="{
        'input-disabled': $attrs.disabled,
        'input-error': validated && invalid
      }"
      single-line
      v-bind="$attrs"
      v-on="$listeners"
    ></v-text-field>
  </ValidationProvider>
</template>

<script>
import { fieldMixin } from "@/mixins/FieldMixin";
export default {
  name:"TextField",
  mixins: [fieldMixin],
  props: {
    hideAstric: {
      type: String
    }
  },
  methods: {
    showRequiredAstric() {
      if (this.rules.includes("required") && !this.hideAstric) return true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
