<script setup lang="ts">
import Input from "@/components/Input.vue";
import useProduct from "@/store/products"

import {useRoute} from "vue-router";
const route = useRoute()

</script>

<template>
  <div v-if="useProduct.product">

    <Input type="text" validator-field="title" label="Title" v-model="useProduct.product.title" />
    <Input type="text" validator-field="type" label="Type" v-model="useProduct.product.type" />
    <Input type="number" validator-field="price" label="Price" v-model="useProduct.product.price"  />

    <div class="flex justify-end mt-10">
      <button
          @click="useProduct.updateItem(route.params.id.toString())"
          class="rounded bg-blue-500 px-12 py-2 text-white"
      >
        Save
      </button>
    </div>

  </div>
</template>

