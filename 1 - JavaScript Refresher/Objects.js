//7. Object
const rectangle = {
    length: 20,
    width: 20,
  }
  console.log(rectangle) // {length: 20, width: 20}

  const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node',
      'MongoDB',
      'Python',
      'D3.js',
    ],
    isMarried: true,
    getFullName: function () {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+3584545454545',
  }
  console.log(person)

console.log(person.getFullName());
console.log(person[`phone number`]);
console.log(person.isMarried);

const copyPerson = Object.assign({}, person)
console.log(copyPerson)

const keys = Object.keys(copyPerson)
console.log(keys) //['name', 'age', 'country', 'skills', 'address', 'getPersonInfo']

const values = Object.values(copyPerson)
console.log(values)

const entries = Object.entries(copyPerson)
console.log(entries)

