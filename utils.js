export function didUserWin(user, computer) {
    if (user === 'rock' && computer === 'scissors') return 'win';
    if (user === 'rock' && computer === 'paper') return 'lose';
    if (user === 'rock' && computer === 'rock') return 'tie';
    if (user === 'paper' && computer === 'scissors') return 'lose';
    if (user === 'paper' && computer === 'paper') return 'tie';
    if (user === 'paper' && computer === 'rock') return 'win';
    if (user === 'scissors' && computer === 'scissors') return 'tie';
    if (user === 'scissors' && computer === 'paper') return 'win';
    if (user === 'scissors' && computer === 'rock') return 'lose';
}