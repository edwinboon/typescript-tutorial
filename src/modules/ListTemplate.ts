import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
  constructor(
    private container: HTMLUListElement
  ){}

  render(item: HasFormatter, heading: string, pos: 'start' | 'end'){
    const li: HTMLLIElement = document.createElement('li');
    
    // create heading
    const h4: HTMLHeadingElement = document.createElement('h4');
    h4.innerText = heading;

    // append h4
    li.append(h4);

    // create paragraph
    const p: HTMLParagraphElement = document.createElement('p');
    p.innerText = item.format();
    li.append(p)

    // append paragraph
    pos === 'start' ? this.container.prepend(li) : this.container.append(li);
  }
}