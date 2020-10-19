export const fizzbuzz = (num: number): string  => {
    let fbz = ""
    if(isMultipleOf(num, 3)) fbz += "Fizz" 
    if(isMultipleOf(num, 5)) fbz += "Buzz"
    if(fbz.length !== 0) return fbz
    return num.toString();
}

const isMultipleOf = (num: number, multiple: number): boolean => {
    return num % multiple === 0;
}
