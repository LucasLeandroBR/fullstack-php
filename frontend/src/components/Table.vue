<script setup lang="ts">
import { money } from "@/utils/money";

defineProps<{
  data: any[];
}>();

</script>

<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
        <div class="overflow-hidden border">
          <table class="min-w-full">
            <thead class="border-b bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-4 py-4 text-left text-sm font-medium text-black"
                >
                  Id
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-sm font-medium text-black"
                >
                  Title
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-sm font-medium text-black"
                >
                  Type
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-sm font-medium text-black"
                >
                  Description
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-sm font-medium text-black"
                >
                  Price
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-sm font-medium text-black"
                >
                  Rating
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-sm font-medium text-black"
                >
                  Created
                </th>
                <th
                  scope="col"
                  class="px-6 py-4 text-left text-sm font-medium text-black"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in data"
                :key="item.id"
                class="overflow-hidden"
                :class="[{'bg-gray-100': item.id % 2 === 0}]"
              >
                <td
                  class="border-b px-6 py-4 text-sm font-medium text-gray-900"
                >
                  {{ item.id }}
                </td>
                <td
                  class="border-b px-6 py-4 text-sm font-medium text-gray-900"
                >
                  {{ item.title }}
                </td>
                <td
                  class="border-b px-6 py-4 text-sm font-medium text-gray-900"
                >
                  {{ item.type }}
                </td>
                <td
                  class="line-clamp-2 border-b px-6 py-4 text-sm font-medium text-gray-900"
                >
                  {{ item.description }}
                  <span
                    v-if="item.description.length > 100"
                    class="text-gray-500"
                    >...</span
                  >
                </td>
                <td
                  class="border-b px-6 py-4 text-sm font-medium text-gray-900"
                >
                  {{ money(item.price) }}
                </td>
                <td
                  class="border-b px-6 py-4 text-sm font-medium text-gray-900"
                >
                  {{ item.rating }}
                </td>
                <td
                  class="border-b px-6 py-4 text-sm font-medium text-gray-900"
                >
                  {{ item.created_At }}
                </td>
                <td
                  class="border x-6 space-x-4 px-4 whitespace-nowrap py-4 text-sm font-medium text-gray-900"
                >
                  <slot name="actions" :itemId="item.id" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
