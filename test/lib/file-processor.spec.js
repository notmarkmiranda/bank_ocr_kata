import { expect } from 'chai'
import FileProcessor from '../../src/file-processor'

describe('FileProcessor', () => {
  let subject
  before(() => {
    subject = new FileProcessor()
  })

  describe('#processFile function', () => {
    let filePathShort = './test/fixtures/account-numbers-short.txt'
    let accountNumbersExpectedShort = ['000000000', '111111111']
    let filePathLong = './test/fixtures/account-numbers.txt'
    let accountNumbersExpectedLong = [
      '000000000', 
      '111111111',
      '222222222',
      '333333333',
      '444444444',
      '555555555',
      '666666666',
      '777777777',
      '888888888',
      '999999999',
      '123456789',
    ]

    it('should process a short file and return an array of numbers', () => {
      let accountNumbersActual = subject.processFile(filePathShort)

      expect(accountNumbersActual).to.deep.equal(accountNumbersExpectedShort)
    })
    
    it('should process the long file and return an array of numbers', () => {
      let accountNumbersActual = subject.processFile(filePathLong)
      
      expect(accountNumbersActual).to.deep.equal(accountNumbersExpectedLong)
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
