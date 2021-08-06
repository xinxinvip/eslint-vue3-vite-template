<template>
  <div>{{ title }}</div>
  <div @click="handleClick">
    跳转到member
  </div>
  <input
    v-focus
    type="text"
    placeholder="聚焦测试"
  >
  <div @click="add">
    ++{{ count }}
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import demo from '@/hooks/dome'
export default defineComponent({
  setup () {
    const router = useRouter()
    const title = ref('home')
    const { count, add } = demo()
    const handleClick = () => {
      router.push('/member')
    }
    return {
      title,
      handleClick,
      count,
      add
    }
  }
})
</script>
