import { ReactNode } from "react";
import "../index.css";

export interface BookFormProps {
  formState: {
    title: string;
    author: string;
  };
  SubmitButton: ReactNode;
  setFormState: React.Dispatch<
    React.SetStateAction<{
      title: string;
      author: string;
    }>
  >;
  onSubmit: () => void;
}

export function BookForm({
  formState,
  SubmitButton,
  setFormState,
  onSubmit,
}: BookFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-children">
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={(e) =>
          setFormState((prev) => ({ ...prev, title: e.target.value }))
        }
        value={formState.title}
      ></input>

      <label htmlFor="author">Author</label>
      <input
        id="author"
        name="author"
        type="text"
        onChange={(e) =>
          setFormState((prev) => ({ ...prev, author: e.target.value }))
        }
        value={formState.author}
      ></input>
      {SubmitButton}
    </form>
  );
}
