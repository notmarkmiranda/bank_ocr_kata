export default class CheckSum {
  static validate(accountNumber) {
    let sum = this.splitAndConvertToIntegers(accountNumber)
    return sum % 11 === 0
  }
  
  static splitAndConvertToIntegers(accountNumber) {
    return [...accountNumber].map((integer, index) => {
      return (9 - index) * integer
    }).reduce((acc, val) => acc + val )
  }
}