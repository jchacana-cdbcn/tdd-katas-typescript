export const fizzbuzz = (num: number): string  => {
    let fbz = ""
    if(isMultipleOf3(num)) fbz += "Fizz" 
    if(isMultipleOf5(num)) fbz += "Buzz"
    if(fbz.length !== 0) return fbz
    return num.toString();
}

const isMultipleOf3 = (num: number): boolean => {
    return num % 3 === 0;
}
const isMultipleOf5 = (num: number): boolean => {
    return num % 5 === 0;
}
