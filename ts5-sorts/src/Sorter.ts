import { Sortable } from "./interfaces/Sortable";
// import { NumbersCollection } from "./NumberCollection";


/**
 * Abstract classes cannot be instantiated
 * they can only be parent classes
 * they can use methods that will be implemented in the child classes but 
 * those methods must be listed in the abstract class (but you don't need to implement them)
 * mark methods that will be implemented later with keyword abstract
*/


export abstract class Sorter {

  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  // SORT 
  sort(): void {

    const { length } = this;

    // outer loop
    for (let i = 0; i < length; i++) {
      // loop that runns though all values except the the last + current 
      // in other words if the list is 10 elements then the first round checks 9, 
      // the second round checks up to element 8
      // this is because in bubble sort the first round puts the bigges element at the end
      // the second round puts the second biggest element at the end and so on
      // so with each round you don't need to check the elements that have previously been put at the end
      // because we know those elements are sorted
      for (let j = 0; j < length - i - 1; j++) {

        //Check for swap and swap if required
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }

      }
    }
  }
}


