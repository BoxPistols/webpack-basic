import $ from 'jquery'
import { add as AddItem } from './modules/add'
import { tax } from './modules/tax'
// * as

const itemA = 100
const itemB = 203
const totalPrice = AddItem(itemA, itemB)

const taxNow = 1.1
const resultPrice = tax(totalPrice, taxNow)

$('body').text(resultPrice)
