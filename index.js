/*function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}
 
var animals = ["dog", "fish", "cat"]
 
doToElementsInArray(animals, changeCompletely)
 
// log out animals -- pretty cool, right?
console.log(animals)*/

function iterativeLog(array){
array.forEach ((element, index) => {
    console.log (`${index}: ${element}`)
  })
}

function iterate(callback){
  var array=[0, 1, 2, 3];
  array.forEach (callback)
    return array;
  }

function doToArray(array, callback){
  array.forEach(callback)
}