import { Book } from "../__generated__/graphql";

function UIBook({ book }: { book: Book }) {
  return (
    <div className="styleCard">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>IBSN:{book.ibsn}</p>
    </div>
  );
}

export default UIBook;
