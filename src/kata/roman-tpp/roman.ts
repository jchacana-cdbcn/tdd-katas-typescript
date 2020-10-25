export class RomanTPPConverter {
    convert(decimal: number) {
        let roman = "I";
        if(decimal > 1)
            roman += "I"
        return roman;
    }
}