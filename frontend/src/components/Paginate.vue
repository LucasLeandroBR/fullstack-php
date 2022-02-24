
<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
  modelValue: {
    type: Number,
  },
  current: {
    type: Number,
    default: 1,
  },
  total: {
    type: Number,
    default: 0,
  },
  perPage: {
    type: Number,
    default: 9,
  },
  pageRange: {
    type: Number,
    default: 1,
  },
})

const emits = defineEmits(['update:modelValue'])

const pages = computed(() => {
  let pages = [];
  for (let i = rangeStart.value; i <= rangeEnd.value; i++) {
    pages.push(i);
  }
  return pages;
})

const rangeStart = computed(() => {
  const start = props.current - props.pageRange;
  return start > 0 ? start : 1;
})

const rangeEnd = computed(() => {
  let end = props.current + props.pageRange;
  return end < totalPages.value ? end : totalPages.value;
})

const totalPages = computed(() => {
  return Math.ceil(props.total / props.perPage);
})

const nextPage = computed(() => {
  return props.current + 1;
})

const prevPage = computed(() => {
  return props.current - 1;
})

const hasFirst = () => {
  return rangeStart.value !== 1;
};
const hasLast = () =>{
  return rangeEnd.value < totalPages.value;
};
const hasPrev = () => {
  return props.current > 1;
};
const hasNext =  () => {
  return props.current < totalPages.value;
};
const changePage = (page) => {
  if (page > 0 && page <= totalPages.value) {
    emits("update:modelValue", page)
  }
};

</script>


<template>
  <div class="">
    <section
        class="flex justify-between rounded-lg py-3 font-poppins font-semibold text-black"
    >
      <ul class="flex items-center justify-center space-x-4">
        <li v-if="hasPrev()">
          <a href="#" @click.prevent="changePage(prevPage)">
            <div
                class="flex h-6 w-6 rotate-45 transform items-center justify-center rounded-md hover:bg-gray-200"
            >
              <div class="-rotate-45 transform">
                <svg
                    class="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
            </div>
          </a>
        </li>
        <li v-if="hasFirst()">
          <a href="#" @click.prevent="changePage(1)">
            <div
                class="grid h-8 w-8 cursor-pointer place-items-center rounded-md text-sm font-semibold"
            >
              <span class=""> 1 </span>
            </div>
          </a>
        </li>
        <li v-if="hasFirst()">...</li>
        <li v-for="page in pages">
          <a href="#" @click.prevent="changePage(page)">
            <div
                :class="{ 'bg-black text-white': current === page }"
                class="grid h-8 w-8 cursor-pointer place-items-center rounded-md text-sm font-semibold"
            >
              <span class="">{{ page }}</span>
            </div>
          </a>
        </li>
        <li v-if="hasLast()">...</li>
        <li v-if="hasLast()">
          <a href="#" @click.prevent="changePage(totalPages)">
            <div
                class="grid h-8 w-8 cursor-pointer place-items-center rounded-md text-sm font-semibold"
            >
              <span class="">
                {{ totalPages }}
              </span>
            </div>
          </a>
        </li>
        <li v-if="hasNext()">
          <a href="#" @click.prevent="changePage(nextPage)">
            <div
                class="flex h-6 w-6 rotate-45 transform items-center justify-center rounded-md hover:bg-gray-200"
            >
              <div class="-rotate-45 transform">
                <svg
                    class="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
