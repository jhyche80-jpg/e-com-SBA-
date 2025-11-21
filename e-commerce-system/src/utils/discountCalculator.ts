export  function calculateDiscount(dis: number): (price: number) => string  {
    return function(price: number): string  {
        let result:number = price * (dis);
        return result.toFixed(2)
    }
}

