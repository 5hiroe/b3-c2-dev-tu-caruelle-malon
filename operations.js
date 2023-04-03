// #region BDD tests
function add (a, b) {
  return a + b
}

function subtract (a, b) {
  return a - b
}

function multiply (a, b) {
  return a * b
}

function divide (a, b) {
  if (b === 0) {
    throw new Error('Division par zéro non autorisée')
  }
  return a / b
}

function percentage (a, b) {
  return (a * b) / 100
}
// #endregion BDD tests
// #region TDD tests
function square (a) {
  return a * a
}

function squareRoot (a) {
  if (a < 0) {
    throw new Error('Les racines carrées des nombres négatifs ne sont pas prises en charge')
  }

  return Math.sqrt(a)
}

function power (base, exponent) {
  return Math.pow(base, exponent)
}
// #endregion TDD tests

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  percentage,
  square,
  squareRoot,
  power
}
