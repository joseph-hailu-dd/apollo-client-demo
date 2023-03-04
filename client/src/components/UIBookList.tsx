import { Book, Maybe } from "../__generated__/graphql";

function UIBookList({ books }: { books: Maybe<Maybe<Book>[]> | undefined }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {books?.map((b) =>
        b ? (
          <div className="styleCard" key={b.ibsn}>
            <h3>{b.title}</h3>
            <p>{b.author}</p>
            <p>IBSN:{b.ibsn}</p>
          </div>
        ) : null
      )}
    </div>
  );
}

export default UIBookList;
