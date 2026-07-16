import type { CardDataApi } from "./Card.js";
import type { CardData } from "./Card.js";

interface ApiOptions {
    baseUrl: string;
    headers: {
        [key: string]: string
    }
}

interface UserFormData {
    name: string
    about: string
}

interface UserData {
    name : string,
    about:  string,
    avatar: string,
    _id: string
}


export class Api {
    private baseUrl: string
    private headers: {
        [key: string]: string;
    }

    constructor(options: ApiOptions) {
        this.baseUrl = options.baseUrl
        this.headers = options.headers
    }



    private checkResponse<T>(res: Response): Promise<T> {
        if(res.ok){
            return  res.json() as Promise<T>
        } else {
            return Promise.reject(`Error: ${res.status}`)
        }
    
    }

    async getUserInfo(): Promise<UserData>{
        const res: Response =  await fetch(`${this.baseUrl}/users/me`, { headers: this.headers})
        return this.checkResponse<UserData>(res)
    }



    async getInitialCards(): Promise<CardDataApi[]>{
        const res: Response =  await fetch(`${this.baseUrl}/cards`, {headers: this.headers})
        return this.checkResponse<CardDataApi[]>(res)

    }

    async editUserInfo(data: UserFormData): Promise<UserData> {
        const res: Response  = await fetch(`${this.baseUrl}/users/me`,{
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            })
        })

        return this.checkResponse<UserData>(res)
    }

    async addCard(data: CardData): Promise<CardDataApi>{
        const res: Response = await fetch(`${this.baseUrl}/cards`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            })
        } )

        return this.checkResponse<CardDataApi>(res)
    }

    async deleteCard(cardId: string): Promise<void> {
        const res: Response = await fetch(`${this.baseUrl}/cards/${cardId}`,{
            method: "DELETE",
            headers: this.headers,
        })

        return this.checkResponse<void>(res)
    }

    async changeLikeCardStatus(cardId: string, isLiked: boolean): Promise<CardDataApi> {
    if (isLiked) {
    const res: Response = await fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: this.headers
    });
    return this.checkResponse<CardDataApi>(res);
    } else {
    const res: Response = await fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: this.headers
    });
    return this.checkResponse<CardDataApi>(res);
        }
    }

    async updateAvatar(data: { avatar: string }): Promise<UserData> {
        const res: Response = await fetch(`${this.baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify({
                avatar: data.avatar
            })
        })
        return this.checkResponse<UserData>(res)
    }


}