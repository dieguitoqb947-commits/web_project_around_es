import { Popup } from "./Popup";

interface FormValues {
    [key: string]: string
}


export class PopupWithForm extends Popup {
    private  handleFormSubmit: (data: FormValues) => void
    private  form: HTMLFormElement

    constructor(popupSelector: string, handleFormSubmit: (data: FormValues) => void){
        super(popupSelector)
        this.form = this.element.querySelector("form") as HTMLFormElement
        this.handleFormSubmit = handleFormSubmit

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
            this.close()
        })
        
    }



}