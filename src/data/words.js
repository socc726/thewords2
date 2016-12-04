var Words = require('../models/words')

var wordsRes = [];

Words.all(function(err, words) {
  for (var i = 0; i < words.length; i++) {
    wordsRes.push(words[i].doc)
  };
  console.log(wordsRes)
})

export default wordsRes;