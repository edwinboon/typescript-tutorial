import { Invoice } from './modules/Invoice.js';
import { ListTemplate } from './modules/ListTemplate.js';
import { Payment } from './modules/Payment.js';
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('.item-list');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    // prevent default form action
    e.preventDefault();
    let values = [toFrom.value, amount.valueAsNumber, details.value];
    let doc = type.value === 'invoice' ? new Invoice(...values) : new Payment(...values);
    list.render(doc, type.value, 'end');
});
