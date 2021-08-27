import { Products } from "./products";

export class Item {
    product: Products;
    quantity: number;
    constructor(){
        this.product = new Products();
        this.quantity = 0;
    }
}
