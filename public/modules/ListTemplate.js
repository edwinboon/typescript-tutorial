export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement('li');
        // create heading
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        // append h4
        li.append(h4);
        // create paragraph
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        // append paragraph
        pos === 'start' ? this.container.prepend(li) : this.container.append(li);
    }
}
