const LList = require('../src/llist/llist')

const list = new LList()

for(let i = 0; i < 10; i++) {
  list.addFirst(i)
}

list.add(1, 'bbb')

console.log(list)