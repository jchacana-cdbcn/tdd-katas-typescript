const romanDictionary: Map<number, string> = new Map<number, string>([
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
])

export class RomanTPPConverter {

    convert(decimal: number): string {
        const keys = Array.from(romanDictionary.keys());
        return this.convertRecursive(decimal, keys);
    }

    convertRecursive(decimal: number, numbers: number[]): string {
        if(romanDictionary.has(decimal))
            return <string>romanDictionary.get(decimal);
        const key = numbers[0]
        if(!key) return "";
        if (decimal >= key) {
            return romanDictionary.get(key) + this.convertRecursive(decimal - key, numbers);
        } else
            return this.convertRecursive(decimal, numbers.slice(1))
    }
}