import * as dictionary from './number-dictionary'

export default class ConvertAccountNumber {
  constructor(accountArray) {
    this.accountArray = accountArray
    this.individualNumbersArray = []
  }

  static convert(accountArray) {
    return new ConvertAccountNumber(accountArray).convertLines()
  }

  convertLines() {
    let mappedArrays = this.accountArray.map((line) => {
      return this.chunk(line)
    })
    let zippedArrays = this.zipAndJoinArrays(mappedArrays[0], mappedArrays[1], mappedArrays[2])
    return zippedArrays.map((number) => {
      return this.convertToNumbers(number)
    }).join('')
  }

  chunk(string) {
    let paddedString = string.padEnd(27, ' ')
    return paddedString.match(/.{1,3}/g)
  }

  zipAndJoinArrays(arr, ...arrs) {
    let letterElements = arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]).join(''));
    return letterElements
  }

  convertToNumbers(number) {
    return dictionary.default[number]
  }
}
