export class NotThisPlayerTurnError extends Error {

}

export class AlreadyPlayedPositionError extends Error {

}

export class Position {
    public x: number
    public y: number

    constructor(x: number, y: number){
        this.x = x
        this.y = y
    }

    equals(other: Position): boolean{
        return this.x === other.x
         && this.y === other.y
    }
}

export class Game {
    private currentPlayerIsX: boolean = true
    private usedPosition: Position[] = [new Position(-1,-1)]
    
    user2PlaysAt(arg0: number, arg1: number) {
        const newPosition = new Position(arg0, arg1);
        if(this.usedPosition.filter( x => x.equals(newPosition)).length){
            throw new AlreadyPlayedPositionError()
        }
        if(this.currentPlayerIsX){
            throw new NotThisPlayerTurnError()
        }
        this.currentPlayerIsX = true
        this.usedPosition.push(newPosition)
    }

    user1PlaysAt(arg0: number, arg1: number) {
        const newPosition = new Position(arg0, arg1);
        if(this.usedPosition.filter( x => x.equals(newPosition)).length){
            throw new AlreadyPlayedPositionError()
        }
        if(! this.currentPlayerIsX){
            throw new NotThisPlayerTurnError()
        }
        this.currentPlayerIsX = false
        this.usedPosition.push(newPosition)
    }
}