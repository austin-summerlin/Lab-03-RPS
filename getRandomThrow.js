export function getRandomThrow() {
    const randomNumber = Math.round(Math.random() * 3);
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else if (randomNumber === 3) return 'scissors';
}