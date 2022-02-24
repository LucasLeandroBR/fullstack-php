<template>
  <button
    class="px-4 py-2 bg-blue-500 text-white font-semibold rounded"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>
