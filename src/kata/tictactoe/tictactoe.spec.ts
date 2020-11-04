import {TicTacToe} from "./ticTacToe";

describe("TicTacToe", () => {
    it("should start with player X", () => {
        const ticTacToe = new TicTacToe();
        expect(ticTacToe.nextPlayer()).toBe("X")
    })
    it("should allow player to play on coordinate", () => {
        const ticTacToe = new TicTacToe();
        expect(ticTacToe.play(0, 0)).toBe(true)
    })
    it("should play O after playing X", () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.play(0, 0);
        expect(ticTacToe.nextPlayer()).toBe("O");
    })
    it("should play X after playing X and O", () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.play(0, 0);
        ticTacToe.play(1,0);
        expect(ticTacToe.nextPlayer()).toBe("X");
    })
    it("should mark played position on board", () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.play(0, 0);
        expect(ticTacToe.getValue(0, 0)).toBe("X");
    })
    it("should mark second played positions on board", () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.play(0, 0);
        ticTacToe.play(1, 0);
        expect(ticTacToe.getValue(1, 0)).toBe("O")
    })
    it("should mark third played positions on board", () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.play(0, 0);
        ticTacToe.play(1, 0);
        ticTacToe.play(2, 0);
        expect(ticTacToe.getValue(2, 0)).toBe("X")
    })
    it("should mark 3 played positions and be able to get second", () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.play(0, 0);
        ticTacToe.play(1,0);
        ticTacToe.play(2,0);
        expect(ticTacToe.getValue(1, 0)).toBe("O")
    })
    it("should mark 3 played positions and be able to get first", () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.play(0, 0);
        ticTacToe.play(1,0);
        ticTacToe.play(2,0);
        expect(ticTacToe.getValue(0, 0)).toBe("X")
    })
    it("should not allow to play on a played position", () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.play(0, 0);
        expect(ticTacToe.play(0, 0)).toBe(false);
    })
    it("should give winner X on the first horizontal line", () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.play(0, 0); //X
        ticTacToe.play(1, 0);
        ticTacToe.play(0, 1);
        ticTacToe.play(2, 0);
        ticTacToe.play(0, 2);
        expect(ticTacToe.winner()).toBe("X");
    })
    it("should give winner X on the second horizontal line", () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.play(1, 0); //X
        ticTacToe.play(0, 0);
        ticTacToe.play(1, 1);
        ticTacToe.play(0, 1);
        ticTacToe.play(1, 2);
        expect(ticTacToe.winner()).toBe("X");
    })
    it("should give winner X on the third horizontal line", () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.play(2, 0); //X
        ticTacToe.play(0, 0);
        ticTacToe.play(2, 1);
        ticTacToe.play(0, 1);
        ticTacToe.play(2, 2);
        expect(ticTacToe.winner()).toBe("X");
    })
    it("should give winner O on the first horizontal line", () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.play(1, 0); //X
        ticTacToe.play(0, 0);
        ticTacToe.play(1, 1);
        ticTacToe.play(0, 1);
        ticTacToe.play(2, 0);
        ticTacToe.play(0, 2);
        expect(ticTacToe.winner()).toBe("O");
    })
    it("should give winner X on the first vertical line", () => {
        const ticTacToe = new TicTacToe();
        ticTacToe.play(0, 0); // X
        ticTacToe.play(0, 1);
        ticTacToe.play(1, 0);
        ticTacToe.play(0, 2);
        ticTacToe.play(2, 0);
        expect(ticTacToe.winner()).toBe("X");
    })

})