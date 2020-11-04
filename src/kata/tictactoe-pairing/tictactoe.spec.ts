import {Game, NotThisPlayerTurnError, AlreadyPlayedPositionError} from "./Game";


describe('Tic Tac Toe', function () {

    // start from corner cases
    it('should not allow same user playing twice', function() {
        var game: Game = new Game()
        game.userXPlaysAt(1,1)
        expect(() => {game.userXPlaysAt(0,0)}).toThrowError(NotThisPlayerTurnError)

        var game2: Game = new Game()
        game2.userXPlaysAt(1,1)
        expect(()=> game2.userOPlaysAt(0,0)).not.toThrow()
        expect(() => game2.userOPlaysAt(2,2) ).toThrowError(NotThisPlayerTurnError)

        //transitive
        var game3: Game = new Game()
        game3.userXPlaysAt(1,1)
        expect(()=> game3.userOPlaysAt(0,0) ).not.toThrow()
        expect(()=> game3.userXPlaysAt(2,2) ).not.toThrow()
        expect(()=> game3.userOPlaysAt(1,0) ).not.toThrow()
    })


    it('should not allow playing on the same position', function() {
        var game: Game = new Game()
        game.userXPlaysAt(0,0)
        expect(() => game.userXPlaysAt(0,0) ).toThrow(AlreadyPlayedPositionError)

        var game2: Game = new Game()
        game2.userXPlaysAt(1,1)
        expect(() => game2.userOPlaysAt(1,1) ).toThrow(AlreadyPlayedPositionError)
    })


});