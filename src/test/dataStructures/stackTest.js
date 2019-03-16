const Stack = require('../test/stack/arrayStack')

const stack = new Stack()

for (let i = 0; i < 10; i++) {
  stack.push(i)
}
stack.pop()
console.log(stack.toString())
