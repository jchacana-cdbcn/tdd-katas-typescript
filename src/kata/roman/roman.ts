
export class Roman {
    
    convert = (num: number): string => {
        let result = "";
        let nearest: number = this.getNearestNumber(num);
        if(num >= nearest) {
            const nearestUnit = this.getNearestUnit(num);
            const newNearest = this.getNearestNumber(num + nearestUnit);
            if(newNearest - nearestUnit === num) {
                return this.getNearestSymbol(nearestUnit) + this.convert(num + nearestUnit);
            }
            num -= nearest;
            return this.getNearestSymbol(nearest) + this.convert(num);
        }
        return result;
    }

    private getNearestNumber(num: number): number {
        if(num >= 50) return 50;
        if(num >= 10) return 10;
        if(num >= 5) return 5;
        return 1;
    }

    private getNearestSymbol(num: number): string {
        if(num === 50) return "L";
        if(num === 10) return "X";
        if(num === 5) return "V";
        return "I";
    }

    private getNearestUnit(num: number): number {
        if(num % 10 === 0) return 10;
        return 1;
    }
}
