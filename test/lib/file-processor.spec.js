import { expect } from 'chai'
import FileProcessor from '../../src/file-processor'

describe('FileProcessor', () => {
  let subject
  before(() => {
    subject = new FileProcessor()
  })

  describe('#processFile function', () => {
    let filePath = './test/fixtures/account-numbers-short.txt'
    let accountNumbersExpected = ['000000000', '111111111']


    it('should process a file and return an array of numbers', () => {
      let accountNumbersActual = subject.processFile(filePath)

      expect(accountNumbersActual).to.deep.equal(accountNumbersExpected)
    })
  })

  describe('#buildNestedArray function', () => {
    const originalArray = [1, 2, 3, 'x', 4, 5, 6, 'x']
    const expectedArray = [[1, 2, 3], [4, 5, 6]]

    it('should create nested arrays', () => {
      const actualOutputArray = subject.buildNestedArray(originalArray)

      expect(actualOutputArray).to.deep.equal(expectedArray)
    })
  })
})
