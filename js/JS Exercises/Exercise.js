// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
//Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2]
// should return [[1,2], ["2", "3"]]

const input = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const inputTwo = [1, "2", "3", 2];

function answer(arr) {
  const newArr = [];
  arr
    .sort((a, b) => a - b)
    .forEach((num, i) => {
      // debugger;
      // if first number of array
      if (i === 0) {
        newArr.push(num);
        // if not first number of array
      } else if (i > 0) {
        const prevItem = newArr[newArr.length - 1];
        // if the prev element is an array with the same value as the current number,
        // add current number at the end of the sub-array
        if (typeof prevItem === "object" && prevItem[0] === num) {
          prevItem.push(num);
          // if the prev element is an array but the value of its elements are different
          // add current number at the end of the array
        } else if (typeof prevItem === "object" && prevItem[0] !== num) {
          newArr.push(num);
          // if the prev element is a single number and is equal to the current number
          // replace prev number with an array containing prev num and current num
        } else if (typeof prevItem !== "object" && prevItem === num) {
          newArr.pop();
          newArr.push([prevItem, num]);
          // if the prev element is a single number and is not equal to the current number,
          // add current number at the end of the array
        } else if (typeof prevItem !== "object" && prevItem !== num) {
          newArr.push(num);
        }
      }
    });
  return newArr;
}

function answerTwo(arr) {
  const newArr = [];
  arr
    .sort((a, b) => a - b)
    .forEach((num, i) => {
      if (i === 0) {
        newArr.push(num);
      } else if (i > 0) {
        // Check if there is a sub array with elements of the same typeof of current el
        const sameTypeArr = newArr.find(
          arr => typeof arr === "object" && typeof arr[0] === typeof num
        );
        // if so, add current el to that array
        if (sameTypeArr) {
          toArrArr.push(num);
          // if not, check if the array contains another item of same typeof
        } else {
          const sameTypeItem = newArr.find(el => typeof el === typeof num);
          // if so, find that item and replace it with a new sub array containing both
          // the item and the current number
          if (sameTypeItem) {
            const index = newArr.indexOf(sameTypeItem);
            newArr.splice(index, 1, [sameTypeItem, num]);
            // if not, add current number to the end of the array
          } else {
            newArr.push(num);
          }
        }
      }
    });
  return newArr;
}

answer(input);
answerTwo(inputTwo);

// Question 2: Write a javascript function that takes an array of numbers and a target number.
// The function should find two different numbers in the array that, when added together,
// give the target number. For example: answer([1,2,3], 4)should return [1,3]

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect
// the formats so that if you enter HEX color format it returns RGB
// and if you enter RGB color format it returns HEX.
