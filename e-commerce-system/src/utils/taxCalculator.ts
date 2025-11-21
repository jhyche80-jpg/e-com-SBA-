export function calculateTax(priceAfterDIs:number,tax:number):number{
    let result:number =  priceAfterDIs-(priceAfterDIs*tax)
    return result

}