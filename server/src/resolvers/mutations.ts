import { MyContext } from "index";
import { MutationResolvers } from "__generated__/resolvers-types";

// Use the generated `MutationResolvers` type to type check our mutations!
const mutations: MutationResolvers = {
  Mutation: {
    // Below, we mock adding a new book. Our data set is static for this
    // example, so we won't actually modify our data.
    addBook: async (_, { input }, { dataSources }: MyContext) => {
      return await dataSources.booksAPI.addBook(input);
    },
    editBook: async (_, { input }, { dataSources }: MyContext) => {
      return await dataSources.booksAPI.editBook(input);
    },
  },
};

export default mutations;
