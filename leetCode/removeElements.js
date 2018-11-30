/**
 *
 * 203. 移除链表元素
 *
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const removeElements = (head, val) => {
  while(head !== null && head.val === val) {
    let delNode = head
    head = delNode.next;
    delNode.next = null
  }

  if(head === null) return head

  let prev = head
  while(prev.next !== null) {
    if(prev.next.val === val) {
      let delNode = prev.next
      prev.next = delNode.next
      delNode.next = null
    } else {
      prev = prev.next
    }
  }
  return head
}

/**
 *
 * 如果带上虚拟头节点
 *
 */
const removeElements = (head, val) => {

  let dummyHead = new ListNode(0)
  dummyHead.next = head
  let cur = dummyHead

  while(cur.next !== null) {
    if(cur.next.val === val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return dummyHead.next
}
