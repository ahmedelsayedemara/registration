<template>
  <ValidationProvider
    :name="name"
    :rules="rules"
    v-slot="{ errors, validated, invalid }"
  >
    <div class="select-field" :style="{ width: widthSelect }">
      <label class="label" :style="labelStyles">{{ label }}</label>
      <span v-if="showRequiredAstric()" class="red--text ml-2">*</span>
      <v-select
        v-if="!showDropdownMenuSearch"
        :items="options"
        v-model="innerValue"
        :error-messages="errors"
        :item-text="itemText"
        class="text-field"
        :class="{
          'input-disabled': $attrs.disabled,
          'input-error': validated && invalid,
        }"
        v-bind="$attrs"
        v-on="$listeners"
      >
        <template v-slot:append-item>
          <slot></slot>
        </template>
      </v-select>

      <v-overflow-btn
        editable
        v-else
        :items="options"
        v-model="innerValue"
        :error-messages="errors"
        :item-text="itemText"
        class="text-field v-select"
        :class="{
          'input-disabled': $attrs.disabled,
          'input-error': validated && invalid,
        }"
        v-bind="$attrs"
        v-on="$listeners"
      >
        <template slot="item" slot-scope="data">
          
          <strong>{{ data.item.label }}</strong>
        </template>
      </v-overflow-btn>
    </div>
  </ValidationProvider>
</template>

<script>
import { fieldMixin } from "@/mixins/FieldMixin";

export default {
  name: "SelectField",
  mixins: [fieldMixin],

  props: {
    options: {
      type: Array,
      required: true,
    },
    itemText: {
      type: String,
    },
    widthSelect: {
      type: String,
    },
    showDropdownMenuSearch: {
      type: Boolean,
    }, 
  },
  methods: {
    showRequiredAstric() {
      if (this.rules.includes("required")) return true;
    },
  }, 
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
