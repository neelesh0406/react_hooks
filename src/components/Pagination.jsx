import React from "react";

export default function Pagination({ valuesPerPage, totalValues, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalValues / valuesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      {pageNumbers.map((num) => (
        <button key={num} onClick={() => paginate(num)}>
          {num}
        </button>
      ))}
    </nav>
  );
}
