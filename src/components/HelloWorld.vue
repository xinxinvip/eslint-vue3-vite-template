<template>
  <h1>
    {{ msg }}
  </h1>
  <input
    v-focus
    type="text"
  >
  <div
    v-pin="200"
  >
    {{ count }}
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import demo from '@/hooks/dome'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup: () => {
    const { count, add } = demo()
    onMounted(() => {
      add()
      console.log(count.value, 'num')
    })
    return {
      count
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
