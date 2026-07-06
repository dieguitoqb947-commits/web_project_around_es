type RendererFuntion <T> = (item: T) => void

export class Section<T> {
    private container: HTMLElement
    private renderer: RendererFuntion<T>;
    private renderedItems: T[];

    constructor({items, renderer }: {items: T[], renderer: RendererFuntion<T>}, containerSelector: string ){
        this.container = document.querySelector(containerSelector) as HTMLElement
        this.renderer = renderer
        this.renderedItems =  items
    }

    renderItems(): void {
        this.renderedItems.forEach((item) => {
            this.renderer(item)
        })
    }

    addItem(element: HTMLElement): void{
        this.container.append(element)
    }
}
