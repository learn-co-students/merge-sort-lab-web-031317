// removes first index of a SORTED arr
function findMinAndRemoveSorted(arr) {
  return arr.shift()
}

function merge(arr1, arr2) {
  // declare a var to store the result of the sorted arr
  let sorted = []

  // while each array has at least one element, find the arr whose first element is
  // of lesser value. Pass this arr to findMinAndRemoveSorted and push the return
  // value to sorted
  while(arr1.length !== 0 && arr2.length !== 0) {
    if(arr1[0] < arr2[0]) {
      sorted.push(findMinAndRemoveSorted(arr1))
    } else {
      sorted.push(findMinAndRemoveSorted(arr2))
    }
  }

  // return sorted, concat'ing each of the arrays
  return sorted.concat(arr1).concat(arr2)
}

function mergeSort(arr) {
  // find the mid point of the arr, then declare a var equal to the first half and
  // the second half
  let mid = arr.length / 2
  let firstHalf = arr.slice(0, mid)
  let secondHalf = arr.slice(mid, arr.length)

  // if the arr is less than 2, return as it is already sorted. else, return the
  // merge function, passing the return val of mergeSort(arr1) and mergSort(arr2)
  // as arguments
  if(arr.length < 2) {
    return arr
  } else {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
