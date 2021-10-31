const add = (a: number, b: number): number => {
    return a + b;
}

const log = (a: number): void => {
    console.log(a)
}

// never reach the end
const throwErr = (mes: string): never => {
    throw new Error(mes)
}

const throwErr1 = (mes: string): string => {
    if(mes) {
        throw new Error(mes)
    }

    return 'abc';
}

// still can reach end point
const throwErr2 = (mes: string): void => {
    if(mes) {
        throw new Error(mes)
    }
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}
const logWeather = ({date, weather}: {date: Date, weather: string}): void => {
    console.log(date)
    console.log(weather)
}
//Es2015
// const logWeather1 = ({date, weather}) => {
//     console.log(date)
//     console.log(weather)
// }
logWeather(todaysWeather)