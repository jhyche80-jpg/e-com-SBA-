import { calculateDiscount } from "../utils/discountCalculator";
class Product{
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
        return ` ${this.title} Cost: $${this.price}, Description: ${this.description}, Category: ${this.category}`

    }
    GetPriceWithDiscount():string {
        let discount = calculateDiscount(this.discountPercentage)
        return`Discount Price: $${discount(this.price)}`
    }

}