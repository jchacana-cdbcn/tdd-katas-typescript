
export class Roman {
    
    convert = (decimal: number): string => {
        let roman = "";
        let nearest: number = this.getNearestNumber(decimal);
        if(decimal >= nearest) {
            const nearestUnit = this.getNearestUnit(decimal);
            const newNearest = this.getNearestNumber(decimal + nearestUnit);
            if(newNearest - nearestUnit === decimal) {
                return this.getNearestSymbol(nearestUnit) + this.convert(newNearest);
            }
            decimal -= nearest;
            return this.getNearestSymbol(nearest) + this.convert(decimal);
        }
        return roman;
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
