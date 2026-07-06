export class UserInfo {
    name;
    job;
    constructor({ name, job }) {
        this.name = document.querySelector(name);
        this.job = document.querySelector(job);
    }
    getUserInfo() {
        return {
            name: this.name.textContent ?? "",
            job: this.job.textContent ?? ""
        };
    }
    setUserInfo(userInfo) {
        this.name.textContent = userInfo.name;
        this.job.textContent = userInfo.job;
    }
}
//# sourceMappingURL=UserInfo.js.map