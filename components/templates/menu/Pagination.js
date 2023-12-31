import React from "react";
import Link from "next/link";

function Pagination() {
  return (
    <nav className="d-flex justify-content-center mt-5">
      <ul className="pagination">
        <li className="page-item active">
          <Link className="page-link" href="#">
            1
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            2
          </Link>
        </li>
        <li className="page-item">
          <Link className="page-link" href="#">
            3
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
