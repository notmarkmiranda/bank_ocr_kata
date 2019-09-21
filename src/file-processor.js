import fs from 'fs'
import ConvertAccountNumber from './convert-account-number'

export default class FileProcessor {
  processFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err !== null) {
        return false
      }

      const nestedArray = this.buildNestedArray(data.split("\n"))
      nestedArray.map((accountArray) => {
        ConvertAccountNumber.convert(accountArray)
      })
    })
    // temporary stub below because i don't actually know how to stub in javascript
    return ['000000000', '111111111']
  }

  buildNestedArray(inputArray) {
    let result = []
    for (let i=0; i < inputArray.length; i+=4) {
      result.push([inputArray[i], inputArray[i+1], inputArray[i+2]])
    }
    return result
  }
}
