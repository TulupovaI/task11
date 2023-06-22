const array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(myArr, item){
  let index = myArr.indexOf(item);  
  myArr.splice(index, 1);
  return array;
}

console.log(removeElement(array, 5));