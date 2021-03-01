import add from './modules/add'
import tax from './modules/tax'

const itemA = 100
const itemB = 200

const totalPrice = add(itemA, itemB)

const taxNow = 1.1

const resultPrice = tax(totalPrice, taxNow)

$('body').text(resultPrice)
