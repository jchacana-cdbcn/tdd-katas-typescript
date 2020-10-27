const romanDictionary: Map<number, string> = new Map<number, string>([
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
        while(decimal >= 40) {
            return romanDictionary.get(40) + this.convert(decimal - 40);
        }
        while(decimal > 10) {
            return romanDictionary.get(10) + this.convert(decimal - 10);
        }
        while(decimal > 5 ) {
            return romanDictionary.get(5) + this.convert(decimal - 5);
        }
        return romanDictionary.get(1) + this.convert(decimal - 1)
    }
}