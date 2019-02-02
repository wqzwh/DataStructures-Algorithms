/**
 *
 * 基于链表实现映射结构
 *
 */

class Node {
  constructor(key = null, value = null, next = null) {
    this.key = key
    this.value = value
    this.next = next
  }
}

const size = Symbol('size')
const getNode = Symbol('getNode')
class LlistMap {
  constructor() {
    this.dummyHead = new Node()
    this[size] = 0
  }

  // 获取大小
  getSize() {
    return this[size]
  }

  // 判断是否为空
  isEmpty() {
    return this[size] === 0
  }

  // 根据key获得节点
  [getNode](key) {
    let cur = this.dummyHead.next
    while (cur !== null) {
      if (cur.key === key) return cur
      cur = cur.next
    }
    return null
  }

  // 是否包含元素
  contains(key) {
    return this[getNode](key) !== null
  }

  // 查询节点
  get(key) {
    const node = this[getNode](key)
    return node === null ? null : node.value
  }

  // 添加元素
  add(key, value) {
    const node = this[getNode](key)
    if (node === null) {
      this.dummyHead.next = new Node(key, value, this.dummyHead.next)
      this[size]++
    } else {
      node.value = value
    }
  }

  // 设置元素
  set(key, value) {
    const node = this[getNode](key)
    if (node === null) return '没有该元素'
    node.value = value
  }

  // 删除操作
  remove(key) {
    let cur = this.dummyHead.next
    while (cur.next !== null) {
      if (cur.next.key === key) {
        const retNode = cur.next
        cur.next = retNode.next
        retNode.next = null
        this[size]--
        return retNode
      }
      cur = cur.next
    }
    return null
  }
}
