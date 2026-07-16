export class UserInfo {
    nameElement;
    jobElement;
    avatar;
    constructor({ nameSelector, jobSelector, avatarSelector }) {
        this.nameElement = document.querySelector(nameSelector);
        this.jobElement = document.querySelector(jobSelector);
        this.avatar = document.querySelector(avatarSelector);
    }
    getUserInfo() {
        return {
            name: this.nameElement.textContent ?? "",
            job: this.jobElement.textContent ?? "",
            avatar: this.avatar.src ?? ""
        };
    }
    setUserInfo(userInfo) {
        this.nameElement.textContent = userInfo.name;
        this.jobElement.textContent = userInfo.job;
        this.avatar.src = userInfo.avatar;
    }
}
//# sourceMappingURL=UserInfo.js.map