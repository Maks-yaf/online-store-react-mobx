import {makeAutoObservable} from "mobx";

export default  class DeviceStore {
    constructor() {
        this._types =[
            { id: 1, name: "Computers"},
            { id: 2, name: "Phones"},
        ]
        this._brands =[
            { id: 1, name: "Samsung"},
            { id: 2, name: "Apple"},
        ]
        this._devices = [
            { id: 1, name: "Iphone 12 pro", price: 1000, rating: 5, img: 'H'},
            { id: 2, name: "Iphone 13 pro", price: 1000, rating: 5, img: 'H'},
            { id: 3, name: "Iphone 14 pro", price: 1000, rating: 5, img: 'H'},
            { id: 4, name: "Iphone 15 pro", price: 1000, rating: 5, img: 'H'},
        ]
        makeAutoObservable(this)
    }

    //Action
    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }

}