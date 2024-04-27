import { useEffect, useState } from "react";
import Books from "../../components/Books";
import { getAllBooks } from "../../modules/fetch";

export default function Homepage({ books }) {
  return (
    <div className="flex flex-col items-center w-full" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="text-md text-center text-slate-700 font-bold mt-10 mb-5">
        <h1>Welcome to the Online Library</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 l:grid-cols-4 gap-4">
        {books.map((book) => (
          <Books key={`${book.id} ${book.title}`} {...book} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const books = await getAllBooks();
  return {
    props: {
      books,
    },
  };
}