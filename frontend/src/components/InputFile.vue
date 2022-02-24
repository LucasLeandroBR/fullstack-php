<script setup lang="ts">
import useProduct from '@/store/products'

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const files = target.files;
  if (files && files.length) {
    useProduct.file = files[0];
  }
}

</script>

<template>
  <div class="flex justify-center">
    <div class="">
      <input
      @change.once="onChange"
      class="
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile">
    </div>
  </div>

</template>

<style scoped>

input[type="file"] {
  appearance: none;
  align-items: baseline;
  text-overflow: ellipsis;
  white-space: pre;
  text-align: start !important;
  overflow: hidden !important;
}
</style>
