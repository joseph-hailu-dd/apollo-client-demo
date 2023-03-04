import { gql, useQuery, useReactiveVar } from "@apollo/client";
import UIBookList from "./UIBookList";
import { ListBooksResponse, Maybe } from "../__generated__/graphql";
import AddBook from "./AddBook";
import "../index.css";
import { booksPaginationVar } from "../apollo/cache";

function QueryBooks() {
  const { limit, offset } = useReactiveVar(booksPaginationVar);

  const BOOKS_REQUEST = gql`
    query ListBooks($input: ListBooksQueryInput!) {
      listBooks(input: $input) {
        code
        message
        success
        data {
          limit
          offset
          total
          books {
            ibsn
            author
            title
          }
        }
      }
    }
  `;

  const {
    data,
    loading,
    error,
    refetch: refetchBooks,
  } = useQuery<{
    listBooks: Maybe<ListBooksResponse>;
  }>(BOOKS_REQUEST, {
    variables: { input: { limit, offset } },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <p>Total books: {data?.listBooks?.data?.total ?? ""}</p>
      <AddBook refetchBooks={refetchBooks} />

      <UIBookList books={data?.listBooks?.data?.books} />
    </div>
  );
}

export default QueryBooks;
