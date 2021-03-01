import $ from 'jquery'
import { add as AddItem } from './modules/add'
import { tax } from './modules/tax'
// * as
import '../scss/style.scss'

const itemA = 1000
const itemB = 2000
const totalPrice = AddItem(itemA, itemB)

const taxNow = 1.1
const resultPrice = tax(totalPrice, taxNow)

// $('body').text(resultPrice)

const h1 = document.createElement('h1')
h1.textContent = "Hello WebPack!"
document.body.appendChild(h1)

const p = document.createElement('p')
p.className="accent"
p.textContent = resultPrice
document.body.appendChild(p)
