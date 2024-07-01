import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = true
        this._user={}
        makeAutoObservable(this)
    }

    //Action

    setIsAuth(boolean) {
        this._isAuth = boolean
    }
    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }

}