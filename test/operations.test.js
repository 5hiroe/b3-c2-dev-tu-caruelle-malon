const chai = require('chai')
const expect = chai.expect

const operations = require('../operations.js')

// #region BDD tests
describe('Operations', () => {
  it('Should add two numbers.', () => {
    const result = operations.add(5, 10)
    expect(result).to.equal(15)
  })

  it('Should subtract two numbers.', () => {
    const result = operations.subtract(10, 5)
    expect(result).to.equal(5)
  })

  it('Should multiply two numbers.', () => {
    const result = operations.multiply(5, 10)
    expect(result).to.equal(50)
  })

  it('Should divide two numbers.', () => {
    const result = operations.divide(10, 5)
    expect(result).to.equal(2)
  })

  it('Should throw an error when dividing by 0.', () => {
    expect(() => operations.divide(10, 0)).to.throw('Division par zéro non autorisée')
  })

  it('Should calculate the percentage.', () => {
    const result = operations.percentage(50, 10)
    expect(result).to.equal(5)
  })
  // #endregion BDD tests
  // #region TDD tests
  it('Should calculate the square of a number.', () => {
    const result = operations.square(4)
    expect(result).to.equal(16)
  })

  it('Should calculate the square root of a number.', () => {
    const result = operations.squareRoot(9)
    expect(result).to.equal(3)
  })

  it('Should throw an error when calculating the square root of a negative number.', () => {
    expect(() => operations.squareRoot(-4)).to.throw('Les racines carrées des nombres négatifs ne sont pas prises en charge')
  })

  it('Should calculate the power of a number.', () => {
    const result = operations.power(2, 3)
    expect(result).to.equal(8)
  })

  it('Should return 1 when the exponent is 0.', () => {
    const result = operations.power(5, 0)
    expect(result).to.equal(1)
  })

  it('Should calculate the power with a negative exponent.', () => {
    const result = operations.power(2, -3)
    expect(result).to.equal(1 / 8)
  })
  // #endregion TDD tests
})
