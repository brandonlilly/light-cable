import { sample } from './array'

const names = [
  "Spirited", "Howl", "Mononoke", "Totoro", "Kiki", "Wind",
  "Laputa", "Nausicaa", "Rosso", "Ponyo", "Whisper",
]

export function generateName() {
  const name = sample(names) + Math.floor(Math.random() * 100)
  return name
}

export function generateUUID() {
  const randomString = (length, chars) =>  {
    var result = ''
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)]
    return result
  }

  return randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
}
