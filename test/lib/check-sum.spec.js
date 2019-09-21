import { expect } from 'chai'
import CheckSum from '../../src/check-sum'

describe('CheckSum', () => { 
  describe('static#validate', () => {
    let validAccountNumber = "457508000"
    let invalidAccountNumber = "457508100"
    
    it('should return true for valid account number', () => {
      expect(CheckSum.validate(validAccountNumber)).to.equal(true)
    })
    
    it('should return false for invalid account number', () => {
      expect(CheckSum.validate(invalidAccountNumber)).to.equal(false)
    })
  })
})