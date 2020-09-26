export function resultCalc(draw, winner) {
    if (draw || winner) {

        if (draw === 1) {
            return 'D'
        } else if (winner === 'X') {
            return 'X'
        } else if (winner === 'O') {
            return 'O'
        }
    } else {
        return null;
    }

}