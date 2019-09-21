import { expect } from 'chai'
import ConvertAccountNumber from '../../src/convert-account-number'

describe('ConvertAccountNumber', () => {
  describe('static#convert function', () => {
    const accountArray = [' _  _  _  _  _  _  _  _  _', '| || || || || || || || || |', '|_||_||_||_||_||_||_||_||_|']

    it('should take an array of pipes and underscores and return an account number', () => {
      const actualAccountNumber = ConvertAccountNumber.convert(accountArray)

      expect(actualAccountNumber).to.equal('000000000')
    })
  })
})
