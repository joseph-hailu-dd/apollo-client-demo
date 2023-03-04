// Use the generated `QueryResolvers` type to type check our queries!
const queries = {
    Query: {
        // Our third argument (`contextValue`) has a type here, so we
        // can check the properties within our resolver's shared context value.
        getBook: async (_, { input }, contextValue) => {
            return await contextValue.dataSources.booksAPI.getBook(input);
        },
        listBooks: async (_, { input }, contextValue) => {
            return await contextValue.dataSources.booksAPI.listBooks(input);
        },
    },
};
export default queries;
