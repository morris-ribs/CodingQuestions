function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// implementation of the Fisher-Yates shuffle

function shuffle(arr) {
  const len = arr.length;
  for (let i = 0; i < (len - 1); i++) {
    const j = getRandomInt(i, len - 1);
    const aux = arr[i];
    arr[i] = arr[j];
    arr[j] = aux;
  }
  return arr;
}

const cards = [
  "AP", "2P", "3P", "4P", "5P", "6P", "7P", "8P", "9P", "10P", "JP", "QP", "KP",
  "AE", "2E", "3E", "4E", "5E", "6E", "7E", "8E", "9E", "10E", "JE", "QE", "KE",
  "AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC",
  "AO", "2O", "3O", "4O", "5O", "6O", "7O", "8O", "9O", "10O", "JO", "QO", "KO"
];

console.log(shuffle(cards));