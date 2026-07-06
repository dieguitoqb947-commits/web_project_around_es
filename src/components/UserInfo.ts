export interface UserData {
    name: string,
    job: string
}



export class UserInfo {
    name: HTMLElement
    job: HTMLElement
    
    constructor({name, job}: UserData) {
        this.name = document.querySelector(name) as HTMLElement
        this.job = document.querySelector(job) as HTMLElement
    }

    public getUserInfo(): UserData {
        return {
            name: this.name.textContent??"",
            job:  this.job.textContent??""
        }
        
    }

    public setUserInfo(userInfo: UserData): void {
        this.name.textContent = userInfo.name
        this.job.textContent = userInfo.job
    }
}