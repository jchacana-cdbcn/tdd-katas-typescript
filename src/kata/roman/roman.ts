export class Roman {
    
    romanOne: string = "I";
    romanFive: string = "V";
    romanTen: string = "X";

    convert = (num: number): string => {
        if(num === 10) return this.romanTen;
        if(num === 4 || num === 9) return this.romanOne + this.convert(num + 1);
        let result = "";
        if(num >= 5) {
            result = this.romanFive;
            num -= 5;
        }
        for(let i = 0; i < num; i++) {
            result += this.romanOne;
        }
        return result;
    }
}