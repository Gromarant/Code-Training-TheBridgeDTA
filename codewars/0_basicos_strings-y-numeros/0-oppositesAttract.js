//First approach
const lovefunc = (flower1, flower2) => flower1 % 2 !== flower2 % 2;

//Second approach
const lovefunc2 = ( flower1, flower2 ) => ( flower1 % 2 !== flower2 % 2) ? true: false;

//Third approach
const lovefunc3 = ( flower1, flower2 ) => ( flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0 ) ? true : false;


//Fourth approach
function lovefunc4(flower1, flower2){
  const isFlower1even = flower1 % 2 !== 0;
  const isFlower2Odd = flower2 % 2 === 0;
  
  if (isFlower1even && isFlower2Odd || !isFlower1even && !isFlower2Odd) {
    return true;
  } else {
    return false;
  } 
};