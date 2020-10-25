export class RomanTPPConverter {
    convert(decimal: number) {
        let roman = ["I", "II", "III", "IV"];
        return roman[decimal-1];
    }
}