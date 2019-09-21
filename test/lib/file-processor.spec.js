import { expect } from 'chai'

describe('FileProcessor', () => {
  let subject
  before(() => {
    subject = new FileProcessor()
  })

  describe('#processFile function', () => {
    let filePath = './test/fixtures/account-numbers-short.txt'
    let accountNumbersExpected = ['000000000', '111111111']

    it('should process a file and return an array of numbers', () => {
      accountNumbersActual = subject.processFile(filePath)

      expect(accountNumbersActual).to.equal(accountNumbersExpected)
    })
  })
})
