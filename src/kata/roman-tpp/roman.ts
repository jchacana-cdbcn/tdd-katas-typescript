const romanDictionary: Map<number, string> = new Map<number, string>([
    [1, "I"],
    [4, "IV"]
])

export class RomanTPPConverter {
    convert(decimal: number): string {
        if(romanDictionary.has(decimal))
            return <string>romanDictionary.get(decimal);
        return romanDictionary.get(1) + this.convert(decimal - 1)
    }
}