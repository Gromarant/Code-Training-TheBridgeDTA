//First approach
const  calculateAge = (birthDate, questionDate) => {
  const years = questionDate - birthDate;
  if (years === 1) {
    return `You are ${questionDate - birthDate} year old.`;
  } else if (years > 1) {
    return `You are ${questionDate - birthDate} years old.`;
  } else if (years === -1) {
    return `You will be born in ${Math.abs(birthDate - questionDate)} year.`;
  } else if (years < 0) {
    return `You will be born in ${birthDate - questionDate} years.`;
  } else {
    return 'You were born this very year!'
  }
}

//Second approach
const  calculateAge2 = (birthDate, questionDate) => {
  if (questionDate > birthDate && questionDate - birthDate === 1) {
    return `You are ${questionDate - birthDate} year old.`;
  } else if (questionDate > birthDate) {
    return `You are ${questionDate - birthDate} years old.`;
  } else if (questionDate < birthDate && birthDate - questionDate === 1) {
    return `You will be born in ${birthDate - questionDate} year.`;
  } else if (questionDate < birthDate) {
    return `You will be born in ${birthDate - questionDate} years.`;
  } else {
    return 'You were born this very year!'
  }
}