<template>
  <div class="flex-1 flex justify-between">
    <form class="w-full flex md:ml-0">
      <label for="search_field" class="sr-only">Search</label>
      <div class="relative w-full text-gray-400 focus-within:text-gray-600">
        <div
          class="absolute inset-y-0 left-0 flex items-center pointer-events-none mx-2"
        >
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
        </div>
        <input
          id="search_field"
          class="block w-full h-full pl-8 pr-3 py-2 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 sm:text-sm border-transparent"
          placeholder="Search"
          type="search"
          :value="modelValue"
          @input="(event) => $emit('update:modelValue', (event.target as HTMLInputElement).value)"
        />
      </div>
      <button
        class="ml-3 text-sm text-gray-500 hover:text-gray-700 focus:text-indigo-500"
        type="button"
        @click="$emit('reset')"
      >
        Reset
      </button>
    </form>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  modelValue: string;
}>();

// @ts-ignore TODO: remember to fix this
defineEmits<{
  "update:modelValue": (value: string) => void;
  reset: () => void;
}>();
</script>
