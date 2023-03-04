/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddBookMutationInput = {
  author?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']>;
  ibsn: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type BookResponse = {
  __typename?: 'BookResponse';
  book?: Maybe<Book>;
  code: Scalars['String'];
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type BooksData = {
  __typename?: 'BooksData';
  books?: Maybe<Array<Maybe<Book>>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  total?: Maybe<Scalars['Int']>;
};

export type EditBookMutationInput = {
  author?: InputMaybe<Scalars['String']>;
  ibsn: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type GetBookQueryInput = {
  ibsn: Scalars['ID'];
};

export type ListBooksQueryInput = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type ListBooksResponse = {
  __typename?: 'ListBooksResponse';
  code: Scalars['String'];
  data?: Maybe<BooksData>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addBook?: Maybe<BookResponse>;
  editBook?: Maybe<BookResponse>;
};


export type MutationAddBookArgs = {
  input: AddBookMutationInput;
};


export type MutationEditBookArgs = {
  input: EditBookMutationInput;
};

export type Query = {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
  getBook?: Maybe<BookResponse>;
  listBooks?: Maybe<ListBooksResponse>;
};


export type QueryGetBookArgs = {
  input: GetBookQueryInput;
};


export type QueryListBooksArgs = {
  input: ListBooksQueryInput;
};

export type AddBookMutationVariables = Exact<{
  input: AddBookMutationInput;
}>;


export type AddBookMutation = { __typename?: 'Mutation', addBook?: { __typename?: 'BookResponse', success: boolean, message: string, code: string, book?: { __typename?: 'Book', title?: string | null, ibsn: string, author?: string | null } | null } | null };

export type EditBookMutationVariables = Exact<{
  input: EditBookMutationInput;
}>;


export type EditBookMutation = { __typename?: 'Mutation', editBook?: { __typename?: 'BookResponse', success: boolean, message: string, code: string, book?: { __typename: 'Book', title?: string | null, ibsn: string, author?: string | null } | null } | null };

export type GetBookQueryVariables = Exact<{
  input: GetBookQueryInput;
}>;


export type GetBookQuery = { __typename?: 'Query', getBook?: { __typename?: 'BookResponse', code: string, success: boolean, message: string, book?: { __typename?: 'Book', ibsn: string, author?: string | null, title?: string | null } | null } | null };

export type ListBooksQueryVariables = Exact<{
  input: ListBooksQueryInput;
}>;


export type ListBooksQuery = { __typename?: 'Query', listBooks?: { __typename?: 'ListBooksResponse', code: string, message: string, success: boolean, data?: { __typename?: 'BooksData', limit?: number | null, offset?: number | null, total?: number | null, books?: Array<{ __typename?: 'Book', ibsn: string, author?: string | null, title?: string | null } | null> | null } | null } | null };


export const AddBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddBookMutationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addBook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ibsn"}},{"kind":"Field","name":{"kind":"Name","value":"author"}}]}}]}}]}}]} as unknown as DocumentNode<AddBookMutation, AddBookMutationVariables>;
export const EditBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"EditBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"EditBookMutationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"editBook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"ibsn"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}}]}}]} as unknown as DocumentNode<EditBookMutation, EditBookMutationVariables>;
export const GetBookDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetBook"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetBookQueryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getBook"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"book"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ibsn"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]} as unknown as DocumentNode<GetBookQuery, GetBookQueryVariables>;
export const ListBooksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListBooks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ListBooksQueryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listBooks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"limit"}},{"kind":"Field","name":{"kind":"Name","value":"offset"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"books"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ibsn"}},{"kind":"Field","name":{"kind":"Name","value":"author"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ListBooksQuery, ListBooksQueryVariables>;