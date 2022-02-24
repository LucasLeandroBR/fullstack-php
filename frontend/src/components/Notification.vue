<script setup lang="ts">
import { PropType } from "vue";

defineProps({
  type: {
    type: String as PropType<'success' | 'danger' | 'warning' | 'info'>,
    required: true,
    validator: (value: string) => ['success', 'danger', 'warning', 'info'].includes(value)
  }
})

</script>

<template>
  <div
    class="text-sm lg:text-lg py-4 px-2 leading-relaxed text-white rounded"
    :class="{
      'bg-green-500': type === 'success',
      'bg-red-500': type === 'danger',
      'bg-orange-500': type === 'warning',
      'bg-blue-500': type === 'info',
    }"
  >
    <slot></slot>
  </div>
</template>
