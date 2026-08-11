export default class Order{
    productId:number;
    quantity: number;
    price:number;

    constructor(productId:number, quantity:number, price:number){
        this.productId = productId;
        this.quantity =quantity;
        this.price =price;
    }
}


export function processOrder(order: Order): void {
    if (order.quantity < 1) {
        throw new ValidationError("Quantity must be at least 1");
    } else if (order.price <= 0) {
        throw new PaymentError("Price should be +ve number");
    }
}

export class ValidationError extends Error {
    constructor (message:string){
        super(message);
        this.name = 'ValidationError';
    }
}

export class PaymentError extends Error{
    constructor (message:string){
        super(message);
        this.name = 'PaymentError';
    }
}

export function handleOrder(order:Order):void{
    try{
        processOrder(order);
    }catch(error){
    if(error instanceof ValidationError){
        console.log("Validation Error:", error.message);

    }else if(error instanceof PaymentError){
        console.log("Payment Error:", error.message);
    }
}
}