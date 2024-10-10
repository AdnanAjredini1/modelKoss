import "./pagination.scss";
import Arrow from "../blog-assets/_(1).svg?react";

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
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
