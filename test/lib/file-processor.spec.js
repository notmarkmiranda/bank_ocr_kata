import { expect } from 'chai'
import FileProcessor from '../../src/file-processor'

describe('FileProcessor', () => {
  let subject
  
  before(() => {
    subject = new FileProcessor()
  })

  describe('#processFile function', () => {
    let filePathShort = './test/fixtures/account-numbers-short.txt'
    let accountNumbersExpectedShort = ['000000000', '111111111 ERR']
    let filePathLong = './test/fixtures/account-numbers.txt'
    let accountNumbersExpectedLong = [
      '000000000', 
      '111111111 ERR',
      '222222222 ERR',
      '333333333 ERR',
      '444444444 ERR',
      '555555555 ERR',
      '666666666 ERR',
      '777777777 ERR',
      '888888888 ERR',
      '999999999 ERR',
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
