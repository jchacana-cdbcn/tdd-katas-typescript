const romanDictionary: Map<number, string> = new Map<number, string>([
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
        if(romanDictionary.has(decimal))
            return <string>romanDictionary.get(decimal);
        const keys = Array.from(romanDictionary.keys());
        for (let key of keys) {
            while (decimal >= key) {
                return romanDictionary.get(key) + this.convert(decimal - key);
            }
        }
        return "";
    }
}