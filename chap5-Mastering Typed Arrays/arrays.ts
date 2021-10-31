const carMakers: string[] = []
const dates = [new Date(), new Date()]

const carsByMake = [
    ['3343'],
    ['corolla'],
    ['3343']
]

// Help with inference when extracting values
const car1 = carMakers[0]
const myCar = carMakers.pop()

// Prevent incompatible values
carMakers.push(19)

// Help with map
carMakers.map(car => {
    return car.toUpperCase()
})

// Flexible types
const importantDates: (Date | string)[] = []
importantDates.push('2021-22-11')
importantDates.push(new Date())