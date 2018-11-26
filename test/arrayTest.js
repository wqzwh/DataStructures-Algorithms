const CArray = require('../test/array/index')

const aa = new CArray()

for(let i = 0; i < 10; i++){
  aa.addLast(i)
}
aa.addLast(100)

console.log(aa)
