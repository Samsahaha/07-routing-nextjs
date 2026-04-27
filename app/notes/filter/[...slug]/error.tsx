"use client";

interface FilterNotesErrorProps {
  error: Error;
  reset: () => void;
}

export default function FilterNotesError({ error, reset }: FilterNotesErrorProps) {
  return (
    <div role="alert">
      <p>Could not fetch filtered notes: {error.message}</p>
      <button type="button" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
