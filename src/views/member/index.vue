<template>
  <div>{{ title }}</div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  setup () {
    const title = ref('member')
    return {
      title
    }
  }
})
</script>
