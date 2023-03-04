import { GraphQLResolveInfo } from 'graphql';
import { MyContext } from '../index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AddBookMutationInput: AddBookMutationInput;
  Book: ResolverTypeWrapper<Book>;
  BookResponse: ResolverTypeWrapper<BookResponse>;
  BooksData: ResolverTypeWrapper<BooksData>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  EditBookMutationInput: EditBookMutationInput;
  GetBookQueryInput: GetBookQueryInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ListBooksQueryInput: ListBooksQueryInput;
  ListBooksResponse: ResolverTypeWrapper<ListBooksResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AddBookMutationInput: AddBookMutationInput;
  Book: Book;
  BookResponse: BookResponse;
  BooksData: BooksData;
  Boolean: Scalars['Boolean'];
  EditBookMutationInput: EditBookMutationInput;
  GetBookQueryInput: GetBookQueryInput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  ListBooksQueryInput: ListBooksQueryInput;
  ListBooksResponse: ListBooksResponse;
  Mutation: {};
  Query: {};
  String: Scalars['String'];
}>;

export type BookResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = ResolversObject<{
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ibsn?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookResponseResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['BookResponse'] = ResolversParentTypes['BookResponse']> = ResolversObject<{
  book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType>;
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BooksDataResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['BooksData'] = ResolversParentTypes['BooksData']> = ResolversObject<{
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType>;
  limit?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  offset?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ListBooksResponseResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['ListBooksResponse'] = ResolversParentTypes['ListBooksResponse']> = ResolversObject<{
  code?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['BooksData']>, ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  addBook?: Resolver<Maybe<ResolversTypes['BookResponse']>, ParentType, ContextType, RequireFields<MutationAddBookArgs, 'input'>>;
  editBook?: Resolver<Maybe<ResolversTypes['BookResponse']>, ParentType, ContextType, RequireFields<MutationEditBookArgs, 'input'>>;
}>;

export type QueryResolvers<ContextType = MyContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType>;
  getBook?: Resolver<Maybe<ResolversTypes['BookResponse']>, ParentType, ContextType, RequireFields<QueryGetBookArgs, 'input'>>;
  listBooks?: Resolver<Maybe<ResolversTypes['ListBooksResponse']>, ParentType, ContextType, RequireFields<QueryListBooksArgs, 'input'>>;
}>;

export type Resolvers<ContextType = MyContext> = ResolversObject<{
  Book?: BookResolvers<ContextType>;
  BookResponse?: BookResponseResolvers<ContextType>;
  BooksData?: BooksDataResolvers<ContextType>;
  ListBooksResponse?: ListBooksResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

