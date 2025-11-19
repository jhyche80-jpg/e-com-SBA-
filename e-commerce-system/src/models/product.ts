class Product{
    id:number ;
    title:string; 
    description: string ;
    category: string 
    price:number
    
    constructor(id:number, title:string, description:string, category:string, price: number ){
        this.id =id 
        this.description =description
        this.title= title 
        this.category = category
        this.price = price 
    }

    displayDetails():string{
        
    }
    GetPriceWithDiscount():number 

}