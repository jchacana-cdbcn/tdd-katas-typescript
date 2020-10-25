const romanDictionary: Map<number, string> = new Map<number, string>([
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],

])

export class RomanTPPConverter {
    convert(decimal: number): string {
        if(romanDictionary.has(decimal))
            return <string>romanDictionary.get(decimal);
        if(decimal > 40) {
            return romanDictionary.get(40) + this.convert(decimal - 40);
        }
        if(decimal > 10) {
            return romanDictionary.get(10) + this.convert(decimal - 10);
        }
        if(decimal > 5 ) {
            return romanDictionary.get(5) + this.convert(decimal - 5);
        }
        return romanDictionary.get(1) + this.convert(decimal - 1)
    }
}