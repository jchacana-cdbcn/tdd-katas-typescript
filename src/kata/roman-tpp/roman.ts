const romanDictionary: Map<number, string> = new Map<number, string>([
    [1, "I"],
    [4, "IV"],
    [5, "V"]
])

export class RomanTPPConverter {
    convert(decimal: number): string {
        if(romanDictionary.has(decimal))
            return <string>romanDictionary.get(decimal);
        if(decimal > 5 ) {
            return romanDictionary.get(5) + this.convert(decimal - 5);
        }
        return romanDictionary.get(1) + this.convert(decimal - 1)
    }
}