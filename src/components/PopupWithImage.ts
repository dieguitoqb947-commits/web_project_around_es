import { Popup } from "./Popup";



export class PopupWithImage extends Popup {
    

    constructor(popupSelector: string){
        super(popupSelector)
        
    }

    public open(caption?: string, link?: string,): void {
        super.open()
        const image = this.element.querySelector(".popup__image") as HTMLImageElement
        const captionText = this.element.querySelector(".popup__caption") as HTMLElement
        
        if(link){
            image.src = link
        } 
        
        if(caption){
            captionText.textContent = caption
            image.alt = caption
        }
        
        
    
    }
}