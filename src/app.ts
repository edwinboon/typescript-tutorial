import { HasFormatter } from './interfaces/HasFormatter';
import { Invoice } from './modules/Invoice.js'
import { ListTemplate } from './modules/ListTemplate.js';
import { Payment } from './modules/Payment.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('.item-list') as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  // prevent default form action
  e.preventDefault();

  let doc: HasFormatter = type.value === 'invoice' ? new Invoice(toFrom.value, amount.valueAsNumber, details.value) : new Payment(toFrom.value, amount.valueAsNumber, details.value);

  list.render(doc, type.value, 'end');

})