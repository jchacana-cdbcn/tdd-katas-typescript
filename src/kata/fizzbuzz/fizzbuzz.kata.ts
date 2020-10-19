export const fizzbuzz = (num: number): string  => {
    if(isMultipleOf15(num)) return "FizzBuzz"
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

function isMultipleOf15(num: number) {
    return isMultipleOf3(num) && isMultipleOf5(num)
}

