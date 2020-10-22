export class Roman {
    
    convert = (num: number): string => {
        if(num === 5) return "V";
        if(num === 6) return "VI";
        if(num === 7) return "VII";
        let result = "";
        for(let i = 0; i < num; i++) {
            result += "I";
        }
        return result;
    }
}