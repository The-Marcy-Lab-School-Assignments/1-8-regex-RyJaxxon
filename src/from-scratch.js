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
  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]+[0-9]{3}[-\s\.]+[0-9]{4}$/;
  return regex.test(str)
};

const matchAllNumbers = (str) => { };

const matchAllNumbersAsNumbers = (str) => { };

const matchAllWords = (str) => { };

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
