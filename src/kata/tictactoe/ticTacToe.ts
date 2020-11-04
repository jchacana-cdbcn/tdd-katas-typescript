class Position {
    private _x: number;
    private _y: number;
    private _value: string;

    constructor(x: number, y: number, value: string) {
        this._x = x;
        this._y = y;
        this._value = value;
    }

    get value(): string {
        return this._value;
    }
    get x(): number {
        return this._x;
    }
    get y(): number {
        return this._y;
    }
}

export class TicTacToe {


    private currentPlayer: string = "X";
    private playedPositions: Position[] = new Array<Position>()

    nextPlayer(): string {
        return this.currentPlayer;
    }

    play(x: number, y: number): boolean {
        if(this.hasBeenPlayed(x, y))
            return false;
        this.playedPositions.push(new Position(x, y, this.currentPlayer));
        this.rotatePlayer();
        return true;
    }

    private hasBeenPlayed(x: number, y: number) {
        return this.getValue(x, y) !== undefined;
    }

    private rotatePlayer() {
        if (this.currentPlayer === "X")
            this.currentPlayer = "O";
        else
            this.currentPlayer = "X";
    }

    getValue(x: number, y: number): string {
        return this.playedPositions.filter(value => value.x === x && value.y === y)
            .map(value => value.value)[0]
    }

    winner(): string {
        const indexes = [0, 1, 2];
        const horizontalWinner = indexes
            .map(value => this.isHorizontal(value))
            .reduce(((previousValue, currentValue) => previousValue + currentValue));
        const verticalWinner = this.isVertical(0);
        return horizontalWinner !== "" ? horizontalWinner : verticalWinner;
    }

    private isHorizontal(lineNumber: number): string {
        const horizontalLine = this.playedPositions.filter(value => value.x === lineNumber);
        if(horizontalLine.length < 3) return "";
        const xPlays = horizontalLine.filter(value => value.value === "X");
        const oPlays = horizontalLine.filter(value => value.value === "O");
        return xPlays
            .length === 3 ? "X": oPlays.length === 3 ? "O": "";

    }

    private isVertical(lineNumber: number) {
        const verticalLine = this.playedPositions.filter(value => value.y === lineNumber);
        if(verticalLine.length !== 3) return "";
        return verticalLine.filter(value => value.value === "X")
            .length === 3 ? "X": "O";
    }
}