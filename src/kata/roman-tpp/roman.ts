const romanDictionary: Map<number, string> = new Map<number, string>([
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
])

export class RomanTPPConverter {
    convert(decimal: number): string {
        if(romanDictionary.has(decimal))
            return <string>romanDictionary.get(decimal);
        let roman = "";
        romanDictionary.forEach(((value, key) =>{
            while (decimal >= key) {
                roman += value;
                decimal -= key;
            }
        }))
        return roman;
    }
}