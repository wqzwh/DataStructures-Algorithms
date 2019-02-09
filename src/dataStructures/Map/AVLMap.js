/**
 *
 * 基于AVL树的Map
 *
 */

const AVLTree = require('../AVLTree/index')

class AVLMap {
  constructor() {
    this.avl = new AVLTree()
  }

  getSize() {
    return this.avl.getSize()
  }

  isEmpty() {
    return this.avl.isEmpty()
  }

  add(key, value) {
    this.avl.add(key, value)
  }

  contains(key) {
    return this.avl.contains(key)
  }

  get(key) {
    this.avl.get(key)
  }

  set(key, value) {
    this.set(key, value)
  }

  remove(key) {
    return this.avl.remove(key)
  }
}
module.exports = AVLMap
