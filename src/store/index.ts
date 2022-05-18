import { defineStore } from 'pinia'
// 主要的全局数据 main只是描述信息
export const MainStore = defineStore('main', {
  // 静态数据
  state: () => {
    return {
      info: "pinia",
      count: 10,
    }
  },
  // 相当于计算属性(有数据缓存)
  getters: {
    count10(state) {
      return state.count + 10
    },
    // 若使用this.count，则必须指明返回数据的类型
    count11(): number {
      return this.count + 11
    }
  },
  // actions即可以是同步函数也可以是异步函数
  actions: {
    changeState() {
      this.count += 10
      this.info = "actions修改数据"
    },
    changeStates(num: number) {
      this.count += num + 2
      this.info = "actions修改数据"
    }
  }
})