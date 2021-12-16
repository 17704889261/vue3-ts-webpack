<template>
  <div id="nav">
    <router-link to="/layout">Layout</router-link> | <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <div>
      <p><b>题目：</b> 扁平化数组 转换 成树形结构</p>
      <p><b>原始数组：</b></p>
      <pre>
        const arr: BaseDataObj[] = [
          { id: 5, name: '部门5', pid: 4 },
          { id: 2, name: '部门2', pid: 1 },
          { id: 3, name: '部门3', pid: 1 },
          { id: 1, name: '部门1', pid: 0 },
          { id: 4, name: '部门4', pid: 3 }
        ]
      </pre>
      <p><b>转换后的结果：</b></p>
      <pre>
        {{ mapArr }}
      </pre>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'

  interface BaseDataObj {
    id: number
    name: string
    pid: number
  }

  interface DataObj extends BaseDataObj {
    children: BaseDataObj[]
  }

  const arr: BaseDataObj[] = [
    { id: 5, name: '部门5', pid: 4 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 1, name: '部门1', pid: 0 },
    { id: 4, name: '部门4', pid: 3 }
  ]

  export default defineComponent({
    name: 'LayoutTest',
    setup() {
      // const resArr = arrayToTree(arr)
      const resArr = arrToTree(arr)

      console.log(' resArr ======> ', resArr)

      const mapArr = ref(resArr)

      return {
        mapArr
      }
    }
  })

  // 参考答案
  function arrayToTree(arrs: any) {
    const resArr = []
    const itemMap: any = {}
    for (const item of arrs) {
      const { id, pid } = item

      if (!itemMap[id]) {
        itemMap[id] = {
          children: []
        }
      }

      itemMap[id] = {
        ...item,
        children: itemMap[id].children
      }

      const treeItem = itemMap[id]

      if (pid === 0) {
        resArr.push(treeItem)
      } else {
        if (!itemMap[pid]) {
          itemMap[pid] = {
            children: []
          }
        }
        itemMap[pid].children.push(treeItem)
      }
    }
    return resArr
  }

  // 自己写的
  function arrToTree(arrs: any) {
    const res = []
    const obj: any = {}

    for (const item of arrs) {
      const { id, pid } = item
      if (!obj[id]) {
        obj[id] = {
          children: []
        }
      }
      obj[id] = { ...item, children: obj[id].children }

      const treeObj = obj[id]

      if (pid === 0) {
        res.push(treeObj)
      } else {
        if (!obj[pid]) {
          obj[pid] = {
            children: []
          }
        }
        obj[pid].children.push(treeObj)
      }
    }

    return res
  }
</script>
<style lang="scss">
  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
