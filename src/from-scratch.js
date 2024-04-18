const helloWorldRegex = (str) => /(hello world)/i.test(str);

const hasAVowel = (str) => /[aeiou]/i.test(str);

const hasCatsOrDogs = (str) => /(cats|dogs)/gi.test(str);

const hasVowelStart = (str) => /^[aeiou]/i.test(str);

const hasPunctuationEnd = (str) => /[.!?]$/.test(str);

const hasNothingOrDigits = (str) => /^(\d+|)$/gi.test(str)

const hasNoFlippers = (str) => /^[^BCcDEHIKOoXxl]*$/.test(str);

const isValidEmail = (email) => {
  const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}

const isValidPhoneNumber = (str) => {
  const regex = /^[\+]?[(]?\d{3}[)]?[-\s\.]+\d{3}[-\s\.]+\d{4}$/;
  return regex.test(str)
};

const matchAllNumbers = (str) => str.match(/\d+/g) || [];

const matchAllNumbersAsNumbers = (str) => {
  let arr = str.match(/\d+/g) || []
  return arr.map(Number)
};

const matchAllWords = (str) => str.match(/[a-z']+/gi) || [];

const replaceAllNumbers = (str) => { };

const fixFileName = (str) => { };

const nameRedacter = (str) => { };

const camelToSnakeCase = (str) => { };

module.exports = {
  helloWorldRegex,
  hasAVowel,
  hasCatsOrDogs,
  hasVowelStart,
  hasPunctuationEnd,
  hasNothingOrDigits,
  hasNoFlippers,
  isValidEmail,
  isValidPhoneNumber,

  matchAllNumbers,
  matchAllNumbersAsNumbers,
  matchAllWords,

  replaceAllNumbers,
  fixFileName,
  nameRedacter,
  camelToSnakeCase,
};
