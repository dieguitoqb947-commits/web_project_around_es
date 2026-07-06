export class Popup{
    popupSelector: string
    element!: HTMLElement

    constructor(popupSelector: string){ 
        this.popupSelector = popupSelector
        this.element = document.querySelector(this.popupSelector) as HTMLElement
    }

    public open(){
        this.element.classList.add("popup_is-opened")
        document.addEventListener("keydown", this.handleEscClose)
    }

    public close(){
        this.element.classList.remove("popup_is-opened")
        document.removeEventListener("keydown", this.handleEscClose)
    }

    private handleEscClose = (event: KeyboardEvent) => {

            if (event.key === "Escape") {
                this.close()
            }
        }
    

    public setEventListeners() {
        const closeBttn = this.element.querySelector(".popup__close") as HTMLButtonElement
        closeBttn.addEventListener("click", () => {this.close()})
        this.element.addEventListener("click", (event) => {
            if (event.target === this.element) {
            this.close()
            }
        })
    }
}