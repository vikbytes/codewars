//return the total number of smiling faces in the array
function countSmileys(arr) {
  let number = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    if (temp[0] === ":" || temp[0] === ";") {
      if (temp[1] === "-" || temp[1] === "~") {
        if (temp[2] === ")" || temp[2] === "D") {
          number += 1;
        }
      } else if (temp[1] === ")" || temp[1] === "D") {
        number += 1;
      }
    }
  }
  return number;
}
