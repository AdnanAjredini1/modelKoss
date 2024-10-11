import "./pagination.scss";
import Arrow from "../blog-assets/_(1).svg?react";

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  let pages = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  if (totalPages <= 5) {
    pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    pages.push(1);

    if (currentPage > 2) {
      pages.push("...");
    }

    for (
      let i = Math.max(2, currentPage);
      i <= Math.min(currentPage + 2, totalPages - 1);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage + 2 < totalPages - 1) {
      pages.push("...");
    }

    pages.push(totalPages);
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(totalPosts / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="paginationWrapper">
      <div className="prevWrapper" onClick={handlePrevious}>
        <Arrow className="prevButton" />
      </div>
      {pages.map((page, index) => (
        <button
          className={`paginationButton ${
            currentPage === page ? "activePaginationButton" : ""
          }`}
          key={index}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
      <div className="nextWrapper" onClick={handleNext}>
        <Arrow className="nextButton" />
      </div>
    </div>
  );
}

export default Pagination;
