// IMPORT MODULES under test here:
import checkNumbers from '../randomizer.js';
// import example from '../src/example.js';

const test = QUnit.test;


//     //Arrange
//     // Set up your parameters and expectations
test('when numbers are identical', function(assert) {
    
    //     //Act 
    //     // Call the function you're testing and set the result to a const
    
    const guess = 5;
    const correctNumber = 5;
    const shouldBeRightAnswer = (guess, correctNumber);
    
    //     //Assert
    //     // Make assertions about what is expected valid result
    
    assert.equal(shouldBeRightAnswer, 5)
});

// //     //Arrange
// //     // Set up your parameters and expectations

test('-1 when number is too low', function(assert) {
    
    //     //Act 
    //     // Call the function you're testing and set the result to a const
    
    const guess = 9;
    const correctNumber = 13;
    const shouldBeRightAnswer = checkNumbers (guess, correctNumber);
    
    //     //Assert
    //     // Make assertions about what is expected valid result
    
    assert.equal(shouldBeRightAnswer, -1);
});

test('1 when the number is too high', function(assert) {
    const guess = 15;
    const correctNumber = 9;
    const shouldBe9 = checkNumbers (guess, correctNumber);
            
    assert.equal(shouldBe9, 1);
            
});
