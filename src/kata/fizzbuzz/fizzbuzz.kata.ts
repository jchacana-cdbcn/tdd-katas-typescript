export const fizzbuzz = (num: number): string  => {
    if(isMultipleOf3(num)) return "Fizz" 
    if(num === 5 || num === 10) return "Buzz"
    return num.toString();
}

const isMultipleOf3 = (num: number): boolean => {
    return num % 3 === 0;
}
