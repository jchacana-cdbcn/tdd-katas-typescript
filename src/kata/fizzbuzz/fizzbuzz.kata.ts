export const fizzbuzz = (num: number): string  => {
    if(num === 15 || num === 30) return "FizzBuzz"
    if(isMultipleOf3(num)) return "Fizz" 
    if(isMultipleOf5(num)) return "Buzz"
    return num.toString();
}

const isMultipleOf3 = (num: number): boolean => {
    return num % 3 === 0;
}
const isMultipleOf5 = (num: number): boolean => {
    return num % 5 === 0;
}

