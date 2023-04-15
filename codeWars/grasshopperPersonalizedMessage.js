//first approach
const greet = (name, owner) => name === owner ? 'Hello boss' : 	'Hello guest';

//Second approach
const greet2 = (name, owner) => name !== owner ? 'Hello guest' : 'Hello boss';

//third approach
function greet3(name, owner) {
  return name === owner ? 'Hello boss' : 	'Hello guest';
}

//fourth approach
function greet4(name, owner) {
  return name !== owner ? 'Hello guest' : 'Hello boss';
}

//fif approach
function greet5(name, owner) {
  if ( name === owner) { return 'Hello boss'}
  else { return 'Hello guest'};
}

//sixth approach
function greet6(name, owner) {
  if ( name === owner) { return 'Hello boss'}
  else { return 'Hello guest'};
}

//seventh approach
function greet5(name, owner) {
  if ( name !== owner) { 
    return 'Hello guest'
  } else { 
    return 'Hello boss'
  };
}

//Eighth approach
function greet7(name, owner) {
  if ( name !== owner) { 
    return 'Hello guest'
  } else { 
    return 'Hello boss'
  };
}