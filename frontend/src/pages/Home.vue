<script setup lang="ts">
import { onMounted } from "vue";
import Container from "@/components/Container.vue";
import Notification from "@/components/Notification.vue";
import InputFile from "@/components/InputFile.vue";
import Button from "@/components/Button.vue";
import Table from "@/components/Table.vue";
import useProduct from "@/store/products";
import Paginate from "@/components/Paginate.vue";
import Icon from "@/components/Icon.vue";

onMounted(() => {
  useProduct.getProducts();
});
</script>

<template>
  <Container>
    <Notification type="info" class="flex space-x-4">
      <Icon name="info" class="text-2xl text-white" />
      <p>
        {{ useProduct?.products?.total ? `Atualmente temos um total de ${ useProduct.products.total } no banco de dados.` : 'No products found, please upload your file.'  }}
      </p>
    </Notification>

    <div class="my-10">
      <div class="flex items-center justify-center space-x-4">
        <InputFile  />
        <Button @click.capture="useProduct.upload"> Upload </Button>
      </div>
    </div>

    <Table
        v-if="useProduct?.products"
        :data="useProduct.products.data"
    >
      <template #actions="{ itemId }">
        <button
            @click="$router.push(`/product/${itemId}`)"
            class="rounded bg-blue-500 px-3 py-1 text-white"
        >
          Edit
        </button>
        <button
            @click="useProduct.deleteItem(itemId)"
            class="rounded bg-red-500 px-3 py-1 text-white"
        >
          Delete
        </button>
      </template>
    </Table>

    <div class="flex justify-center">
      <Paginate
          v-if="useProduct.products"
          v-model="useProduct.current_page"
          :current="useProduct.products.current_page"
          :total="useProduct.products.total"
          :per-page="useProduct.products.per_page"
          :page-range="1"
      />
    </div>

  </Container>
</template>
