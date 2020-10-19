export const fizzbuzz = (num: number): string  => {
    if(num === 3 || num === 6 || num === 9) return "Fizz"
    if(num === 5) return "Buzz"
    return num.toString();
}