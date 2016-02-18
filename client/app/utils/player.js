import { sample } from './array'

const names = [
  "Spirited", "Howl", "Mononoke", "Totoro", "Kiki", "Wind",
  "Laputa", "Nausicaa", "Rosso", "Ponyo", "Whisper",
]

export function generateUUID() {

  const name = sample(names)
  const uuid = name + Math.floor(Math.random() * 100)
  return uuid
}
