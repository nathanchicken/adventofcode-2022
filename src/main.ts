import { elves } from './1/elves'

let max = 0
const elvesArray = Object.values(elves) as Array<{
  total: number
  group: Array<number>
}>


elvesArray.forEach(({ total }) => {
  if (total > max) {
    max = total
  }
})

// Elves sorted by calorie total:
elvesArray.sort(({ total: a }, { total: b }) => {
  return Number(b > a) - Number(a > b)
})

// First 3 elves
const [a, b, c] = elvesArray.map(({ total }) => total)
// Total of first three elves:
console.log(a + b + c)
