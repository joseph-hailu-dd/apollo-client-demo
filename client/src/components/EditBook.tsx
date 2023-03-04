import { gql, useMutation } from "@apollo/client";
import React from "react";
import {
  Book,
  BookResponse,
  MutationEditBookArgs,
} from "../__generated__/graphql";
import "../index.css";
import { BookForm } from "./BookForm";

export const EDIT_REQUEST = gql`
  mutation EditBook($input: EditBookMutationInput!) {
    editBook(input: $input) {
      success
      message
      code
      book {
        title
        ibsn
        author
        __typename
      }
    }
  }
`;

function EditBook({ book }: { book: Book }) {
  const { ibsn, author, title } = book;
  const [formState, setFormState] = React.useState({
    title: title ?? "",
    author: author ?? "",
  });

  const [createBook, { loading }] = useMutation<
    { addBook: BookResponse },
    MutationEditBookArgs
  >(EDIT_REQUEST, {});

  const onSubmit = () => {
    const { title, author } = formState;
    createBook({
      variables: {
        input: {
          ibsn,
          title,
          author,
        },
      },
    })
      .then(() => {
        setFormState({ title: "", author: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <BookForm
      formState={formState}
      setFormState={setFormState}
      onSubmit={onSubmit}
      SubmitButton={
        <button type="button" onClick={onSubmit} disabled={loading}>
          {loading ? "Loading" : "Edit Book"}
        </button>
      }
    />
  );
}

export default EditBook;
