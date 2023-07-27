import { QueryResolvers } from "../__generated__/resolvers-types";

const queries: QueryResolvers = {
      // TypeScript now complains about the below resolver because
      // the data returned by this resolver doesn't match the schema type
      // (i.e., type Query { recipes: [Recipe] })
      recipes: async (_, __, { dataSources }) => {
        return dataSources.recipesAPI.getRecipes();
      },
}

export default queries;