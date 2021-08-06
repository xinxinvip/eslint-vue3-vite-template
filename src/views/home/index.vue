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
  <div>{{ name }}</div>
  <div>{{ age }}</div>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import demo from '@/hooks/dome'
export default defineComponent({
  setup () {
    const initData = {
      name: 'lin',
      age: 18
    }
    const router = useRouter()
    const title = ref('home')
    const { count, add } = demo()
    const data = reactive({ ...initData })
    const handleClick = () => {
      router.push('/member')
    }
    return {
      ...toRefs(data),
      title,
      handleClick,
      count,
      add
    }
  }
})
</script>
