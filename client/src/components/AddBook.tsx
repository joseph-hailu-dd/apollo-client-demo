import { gql, useMutation, useReactiveVar } from "@apollo/client";
import React from "react";
import { BookResponse, MutationAddBookArgs } from "../__generated__/graphql";
import "../index.css";
import { BookForm } from "./BookForm";
import { booksPaginationVar } from "../apollo/cache";

function AddBook({ refetchBooks }: { refetchBooks: () => void }) {
  const [formState, setFormState] = React.useState({
    title: "",
    author: "",
  });

  const { limit, offset } = useReactiveVar(booksPaginationVar);

  const REQUEST = gql`
    mutation AddBook($input: AddBookMutationInput!) {
      addBook(input: $input) {
        success
        message
        code
        book {
          title
          ibsn
          author
        }
      }
    }
  `;

  const [createBook, { loading }] = useMutation<
    { addBook: BookResponse },
    MutationAddBookArgs
  >(REQUEST, {});

  const onSubmit = () => {
    const { title, author } = formState;
    createBook({
      variables: {
        input: {
          title,
          author,
        },
      },
    })
      .then(() => {
        refetchBooks();
        setFormState({ title: "", author: "" });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <>
      <BookForm
        formState={formState}
        setFormState={setFormState}
        onSubmit={onSubmit}
        SubmitButton={
          <button type="button" onClick={onSubmit} disabled={loading}>
            {loading ? "Loading" : "Create Book"}
          </button>
        }
      />
      <div className="client-side">
        <label htmlFor="offset">Page number</label>
        <input
          id="offset"
          type="number"
          min={0}
          max={10}
          step={1}
          value={offset + 1}
          onChange={(e) =>
            booksPaginationVar({
              ...booksPaginationVar(),
              offset: e.target.valueAsNumber - 1,
            })
          }
        />
        <label htmlFor="limit">Books Per Page</label>
        <input
          id="limit"
          type="number"
          min={0}
          max={10}
          step={1}
          value={limit ? limit : 10}
          onChange={(e) =>
            booksPaginationVar({
              ...booksPaginationVar(),
              limit: e.target.valueAsNumber,
            })
          }
        />
      </div>
    </>
  );
}

export default AddBook;
