import React from "react";
import { useGlobalContext } from "../Services/api";
import './Pagination.css'

const Pagination = () => {
  const { page, setPage, totalResults } = useGlobalContext();

  const totalPages = Math.ceil(totalResults / 10);

  return (
    <div style={{ textAlign: "center", margin: "30px" }}>
      <button
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        > Prev
      </button>

      <span style={{ margin: "0 15px" }}>
        Page {page} of {totalPages || 1}
      </span>

      <button
        onClick={() => setPage(page + 1)}
        disabled={page >= totalPages}
      > Next
      </button>
    </div>
  );
};

export default Pagination;