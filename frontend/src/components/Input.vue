<script setup lang="ts">
import Icon from "./Icon.vue";
import Validator from '@/validators/form';

const props = defineProps<{
  label?: string;
  validatorField?: string;
  modelValue: any;
  type: string;
}>()

const emits = defineEmits(['update:modelValue'])

const onInput = (e: Event) => {
  const { value } = e.target as HTMLInputElement;
  Validator.clear(props.validatorField);
  emits("update:modelValue", value);
};

</script>

<template>
  <div class="mt-2">
    <label class="font-semibold leading-relaxed">{{ label }}</label>
    <div class="relative mt-2">
      <input :type="type || 'text' " :class="[{'border-red-500': Validator.has(validatorField)}]" class="w-full px-4 py-2 border rounded-md" @input="onInput" :value="modelValue" @change="Validator.clear(validatorField)" />
      <Icon v-if="Validator.has(validatorField)" class="absolute top-0 right-0 p-2 text-red-500" name="exclamation-circle" />
    </div>
    <div v-if="Validator.has(validatorField)" class="flex items-center mt-2">
      <span class="text-sm text-red-500">{{ Validator.get(validatorField).message }}</span>
    </div>
  </div>
</template>
