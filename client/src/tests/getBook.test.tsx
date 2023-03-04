import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import QueryBook from "../components/QueryBook";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { gql } from "@apollo/client";
import { exitLoadingState } from "./helpers";

const bookId = "123";

const mocks = [
  {
    request: {
      query: gql`
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
      `,
      variables: { input: { ibsn: bookId } },
    },
    result: {
      data: {
        getBook: {
          code: "200",
          success: true,
          message: "Fetched book!",
          book: {
            ibsn: "123",
            author: "Kate Chopin",
            title: "The Awakening",
          },
        },
      },
    },
  },
];

describe("<QueryBook/>", () => {
  it("handles the loading and success states when calling useQuery", async () => {
    render(
      <MockedProvider mocks={mocks}>
        <MemoryRouter initialEntries={[`/book/${bookId}`]}>
          <Routes>
            <Route path="/book/:id" element={<QueryBook />}></Route>
          </Routes>
        </MemoryRouter>
      </MockedProvider>
    );

    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await exitLoadingState();
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: "The Awakening", level: 3 })
    ).toBeInTheDocument();
  });
});
