import { ref } from 'vue'
export default function demo () {
  const count = ref(3)
  const add = () => {
    count.value += 1
  }
  return {
    add,
    count
  }
}
