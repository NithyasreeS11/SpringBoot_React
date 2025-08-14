import React from "react";

function BookList({ books }) {
  return (
    <table border="1" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>ID</th><th>Title</th><th>Author</th>
        </tr>
      </thead>
      <tbody>
        {books.map((b) => (
          <tr key={b.id}>
            <td>{b.id}</td>
            <td>{b.title}</td>
            <td>{b.author}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BookList;
