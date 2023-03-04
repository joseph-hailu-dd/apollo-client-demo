import { makeVar, InMemoryCache, InMemoryCacheConfig } from "@apollo/client";

export const booksPaginationVar = makeVar({ limit: 4, offset: 0 });
// get the value: booksPaginationVar().limit
// set the value: booksPaginationVar({..newvalues})

export const cacheConfig: InMemoryCacheConfig = {
  typePolicies: {
    // This tells Apollo Client that Book does not use a conventional id field
    // and to use ibsn instead
    Book: {
      keyFields: ["ibsn"],
    },
  },
};

export const cache: InMemoryCache = new InMemoryCache(cacheConfig);
