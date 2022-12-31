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


import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumberCollection';
import { LinkedList } from './LinkedList';

//-------- Sort Array of numbers ---------
const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

//------- Sort a string of characters----------
const charactersCollection = new CharactersCollection('Xacghdfeayb');
charactersCollection.sort();
console.log(charactersCollection.data);

//------- Sort a linked list of numbers ----------
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();


