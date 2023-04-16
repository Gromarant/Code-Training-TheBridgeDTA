//First approach
const greet = (name, owner) => (name !== owner) ? 'Hello guest' : 'Hello boss';

//Second approach
const greet2 = (name, owner) => {
  if(name !== owner) { return 'Hello guest' }
  else { return 'Hello boss'}
};