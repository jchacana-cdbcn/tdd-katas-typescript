interface MyEnum {
    [key: number]: string
}

var romanToDecimal: MyEnum = {
    1: "I",
    5: "V",
    10: "X"
}

export class Roman {
    
    convert = (num: number): string => {
        let result = "";
        while(num >= 10) {
            result += romanToDecimal[10];
            num -= 10;
        }
        if(num === 4 || num === 9) return romanToDecimal[1] + this.convert(num + 1);
        if(num >= 5) {
            result = romanToDecimal[5];
            num -= 5;
        }
        while(num >= 1) {
            result += romanToDecimal[1];
            num -= 1;
        }
        return result;
    }
}
