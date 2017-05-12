import { Product } from './product';
export class CartLine {
    constructor(payload) {
        this.product = payload;
        this.quantity = 1;
    }

    product: Product;
    quantity: number;
    
    // constructor(_product: Product){
    //     this.product = _product
    //     this.count = 1
    // }
    // product: Product;
    // count: number;
    // totalPrice(): number {
    //     return this.product.price * this.count;
    // }
}