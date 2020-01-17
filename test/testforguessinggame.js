// IMPORT MODULES under test here:
// import example from '../src/example.js';
import isYes from '../isYes.js';
const test = QUnit.test;

test('testing isYes function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const imput = 'yes';
    const expected = true; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes (imput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('testing no function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const imput = 'no';
    const expected = false; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes (imput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});