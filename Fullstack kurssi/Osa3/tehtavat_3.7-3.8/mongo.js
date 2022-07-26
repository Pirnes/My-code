const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://lassepirnes:${password}@pirnescluster.e9fks.mongodb.net/Phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)



if (process.argv.length === 5) {
  const personName = process.argv[3].toString()
  const personNumber = process.argv[4].toString()
  const person = new Person({
    name: personName,
    number: personNumber
  })

  person.save().then(result => {
    console.log(`added ${person} to phonebook`)
    mongoose.connection.close()
  })
}

if (process.argv.length === 3) {

  Person.find({}).then(result => {
    result.forEach(persons => {
      console.log(persons)
    })
    mongoose.connection.close()
  })
}

