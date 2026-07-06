export interface UserSelectors {
    nameSelector: string,
    jobSelector: string
}

export interface UserData {
    name: string,
    job: string
}


export class UserInfo {
    private nameElement: HTMLElement
    private jobElement: HTMLElement
    
    constructor({nameSelector, jobSelector}: UserSelectors) {
        this.nameElement = document.querySelector(nameSelector) as HTMLElement
        this.jobElement = document.querySelector(jobSelector) as HTMLElement
    }

    public getUserInfo(): UserData {
        return {
            name: this.nameElement.textContent??"",
            job:  this.jobElement.textContent??""
        }
        
    }

    public setUserInfo(userInfo: UserData): void {
        this.nameElement.textContent = userInfo.name
        this.jobElement.textContent = userInfo.job
    }
}