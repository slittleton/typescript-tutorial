// This project implements code to sort multiple different types fo data structures
// using bubble sort

/*
  bubble sort uses two forloops
  it compares two values in a datastructure and if the element on the left is bigger than the 
  element on the right it will swap the two

  the result is that for each inner for loop run the greatest element will be put at the end. So in the next
  iteration we can ignore the very last element

*/


// bubble sort for an array

class Sorter {
  collection: number[] | string;

  constructor(collection: number[] | string) {
    this.collection = collection;
  }

  // SORT 
  sort(): void {

    const { length } = this.collection;

    for (let i = 0; i < length; i++) {

      for (let j = 0; j < length - i - 1; j++) {

        //-----------------------------------
        // check to see if need to swap and then swap in needed
        // Check Array for swap
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }

      // Check String for swap

      // Check Linked List for swap

      // -----------------------------------


      }

    }

  }

// 


}

const sorter = new Sorter([10, 3, -5, 0]);
console.log(sorter.collection);
