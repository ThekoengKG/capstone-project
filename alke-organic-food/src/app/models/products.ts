export class Products {
    _id: number;
    product_id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;

    constructor(){
        this._id = 0;
        this.product_id = 0;
        this.name = "";
        this.price = 0;
        this.quantity = 0;
        this.image = "";
    }
}
