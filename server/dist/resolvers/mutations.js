// Use the generated `MutationResolvers` type to type check our mutations!
const mutations = {
    Mutation: {
        // Below, we mock adding a new book. Our data set is static for this
        // example, so we won't actually modify our data.
        addBook: async (_, { input }, { dataSources }) => {
            return await dataSources.booksAPI.addBook(input);
        },
        editBook: async (_, { input }, { dataSources }) => {
            return await dataSources.booksAPI.editBook(input);
        },
    },
};
export default mutations;
