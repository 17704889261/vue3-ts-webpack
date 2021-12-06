import type { ComputedRef } from 'vue'
import { computed } from 'vue'

function useAlertMessage(type: ComputedRef<string>) {
  // 枚举 实现数据枚举展示
  enum MsgEnum {
    'success' = '查询成功',
    'warning' = '查询ing',
    'error' = '接口报错'
  }
  // 定义computed计算数据
  const titleInfo = computed(() => {
    if (type.value === 'success') return MsgEnum.success
    if (type.value === 'warning') return MsgEnum.warning
    return MsgEnum.error
  })

  return titleInfo
}

export default useAlertMessage
