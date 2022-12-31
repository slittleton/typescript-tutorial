"use strict";
// This project implements code to sort multiple different types fo data structures
// using bubble sort
Object.defineProperty(exports, "__esModule", { value: true });
/*
  bubble sort uses two forloops
  it compares two values in a datastructure and if the element on the left is bigger than the
  element on the right it will swap the two

  the result is that for each inner for loop run the greatest element will be put at the end. So in the next
  iteration we can ignore the very last element

*/
// bubble sort for an array
const CharactersCollection_1 = require("./CharactersCollection");
const NumberCollection_1 = require("./NumberCollection");
const LinkedList_1 = require("./LinkedList");
//-------- Sort Array of numbers ---------
const numbersCollection = new NumberCollection_1.NumbersCollection([50, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
//------- Sort a string of characters----------
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xacghdfeayb');
charactersCollection.sort();
console.log(charactersCollection.data);
//------- Sort a linked list of numbers ----------
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
