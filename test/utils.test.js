// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getCompRockPaperScissors } from '../utils.js';

const test = QUnit.test;

test('if it takes in one should return rock', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'rock';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getCompRockPaperScissors(1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if it takes in two should return paper', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'paper';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getCompRockPaperScissors(2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if it takes in three should return scissors', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'scissors';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getCompRockPaperScissors(3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
