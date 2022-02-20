import { graphql, buildSchema } from "graphql";
import { GraphQLServer } from "graphql-yoga";

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The rootValue provides a resolver function for each API endpoint
var rootValue = {
  hello: () => {
    return 'Hello world!';
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql({
  schema,
  source: '{ hello }',
  rootValue
}).then((response) => {
  console.log(response);
});

const server = GraphQLServer({

});

server.start(() => console.log("Graphql server running"))