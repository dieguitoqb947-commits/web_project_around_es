export interface UserSelectors {
    nameSelector: string,
    jobSelector: string
    avatarSelector: string
}

export interface UserData {
    name: string,
    job: string
    avatar: string
}


export class UserInfo {
    private nameElement: HTMLElement
    private jobElement: HTMLElement
    private avatar: HTMLImageElement
    
    constructor({nameSelector, jobSelector, avatarSelector}: UserSelectors) {
        this.nameElement = document.querySelector(nameSelector) as HTMLElement
        this.jobElement = document.querySelector(jobSelector) as HTMLElement
        this.avatar = document.querySelector(avatarSelector) as HTMLImageElement
    }

    public getUserInfo(): UserData {
        return {
            name: this.nameElement.textContent??"",
            job:  this.jobElement.textContent??"",
            avatar: this.avatar.src??""
        }
        
    }

    public setUserInfo(userInfo: UserData): void {
        this.nameElement.textContent = userInfo.name
        this.jobElement.textContent = userInfo.job
        this.avatar.src  = userInfo.avatar
    }
}