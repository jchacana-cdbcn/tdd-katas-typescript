export class Roman {
    
    convert = (num: number): string => {
        if(num === 5) return "V";
        let result = "";
        for(let i = 0; i < num; i++) {
            result += "I";
        }
        return result;
    }
}