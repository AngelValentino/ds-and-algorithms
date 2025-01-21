// Print pyramids and stairs

//* Time Complexity - O(n)
function printSteps(n) {
  if (n <= 0) return;
  let row = '';
  let i = 1;
  while (i <= n) {
    row += '#';
    console.log(row);
    i++;
  }
}

//* Time Complexity - O(n^2)
function printInvertedSteps(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
      row += ' ';
    }
    for (let k = 1; k <= i; k++) {
      row += '#';
    }
    console.log(row);
  }
}

//* Time Complexity - O(n^2)
function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n - i; j++) {
      row += ' ';
    }
    for (let k = 1; k <= i * 2 - 1; k++) {
      row += '#';
    }
    console.log(row);
  }
}