/**
 *
 * node节点类
 */

class Node {
  custructor(element, next = null) {
    this.element = element
    this.next = next
  }

  toString() {
    return this.element.toString()
  }
}


class LList {
  custructor() {
    this.head = new Node("head")
  }
}
