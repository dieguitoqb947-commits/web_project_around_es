export class Section {
    container;
    renderer;
    renderedItems;
    constructor({ items, renderer }, containerSelector) {
        this.container = document.querySelector(containerSelector);
        this.renderer = renderer;
        this.renderedItems = items;
    }
    renderItems(items) {
        items.forEach((item) => {
            this.renderer(item);
        });
    }
    addItem(element) {
        this.container.append(element);
    }
}
//# sourceMappingURL=Section.js.map