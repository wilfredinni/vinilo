<script setup lang="ts">
const { availableLocales, locale } = useI18n();
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <div class="flex items-center justify-center space-x-3">
      <select
        v-model="locale"
        class="rounded py-0.5 focus:outline-none dark:text-gray-800"
      >
        <option v-for="lang in availableLocales" :key="lang" :value="lang">
          {{ lang }}
        </option>
      </select>
    </div>
    <RouterView />
  </main>
</template>
