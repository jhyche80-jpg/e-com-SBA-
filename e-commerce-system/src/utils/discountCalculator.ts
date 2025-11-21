export function calculateDiscount(dis: number): (price: number) => string  {
    return function(price: number): string  {
        let result = price * (1 - dis);
        return result.toFixed(2)
    }
}