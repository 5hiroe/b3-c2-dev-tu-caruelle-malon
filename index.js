const operations = require('./operations.js')

function howToUse () {
  console.log('Comment se servir de la calculatrice ?')
  console.log('npm start <operation> <nombre1> <nombre2>')
  console.log('\nOpérations valides: add (+), sub (-), mul (x), div (/), perc (%), square(²), sqrt(√), pow(^)')
  console.log('Example: npm start add 5 10')
}

function main () {
  const args = process.argv.slice(2)

  if (args.length < 2) {
    howToUse()
    return
  }

  const operation = args[0]
  const a = parseFloat(args[1])
  const b = args.length > 2 ? parseFloat(args[2]) : null

  let result

  try {
    switch (operation) {
      case 'add':
        result = operations.add(a, b)
        break
      case 'sub':
        result = operations.subtract(a, b)
        break
      case 'mul':
        result = operations.multiply(a, b)
        break
      case 'div':
        result = operations.divide(a, b)
        break
      case 'perc':
        result = operations.percentage(a, b)
        break
      case 'square':
        result = operations.square(a)
        break
      case 'sqrt':
        result = operations.squareRoot(a)
        break
      case 'pow':
        result = operations.power(a, b)
        break
      default:
        console.log('Opération non reconnue, déso le sang.')
        howToUse()
        return
    }

    console.log(`Résultat: ${result}`)
  } catch (error) {
    console.error(`Erreur: ${error.message}`)
  }
}

main()
