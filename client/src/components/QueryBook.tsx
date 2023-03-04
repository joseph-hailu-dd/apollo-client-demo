import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import UIBook from "./UIBook";
import { gql } from "../__generated__/gql";
import EditBook from "./EditBook";

export const GET_BOOK_REQUEST = gql(/* GraphQL */ `
  query GetBook($input: GetBookQueryInput!) {
    getBook(input: $input) {
      code
      success
      message
      book {
        ibsn
        author
        title
      }
    }
  }
`);

function QueryBook() {
  const { id: ibsn } = useParams();

  const { data, loading, error } = useQuery(GET_BOOK_REQUEST, {
    variables: { input: { ibsn: ibsn ?? "" } },
  });
  const book = data?.getBook?.book ?? { ibsn: "", author: "", title: "" };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <p>Book Details</p>
      <EditBook book={book} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UIBook book={book} />
      </div>
    </div>
  );
}

export default QueryBook;
