import {makeAutoObservable} from "mobx";

export default  class DeviceStore {
    constructor() {
        this._types =[
            { id: 1, name: "Computers"},
            { id: 2, name: "Phones"},
            { id: 3, name: "TVs"},
            { id: 4, name: "Tablets"},
        ]
        this._brands =[
            { id: 1, name: "Samsung"},
            { id: 2, name: "Apple"},
            { id: 3, name: "Huawei"},
            { id: 4, name: "Honor"},
            { id: 5, name: "Nokia"},
        ]
        this._devices = [
            { id: 1, name: "Iphone 12 pro", price: 1000, rating: 5, img: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/58/5860220/Smartfon-APPLE-iPhone-15-128GB-5G-6-1-Czarny-front-tyl-3.jpg'},
            { id: 2, name: "Iphone 13 pro", price: 1000, rating: 4.5, img: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/58/5860220/Smartfon-APPLE-iPhone-15-128GB-5G-6-1-Czarny-front-tyl-3.jpg'},
            { id: 3, name: "Iphone 14 pro", price: 1000, rating: 3, img: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/58/5860220/Smartfon-APPLE-iPhone-15-128GB-5G-6-1-Czarny-front-tyl-3.jpg'},
            { id: 4, name: "Iphone 15 pro", price: 1000, rating: 2, img: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/58/5860220/Smartfon-APPLE-iPhone-15-128GB-5G-6-1-Czarny-front-tyl-3.jpg'},
            { id: 5, name: "Iphone 15 pro", price: 1000, rating: 2, img: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/58/5860220/Smartfon-APPLE-iPhone-15-128GB-5G-6-1-Czarny-front-tyl-3.jpg'},
            { id: 6, name: "Iphone 15 pro", price: 1000, rating: 2, img: 'https://prod-api.mediaexpert.pl/api/images/gallery_500_500/thumbnails/images/58/5860220/Smartfon-APPLE-iPhone-15-128GB-5G-6-1-Czarny-front-tyl-3.jpg'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
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
    setSelectedType(type) {
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
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
    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }

}