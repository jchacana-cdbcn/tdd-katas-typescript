
export class Roman {
    
    convert = (decimal: number): string => {
        let nearest: number = this.getNearestNumber(decimal);
        if(decimal >= nearest) {
            return this.getNearestSymbol(nearest) + this.convert(decimal - nearest);
        }
        return "";
    }

    getNearestNumber = (num: number): number => {
        if(num >= 100) return 100;
        if(num >= 90) return 90;
        if(num >= 50) return 50;
        if(num >= 40) return 40
        if(num >= 10) return 10;
        if(num >= 9) return 9;
        if(num >= 5) return 5;
        if(num >= 4) return 4;
        return 1;
    }

    getNearestSymbol = (num: number): string => {
        if(num === 100) return "C";
        if(num === 90) return "XC";
        if(num === 50) return "L";
        if(num === 40) return "XL";
        if(num === 10) return "X";
        if(num === 9) return "IX";
        if(num === 5) return "V";
        if(num === 4) return "IV";
        return "I";
    }

}
