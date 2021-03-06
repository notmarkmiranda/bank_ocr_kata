import fs from 'fs'
import ConvertAccountNumber from './convert-account-number'
import CheckSum from './check-sum'

export default class FileProcessor {
  processFile(filePath) {
    let data = fs.readFileSync(filePath, 'utf8')

    const nestedArray = this.buildNestedArray(data.split("\n"))
    return nestedArray.map((accountArray) => {
      let accountNumber = ConvertAccountNumber.convert(accountArray)
      if (CheckSum.validate(accountNumber)) {
        return accountNumber
      } else {
        return `${accountNumber} ERR`
      }
    })
  }

  buildNestedArray(inputArray) {
    let result = []
    for (let i=0; i < inputArray.length; i+=4) {
      result.push([inputArray[i], inputArray[i+1], inputArray[i+2]])
    }
    return result
  }
}
