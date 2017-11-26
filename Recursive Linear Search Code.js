//Recursive Linear Search Code.
function RcLinSearch(array, key, count) {
  var elementcount;

  //console.log(count);
  //return;
  if (count === undefined) {
    elementcount = array.length;
    elementcount = elementcount - 1;
  } else elementcount = count - 1;

  if (elementcount < 0) {
    // Base case - not found
    //return -1;
    console.log("-1");
    return;
  }
  if (array[elementcount] === key) {
    // Base case - found

    console.log("Element " + key + " found in the array");
    return;
  }

  return RcLinSearch(array, key, elementcount);
}

var array = [5, 8, 10, 15, 17];
//var key = 12;
//RcLinSearch(array, key);
//RcLinSearch(array, 66);
RcLinSearch([5, 8, 10, 15, 17], 8);