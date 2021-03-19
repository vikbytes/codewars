function arrayDiff(a, b) {
  // Loop through the elements we want to remove
  for (let i = 0; i < b.length; i++) {
    // For each of the elements we wanna remove, we run
    // through the a array
    for (let j = 0; j < a.length; j++) {
      if (a[j] === b[i]) {
        // An element matched an element we wanna remove, remove it
        a.splice(j, 1);
        // Have to make sure we don't iterate past an element since we
        // Removed one now
        j--;
      }
    }
  }
  return a;
}
