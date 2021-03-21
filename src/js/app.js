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

const head_1 = document.createElement('h1')
head_1.textContent = 'Hello WebPack!!?'
head_1.className = 'head_1'
document.body.appendChild(head_1)

const param = document.createElement('p')
param.className = 'accent'
param.textContent = resultPrice
document.body.appendChild(param)

var div = document.getElementsByTagName('div')[0]

// Clone Test
/*
  const p_prime = param.cloneNode(true)
  p_prime.className="p_prime"
  console.log(`p_prime: ${p_prime.innerHTML}`)
  document.body.appendChild(p_prime)
*/

function component() {
  const el = document.createElement('div')
  const array = ['Hello', 'WebPack']
  el.innerHTML = _.join(array, ' ')
  return el
}

document.body.appendChild(component())
