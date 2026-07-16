export interface CardData {
    name: string
    link: string 
}

export interface CardDataApi {
    
    isLiked: boolean
    _id: string
    name: string
    link: string 
    owner: string
    createdAt: string
}

export class Card {
    private cardImage!: HTMLImageElement
    private cardElement!: HTMLElement
    private cardLikeButton!: HTMLButtonElement
    private cardDeleteButton!: HTMLButtonElement
    private objectCard: CardDataApi
    private templateSelector: string
    private handleCardClick: (name: string, link: string) => void
    private handleDeleteClick: (cardId: string, cardElement: HTMLElement) => void
    private handleLikeClick:(cardId: string, isLiked: boolean) => void
    private currentUserId: string 
    

    constructor(objectCard: CardDataApi, templateSelector: string, 
        handleCardClick : (name: string, link: string) => void, 
        handleDeleteClick: (cardId: string, cardElement: HTMLElement)=> void, 
        handleLikeCLick: (cardId: string, isLiked: boolean) => void,
        currentUserId: string ) {
        this.objectCard =  objectCard
        this.templateSelector = templateSelector
        this.handleCardClick = handleCardClick;
        this.handleDeleteClick = handleDeleteClick
        this.handleLikeClick = handleLikeCLick
        this.currentUserId =  currentUserId
        
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

    

        this.renderLikes()

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
        this.handleLikeClick(this.objectCard._id, this.objectCard.isLiked)
    })

    if (this.objectCard.owner !== this.currentUserId) {
        this.cardDeleteButton.remove()
        return
    }

    this.cardDeleteButton.addEventListener("click", () => {
        this.handleDeleteClick(this.objectCard._id, this.cardElement)
    })
}


    private renderLikes(): void {
        if(this.objectCard.isLiked){
            this.cardLikeButton.classList.add("card__like-button_is-active");
        }else {
            this.cardLikeButton.classList.remove("card__like-button_is-active");
        }
    }

    public updateLikeStatus(isLiked: boolean) {
            this.objectCard.isLiked = isLiked
            this.renderLikes()
    }
}
