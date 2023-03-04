/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation AddBook($input: AddBookMutationInput!) {\n      addBook(input: $input) {\n        success\n        message\n        code\n        book {\n          title\n          ibsn\n          author\n        }\n      }\n    }\n  ": types.AddBookDocument,
    "\n  mutation EditBook($input: EditBookMutationInput!) {\n    editBook(input: $input) {\n      success\n      message\n      code\n      book {\n        title\n        ibsn\n        author\n        __typename\n      }\n    }\n  }\n": types.EditBookDocument,
    "\n  query GetBook($input: GetBookQueryInput!) {\n    getBook(input: $input) {\n      code\n      success\n      message\n      book {\n        ibsn\n        author\n        title\n      }\n    }\n  }\n": types.GetBookDocument,
    "\n    query ListBooks($input: ListBooksQueryInput!) {\n      listBooks(input: $input) {\n        code\n        message\n        success\n        data {\n          limit\n          offset\n          total\n          books {\n            ibsn\n            author\n            title\n          }\n        }\n      }\n    }\n  ": types.ListBooksDocument,
    "\n        query GetBook($input: GetBookQueryInput!) {\n          getBook(input: $input) {\n            code\n            success\n            message\n            book {\n              ibsn\n              author\n              title\n            }\n          }\n        }\n      ": types.GetBookDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    mutation AddBook($input: AddBookMutationInput!) {\n      addBook(input: $input) {\n        success\n        message\n        code\n        book {\n          title\n          ibsn\n          author\n        }\n      }\n    }\n  "): (typeof documents)["\n    mutation AddBook($input: AddBookMutationInput!) {\n      addBook(input: $input) {\n        success\n        message\n        code\n        book {\n          title\n          ibsn\n          author\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation EditBook($input: EditBookMutationInput!) {\n    editBook(input: $input) {\n      success\n      message\n      code\n      book {\n        title\n        ibsn\n        author\n        __typename\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation EditBook($input: EditBookMutationInput!) {\n    editBook(input: $input) {\n      success\n      message\n      code\n      book {\n        title\n        ibsn\n        author\n        __typename\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetBook($input: GetBookQueryInput!) {\n    getBook(input: $input) {\n      code\n      success\n      message\n      book {\n        ibsn\n        author\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetBook($input: GetBookQueryInput!) {\n    getBook(input: $input) {\n      code\n      success\n      message\n      book {\n        ibsn\n        author\n        title\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query ListBooks($input: ListBooksQueryInput!) {\n      listBooks(input: $input) {\n        code\n        message\n        success\n        data {\n          limit\n          offset\n          total\n          books {\n            ibsn\n            author\n            title\n          }\n        }\n      }\n    }\n  "): (typeof documents)["\n    query ListBooks($input: ListBooksQueryInput!) {\n      listBooks(input: $input) {\n        code\n        message\n        success\n        data {\n          limit\n          offset\n          total\n          books {\n            ibsn\n            author\n            title\n          }\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n        query GetBook($input: GetBookQueryInput!) {\n          getBook(input: $input) {\n            code\n            success\n            message\n            book {\n              ibsn\n              author\n              title\n            }\n          }\n        }\n      "): (typeof documents)["\n        query GetBook($input: GetBookQueryInput!) {\n          getBook(input: $input) {\n            code\n            success\n            message\n            book {\n              ibsn\n              author\n              title\n            }\n          }\n        }\n      "];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;