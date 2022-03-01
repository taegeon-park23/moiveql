const nicolas = {
    name: 'nicolas',
    age: 18,
    gender: 'female'
}
const resolvers = {
    Query: {
      person: function() {
          return nicolas;
      }
    }
  };
  
  export default resolvers;