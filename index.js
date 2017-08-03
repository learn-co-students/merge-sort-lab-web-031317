function findMinAndRemove(array) {
  let min = array[0]
  let minIndex = 0
  for(let i = 0; i < array.length; i++){
    if (array[i] < min){
      min = array[i]
      minIndex = i
    }
    array.splice(i, 1)
    return min
  }
}

function merge(array1, array2) {
  //need to split
  var sorted = []
  while(array1.length > 0 && array2.length > 0){
    if(array1[0] < array2[0]){
      sorted.push(findMinAndRemove(array1))
    } else {
      sorted.push(findMinAndRemove(array2))
    }
  }
  return sorted.concat(array1).concat(array2)
}

function mergeSort(array){
  if(array.length < 2){
    return array
  } else {
    var middlePoint = array.length/2
    var firstHalf = array.slice(0, middlePoint)
    var secondHalf = array.slice(middlePoint)
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
}
