var db = require('../db'),
DATABASE = 'words'

// Submit a comment
exports.submit = function(user, word, done) {
  var data = {
    name: word.name,
    definition: word.definition,
    type: word.type
  }
  db.save(DATABASE, data, function(err, doc){
    if (err) return done('Unable to connect to CouchDB')
    if (doc.error) return done('Unable to save word')
    done(null, doc)
  })
}

exports.all = function(done) {
  db.all(DATABASE, {}, function(err, data){
    if (err) return done('Unable to connect to CouchDB')
    if (data.error) return done('Unable to get the word')
      
    done(null, data.rows)
  })
}

exports.recent = function(done){
  db.all(DATABASE, {limit: 20, descending: true}, function(err, data){
    if(err) return done('Unable to connect to CouchDB')
    if(data.error) return done('Unable to get the words')
  })
}