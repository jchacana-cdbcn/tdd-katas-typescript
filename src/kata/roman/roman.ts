
export class Roman {
    
    convert = (num: number): string => {
        let result = "";
        let nearest: number = this.getNearestNumber(num);
        if(num >= nearest) {
            num -= nearest;
            return this.getNearestSymbol(nearest) + this.convert(num);
        }
        //if(num === 4 || num === 9) return "I" + this.convert(num + 1);
        return result;
    }

    private getNearestNumber(num: number) {
        if(num >= 10) return 10;
        if(num >= 5) return 5;
        return 1;
    }

    private getNearestSymbol(num: number) {
        if(num === 10) return "X";
        if(num === 5) return "V";
        return "I";
    }
}
