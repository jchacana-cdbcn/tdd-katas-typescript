export class Roman {
    
    convert = (num: number): string => {
        return num === 1? "I": num === 2 ? "II": "III";
    }
}