const LList = require('../src/llist/llist')
const StackList = require('../src/llist/stackList')

const list = new LList()

for(let i = 0; i < 10; i++) {
  list.addFirst(i)
}

list.add(1, 'bbb')

console.log(list)

const stackList = new StackList()
for(let i = 0; i < 3; i++) {
  stackList.push(i)
}
console.log(stackList)