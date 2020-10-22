export class Roman {
    
    convert = (num: number): string => {
        let result = "";
        for(let i = 0; i < num; i++) {
            result += "I";
        }
        return result;
    }
}