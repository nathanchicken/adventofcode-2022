import {
  input,
  checkScore,
  YourKey,
  TheirKey,
  check,
  TheirMap,
  YourMap,
  VictoryMap,
  ScoreMap,
  checkScoreSecret
} from './input'

export default () => {
  const rounds = input.split('\n').map(row => {
    const [them, you] = row.split(' ') as [TheirKey, YourKey]

    const yourGo = YourMap[you]
    const theirGo = TheirMap[them]
    const status = check(them, you)
    return {
      you,
      summary: `${yourGo} -> ${status} -> ${theirGo}`,
      them,
      status,
      winState: VictoryMap[status],
      scoreState: ScoreMap[you],
      score: checkScore(you, them),
      scoreSecret: checkScoreSecret(you, them),
    }
  })

  const score = rounds.reduce((score, round) => {
    if (round) return score + round.score
    else return score
  }, 0)
  
  const scoreSecret = rounds.reduce((b, round) => {
    if (round) return b + round.scoreSecret
    else return b
  }, 0)

  console.log('---2----')
  console.log(score)
  console.log('---secret----')
  console.log(scoreSecret)
  console.log('//---2----')
}
