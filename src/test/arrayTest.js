const CArray = require('../dataStructures/array/index.js')

const aa = new CArray()

for (let i = 0; i < 10; i++) {
  aa.addLast(i)
}
aa.addLast(100)

console.log(aa)
console.log(aa.query(2))
aa.swap(2, 8)
console.log(aa)
