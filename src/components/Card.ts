export interface CardData {
    name: string
    link: string 
}

export class Card {
    private cardImage!: HTMLImageElement
    private cardElement!: HTMLElement
    private cardLikeButton!: HTMLButtonElement
    private cardDeleteButton!: HTMLButtonElement
    private objectCard: CardData
    private templateSelector: string
    private handleCardClick: (name: string, link: string) => void
    

    constructor(objectCard: CardData, templateSelector: string, handleCardClick : (name: string, link: string) => void ) {
        this.objectCard =  objectCard
        this.templateSelector = templateSelector
        this.handleCardClick = handleCardClick
        
    }

    private getTemplate(): HTMLElement{
        const cardTemplate = document.querySelector(this.templateSelector) as HTMLTemplateElement;
        this.cardElement = cardTemplate.content.firstElementChild!.cloneNode(true) as HTMLElement

        return this.cardElement
    }

    private fillCard(): void {
        const cardTitle = this.cardElement.querySelector(".card__title") as HTMLElement
        this.cardImage = this.cardElement.querySelector(".card__image") as HTMLImageElement
        this.cardLikeButton = this.cardElement.querySelector(".card__like-button") as HTMLButtonElement
        this.cardDeleteButton = this.cardElement.querySelector(".card__delete-button") as HTMLButtonElement

        cardTitle.textContent = this.objectCard.name
        this.cardImage.src = this.objectCard.link
        this.cardImage.alt = this.objectCard.name
    }

    public createCard(): HTMLElement {
        const card = this.getTemplate()
        this.fillCard()
        this.setEventListeners()

        return card
    }

    private setEventListeners(): void {
        this.cardImage.addEventListener("click", () => {
            this.handleCardClick(this.objectCard.name, this.objectCard.link)
        })

        this.cardLikeButton.addEventListener("click", () => {
            this.cardLikeButton.classList.toggle("card__like-button_is-active")
        })

        this.cardDeleteButton.addEventListener("click", () => {
            this.cardElement.remove()
        })
    }

}
