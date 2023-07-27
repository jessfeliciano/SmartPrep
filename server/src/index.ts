import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import { RecipesDataSource } from './datasources.js';
import resolvers from './resolvers/index.js';
// import { GraphQLError } from 'graphql';

export interface MyContext {
//   user: UserInterface;
    dataSources: {
        recipesAPI: RecipesDataSource
    }
}

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
  });

const { url } = await startStandaloneServer<MyContext>(server, {
    context: async () => {
        return {
            dataSources: {
                recipesAPI: new RecipesDataSource(),
            }
        }
    }
});

console.log(`🚀  Server ready at: ${url}`);

// const { url } = await startStandaloneServer(server, {
  
//   context: async ({ req }) => {
//     // get the user token from the headers
//     const token = req.headers.authorization || '';

//     // try to retrieve a user with the token
//     const user = getUser(token);

//     // optionally block the user
//     // we could also check user roles/permissions here
//     if (!user)
//       // throwing a `GraphQLError` here allows us to specify an HTTP status code,
//       // standard `Error`s will have a 500 status code by default
//       throw new GraphQLError('User is not authenticated', {
//         extensions: {
//           code: 'UNAUTHENTICATED',
//           http: { status: 401 },
//         },
//       });

//     // add the user to the context
//     return { user };
//   },
  
// });