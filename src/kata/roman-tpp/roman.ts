export class RomanTPPConverter {
    convert(decimal: number) {
        let roman = ["I", "II", "III"];
        return roman[decimal-1];
    }
}