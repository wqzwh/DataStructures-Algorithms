const QueueList = require('../dataStructures/llist/queueList.js')
const ArrayQueue = require('../dataStructures/queue/arrayQueue.js')
const LoopQueue = require('../dataStructures/queue/loopQueue.js')

const test = (q, opCount) => {
  const startTime = new Date()

  for (let i = 0; i < opCount; i++) {
    q.enqueue(parseInt(Math.random() * (opCount + 1), 10))
  }

  for (let i = 0; i < opCount; i++) {
    q.dequeue()
  }

  const endTime = new Date()

  return (endTime - startTime) / 1000
}

const opCount = 100000
const arrayQueue = new ArrayQueue()
const time = test(arrayQueue, opCount)
const loopQueue = new LoopQueue()
const time2 = test(loopQueue, opCount)
const queueList = new QueueList()
const time3 = test(queueList, opCount)

console.log(`ArrayQueue time: ${time}s`)
console.log(`LoopQueue time: ${time2}s`)
console.log(`QueueList time: ${time3}s`)
