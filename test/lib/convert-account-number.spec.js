import { expect } from 'chai'
import ConvertAccountNumber from '../../src/convert-account-number'

describe('ConvertAccountNumber', () => {
  let subject
  const accountArray = [' _  _  _  _  _  _  _  _  _', '| || || || || || || || || |', '|_||_||_||_||_||_||_||_||_|']

  before(() => {
    subject = new ConvertAccountNumber(accountArray)
  })

  describe('static#convert function', () => {

    it('should take an array of pipes and underscores and return an account number', () => {
      const actualAccountNumber = ConvertAccountNumber.convert(accountArray)

      expect(actualAccountNumber).to.equal('000000000')
    })
  })

  describe('#convertLines function', () => {
    it('should do the actual lifting of converting numbers', () => {
      expect(subject.convertLines()).to.equal('000000000')
    })
  })

  describe('#chunk function', () => {
    const string = 'xxxxxxxxxxxxxxxxxxxxxxxxxxx'
    const expectedArray = ['xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx']

    it('should split a string', () => {
      expect(subject.chunk(string)).to.deep.equal(expectedArray)
    })
  })

  describe('#zipAndJoinArrays', () => {
    const originalArray =[['xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx'], ['yyy', 'yyy', 'yyy', 'yyy', 'yyy', 'yyy', 'yyy', 'yyy', 'yyy'],['zzz', 'zzz', 'zzz', 'zzz', 'zzz', 'zzz', 'zzz', 'zzz', 'zzz']]
    const expectedOutput = ['xxxyyyzzz', 'xxxyyyzzz', 'xxxyyyzzz', 'xxxyyyzzz', 'xxxyyyzzz', 'xxxyyyzzz', 'xxxyyyzzz', 'xxxyyyzzz', 'xxxyyyzzz']

    it('should zip, join and pad 3 arrays into one', () => {
      expect(subject.zipAndJoinArrays(...originalArray)).to.deep.equal(expectedOutput)
    })
  })
})
