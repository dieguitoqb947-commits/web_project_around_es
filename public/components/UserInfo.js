export class UserInfo {
    nameElement;
    jobElement;
    constructor({ nameSelector, jobSelector }) {
        this.nameElement = document.querySelector(nameSelector);
        this.jobElement = document.querySelector(jobSelector);
    }
    getUserInfo() {
        return {
            name: this.nameElement.textContent ?? "",
            job: this.jobElement.textContent ?? ""
        };
    }
    setUserInfo(userInfo) {
        this.nameElement.textContent = userInfo.name;
        this.jobElement.textContent = userInfo.job;
    }
}
//# sourceMappingURL=UserInfo.js.map