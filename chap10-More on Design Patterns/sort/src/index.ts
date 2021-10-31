import { Sorter } from './Sorter'
import { NumberCollection } from './NumberCollection'
import { StringCollection } from './StringCollection'
import { LinkedList } from './LinkedList'

// const numberCollection = new NumberCollection([10, 3, -5, 0])
// const sorter = new Sorter(numberCollection)
// sorter.sort()
// console.log(sorter.collection)

// const characterCollection = new StringCollection('Xaayq')
// const sorter1 = new Sorter(characterCollection)
// sorter1.sort()
// console.log(characterCollection.data)


// const linkedList = new LinkedList()
// linkedList.add(500)
// linkedList.add(-10)
// linkedList.add(-3)
// linkedList.add(4)

// const sorter3 = new Sorter(linkedList)
// sorter3.sort()
// linkedList.print()


const numberCollection = new NumberCollection([10, 3, -5, 0, 9])
numberCollection.sort()
console.log(numberCollection.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)
linkedList.sort()
linkedList.print()
