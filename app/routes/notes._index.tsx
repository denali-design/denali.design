import { Link } from "@remix-run/react";

export default function NoteIndexPage() {
  return (
    <div>
    <h1>hello</h1>
      No note selected. Select a note on the left, or{" "}
      <Link to="new" className="text-blue-500 underline">
        create a new note.
      </Link>
    </div>
  );
}
