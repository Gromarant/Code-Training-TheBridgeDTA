//First approach
const isPalindrome = ( str ) => {
  const originalStr = str.toLowerCase();
  let turnStr = originalStr.split('').reverse().join('');

  if ( originalStr === turnStr ) { return true }
  else { return false }
}

//Second approach
function isPalindrome2(x) {
  const lower = x.toLowerCase()
  const reverse = lower.split('').reverse().join('');
  if (lower.length === 1 || lower === reverse) { return true }
  else { return false }
}

//Third approach
const isPalindrome3 = (x) => {
  const reverse = x.toLowerCase().split('').reverse().join('');
  if (x.length === 1 ||x.toLowerCase() === reverse) {
    return true
  } else {
    return false;
  };
}

//Fourth approach
const isPalindrome4 = (x) => (x.length === 1 || x.toLowerCase() === x.toLowerCase().split('').reverse().join('')) ? true : false;