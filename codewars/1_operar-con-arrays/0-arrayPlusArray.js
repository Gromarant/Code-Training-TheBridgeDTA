//First approach
const arrayPlusArray = (arr1, arr2) => {
  const newArr = [...arr1,...arr2 ];
  return newArr.reduce((accumulator, currentValue) => accumulator + currentValue);
}; 