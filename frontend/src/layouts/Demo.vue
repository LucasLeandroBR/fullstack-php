<script setup lang="ts">
import Logo from "@/components/Logo.vue";

</script>

  <template>
    <header
        class="space-between flex items-center space-x-20 bg-white px-4 py-2 shadow"
    >
      <a href="/"><Logo width="60" /></a>
    </header>

    <main class="mt-20">
      <RouterView />
    </main>
  </template>
