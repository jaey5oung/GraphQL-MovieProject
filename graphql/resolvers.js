const people = [
  {
    name: "jangjaeyoung",
    age: 19,
    gender: "female",
  },
  {
    name: "jangjae",
    age: 18,
    gender: "male",
  },
  {
    name: "jang",
    age: 19,
    gender: "male",
  },
]

const resolvers = {
  Query: {
    people: () => people,
  },
}

export default resolvers
