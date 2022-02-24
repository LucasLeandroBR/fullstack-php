<script setup lang="ts">
import UpdateProduct from "@/components/UpdateProduct.vue";
import useProduct from "@/store/products";
import Container from "@/components/Container.vue";
import {onMounted} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()

onMounted((() => {
  useProduct.findProduct(route.params.id);
}));

</script>

<template>
 <Container>

   <h1 class="text-4xl border-b pb-4 font-semibold">Edit Product</h1>

   <div class="my-10">
     <UpdateProduct />
   </div>
 </Container>
</template>
