import type { Ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'
// hook函数，接受两个参数
const useCilckOutside = (element: Ref<undefined | HTMLElement>, callback: (e: MouseEvent) => void) => {
  const handleClick = (e: MouseEvent) => {
    // e.target即表示点击事件发生的元素
    if (element.value && e.target) {
      // 判断Tooltip组件是否包含被点击的事件,
      // 如果不包含，说明点击的是Tooltip组件外部，这个时候就可以实现关闭了
      // 注意这里需要一个类型断言，因为DOM事件对象的target属性通常被推断为EventTarget类型,
      // 但是这里是一个HTMLElement类型
      if (!element.value?.contains(e.target as HTMLElement)) {
        callback(e)
      }
    }
  }
  // 然后监听页面点击事件
  onMounted(() => {
    document.addEventListener('click', handleClick)
  })
  // 页面销毁，取消监听
  onUnmounted(() => {
    document.removeEventListener('click', handleClick)
  })
}

export default useCilckOutside
