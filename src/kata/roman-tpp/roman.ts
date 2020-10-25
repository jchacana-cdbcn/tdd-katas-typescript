const romanDictionary: Map<number, string> = new Map<number, string>([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"]
])

export class RomanTPPConverter {
    convert(decimal: number) {
        return romanDictionary.get(decimal);
    }
}