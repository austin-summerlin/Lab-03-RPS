// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('if it takes in rock and rock should return tie', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'tie';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if it takes in rock and scissors should return win', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('if it takes in rock and paper should return lose', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'lose';

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});