<script setup lang="ts">
const { availableLocales, locale } = useI18n();
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:bg-gray-800 h-screen">
    <div class="flex items-center justify-center space-x-3">
      <select
        v-model="locale"
        class="rounded py-0.5 focus:outline-none dark:text-gray-800"
      >
        <option v-for="lang in availableLocales" :key="lang" :value="lang">
          {{ lang }}
        </option>
      </select>

      <base-theme-toggle />
    </div>
    <RouterView />
  </main>
</template>
