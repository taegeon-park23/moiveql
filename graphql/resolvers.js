const people = [
    {
        id: 1,
        name: 'nicolas2',
        age: 18,
        gender: 'female'
    },
    {
        id: 2,
        name:'nicolas2',
        age: 18,
        gender: 'female'
    },
    {
        id: 3,
        name: 'nicolas3',
        age: 18,
        gender: 'female'
    }
]

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
};

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id)
  }
};

export default resolvers;