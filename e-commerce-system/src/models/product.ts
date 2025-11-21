import { calculateDiscount } from "../utils/discountCalculator";
import { calculateTax } from "../utils/taxCalculator";

export class Product{
    id:number ;
    title:string; 
    description: string ;
    category: string 
    price:number
    discountPercentage: number
    
    constructor(id:number, 
        title:string,
         description:string, 
         category:string, 
         price: number,
         discountPercentage: number ){
        this.id =id 
        this.description =description
        this.title= title 
        this.category = category
        this.price = price 
        this.discountPercentage = discountPercentage
    }

    displayDetails():string{
        return ` ${this.title} Cost: $${this.price.toFixed(2)}, Description: ${this.description}, Category: ${this.category}`

    }
    getPriceWithDiscount(): string {
        const discountedPrice = calculateDiscount(this.discountPercentage)(this.price);
        const fullPriceWithTax = calculateTax(parseInt(discountedPrice),this.category === "groceries" ? 0.03 : 0.0475);
        return `Discount Price: $${discountedPrice} and the Full Price is $${fullPriceWithTax.toFixed(2)}`;
    }
}