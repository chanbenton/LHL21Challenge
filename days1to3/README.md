## Challenge #1

Different lighthouse operators are given different size grids based on their skills. Every lighthouse operator likes to be able to boast about how large their grid is. Grids always start at A on the X-axis and never go above Z. They can have any number of rows. Let's figure out how large yours is!

Up above you have access to the printed-out grid, and the JS code for the grid. This is your grid, for your lighthouse.

Write a function called gridSize() that will tell you the size of your grid in the format width x height. Your function should return a string, and in this example, your function should return the string "10 x 10". But you have to make sure that you figure that string out by actually measuring your grid!

==

## Challenge #2

Awesome job! Other lighthouse operators are jealous of your grid, and your code skills. Just to show off, let's write a new function for the system which will count up how many cells total there are. Given the code you just wrote, this should be pretty easy.

Write a new function called totalCells() which will return the total number of cells in your grid. For this grid, it should return 100, but again make sure that is a calculated value and not just a number you type in for your function to return. We want to make all the other lighthouse operators jealous.

==

## Challenge #3

Okay, let's get our lighthouse actually doing some work! As the lighthouse keeper, sometimes you'll need to shine the light directly on a particular cell in the grid, to alert passing ships to a danger there.

Your job is to write a function called lightCell() that takes in the coordinates in the form of 'A3' or 'J9' and returns the contents of that specific cell. (Ex: lightCell('B4'); would return "")


```
const GRID = [
      ["", "", "", "^", "", "", "", "", "", ""],
      ["", "", "", "", "~", "", "", "", "", ""],
      ["", "", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "^", "~", "~", "", "", "", "^", "", ""],
      ["", "^", "", "~", "~", "", "", "", "", ""],
      ["", "^", "", "", "~", "~", "", "", "", ""],
    ];
```

```    
     A   B   C   D   E   F   G   H   I   J
   +---+---+---+---+---+---+---+---+---+---+
1  |   |   |   | ^ |   |   |   |   |   |   |
   +---+---+---+---+---+---+---+---+---+---+
2  |   |   |   |   | ~ |   |   |   |   |   |
   +---+---+---+---+---+---+---+---+---+---+
3  |   |   |   |   | ^ | ^ |   |   |   |   |
   +---+---+---+---+---+---+---+---+---+---+
4  |   |   |   |   | ^ | ^ |   |   |   |   |
   +---+---+---+---+---+---+---+---+---+---+
5  |   |   |   |   |   |   |   |   |   |   |
   +---+---+---+---+---+---+---+---+---+---+
6  |   |   |   |   |   |   |   |   |   |   |
   +---+---+---+---+---+---+---+---+---+---+
7  |   |   |   |   |   |   |   |   |   |   |
   +---+---+---+---+---+---+---+---+---+---+
8  |   | ^ | ~ | ~ |   |   |   | ^ |   |   |
   +---+---+---+---+---+---+---+---+---+---+
9  |   | ^ |   | ~ | ~ |   |   |   |   |   |
   +---+---+---+---+---+---+---+---+---+---+
10 |   | ^ |   |   | ~ | ~ |   |   |   |   |
   +---+---+---+---+---+---+---+---+---+---+
```