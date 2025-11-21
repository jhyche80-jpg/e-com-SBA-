import { Product } from "./models/product";
import { fetchData } from "./services/apiService";
import { calculateTax } from "./utils/taxCalculator";

interface ProductResponse {
    id:number ;
    title:string; 
    description: string ;
    category: string ;
    price:number;
    discountPercentage: number;
}

async function main():Promise <void>{
    try {
         const data:ProductResponse = await fetchData('https://dummyjson.com/products/1')
         const product = new Product(
            data.id, 
            data.title,
            data.description,
            data.category, 
            data.price,
            data.discountPercentage
            
         )
        console.log("product Loaded:", product.displayDetails(), product.getPriceWithDiscount())
        console.log(product)
        
    } catch (error) {
          console.error("Error fetching or processing product:", error);
    }
    
}
main()
