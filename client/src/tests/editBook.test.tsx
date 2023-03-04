import { render, screen, waitFor, act } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import EditBook, { EDIT_REQUEST } from "../components/EditBook";
import userEvent from "@testing-library/user-event";
import { InMemoryCache } from "@apollo/client";
import { cacheConfig } from "../apollo/cache";
import QueryBook, { GET_BOOK_REQUEST } from "../components/QueryBook";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { exitLoadingState } from "./helpers";

const ibsn = "123";
const book = {
  ibsn,
  author: "Kate Chopin",
  title: "The Awakening",
};

const editedBook = {
  ibsn: "123",
  author: "Kate Chopin",
  title: "The Awakening II",
  __typename: "Book",
};
let wasUpdateMutationCalled = false;
const mocks = [
  {
    request: {
      query: EDIT_REQUEST,
      variables: {
        input: {
          ibsn: editedBook.ibsn,
          title: editedBook.title,
          author: editedBook.author,
        },
      },
    },
    result: () => {
      wasUpdateMutationCalled = true;
      return {
        data: {
          editBook: {
            code: "200",
            success: true,
            message: "Fetched book!",
            book: editedBook,
          },
        },
      };
    },
  },
  {
    request: {
      query: GET_BOOK_REQUEST,
      variables: { input: { ibsn } },
    },
    result: {
      data: {
        getBook: {
          code: "200",
          success: true,
          message: "Fetched book!",
          book: editedBook,
        },
      },
    },
  },
];

describe("<EditBook/>", () => {
  it("parses the form, calls useMutation, and successfully updates the ui via the cache", async () => {
    const cache = new InMemoryCache(cacheConfig);
    render(
      <MockedProvider mocks={mocks} cache={cache}>
        <MemoryRouter initialEntries={[`/book/${ibsn}`]}>
          <Routes>
            <Route path="/book/:id" element={<QueryBook />}></Route>
          </Routes>
        </MemoryRouter>
      </MockedProvider>
    );

    await exitLoadingState();

    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.clear(screen.getByLabelText("Title"));
      userEvent.type(screen.getByLabelText("Title"), editedBook.title);
      userEvent.click(screen.getByRole("button", { name: /Edit Book/i }));
    });

    expect(
      await screen.findByRole("button", { name: /Loading/i })
    ).toBeDisabled();
    await waitFor(() => {
      expect(wasUpdateMutationCalled).toBe(true);
    });
    expect(await screen.findByText(editedBook.title)).toBeInTheDocument();

    wasUpdateMutationCalled = false;
  });
});
