import raw from './input'

let index = 0

/**
 * Process raw elves into an object
 */
export const elves = raw.reduce((elves: any, row: undefined | number) => {
  if (row === undefined) {
    index += 1
    return elves
  }

  if (!elves[index]) {
    elves[index] = {
      group: [],
      total: 0,
      key: index
    }
  }

  elves[index].group.push(row)
  elves[index].total += row

  return elves
}, {})
