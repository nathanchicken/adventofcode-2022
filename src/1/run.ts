import { elves } from './elves'
interface Elf {
  // Total calroies held by elf
  total: number
  // The original set of snacks
  group: Array<number>
  // The index from the original input, eg 0 means first original elf
  index: number
}

const elvesArray = Object.values(elves) as Array<Elf>

// Elves sorted by calorie total:
elvesArray.sort(({ total: a }, { total: b }) => {
  return Number(b > a) - Number(a > b)
})

// First 3 elves
const [a, b, c] = elvesArray.map(({ total }) => total)

console.log(`Max elf has ${a} calories`)

// Total of first three elves:
console.log(`Max of first three elves: ${a + b + c}`)
