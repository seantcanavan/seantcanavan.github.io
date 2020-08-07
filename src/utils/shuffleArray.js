// noinspection SpellCheckingInspection
const shuffleArray = function(array) {
  if (array === undefined || array.length < 2) {
    return array;
  }

  // Durstenfeld Shuffle
  for (let current = array.length - 1; current > 0; current--) {
    const random = Math.floor(Math.random() * (current + 1));
    [array[current], array[random]] = [array[random], array[current]]
  }

  return array;
}

export default shuffleArray;
