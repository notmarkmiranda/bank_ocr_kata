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

      expect(accountNumbersActual).to.include.members(accountNumbersExpected)
    })
  })
})
