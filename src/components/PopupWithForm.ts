import { Popup } from "./Popup.js";

interface FormValues {
    [key: string]: string
}


export class PopupWithForm extends Popup {
    private  handleFormSubmit: (data: FormValues) => void
    private  form: HTMLFormElement
    private  submitBtn: HTMLButtonElement
    private  submitBtnText : string

    constructor(popupSelector: string, handleFormSubmit: (data: FormValues) => void){
        super(popupSelector)
        this.form = this.element.querySelector("form") as HTMLFormElement
        this.handleFormSubmit = handleFormSubmit
        this.submitBtn = this.element.querySelector(".popup__button") as HTMLButtonElement
        this.submitBtnText = this.submitBtn.textContent || ""
    }
    private getInputValues(): FormValues {
        const formValues: FormValues = {}

        Array.from(this.form.elements).forEach((element) => {
            if(element.tagName === "INPUT"){
                const inputElement = element as HTMLInputElement
                formValues[inputElement.name] =  inputElement.value
            }
            
        })

        return formValues
    }

    public setEventListeners(): void{
        super.setEventListeners()
        this.form.addEventListener("submit", (evt: SubmitEvent)=> {
            evt.preventDefault()
            this.handleFormSubmit(this.getInputValues())
            
        })
        
    }
    public close(): void {
        this.form.reset()
        super.close()
    }

    renderLoading(isLoading: boolean): void {
        if(isLoading){
            this.submitBtn.textContent = "Guardando..."
        } else {
            this.submitBtn.textContent = this.submitBtnText
        }
    }

    

}

