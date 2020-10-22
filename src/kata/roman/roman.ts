
export class Roman {
    
    convert = (num: number): string => {
        let result = "";
        while(num >= 10) {
            result += "X";
            num -= 10;
        }
        if(num === 4 || num === 9) return "I" + this.convert(num + 1);
        if(num >= 5) {
            result = "V";
            num -= 5;
        }
        while(num >= 1) {
            result += "I";
            num -= 1;
        }
        return result;
    }
}
