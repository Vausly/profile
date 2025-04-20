import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination = ({ totalPages, currentPage, setCurrentPage }: PaginationProps) => {
  const generatePagination = (): (number | string)[] => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
      <button
        onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition disabled:opacity-30"
      >
        Previous
      </button>

      {generatePagination().map((page, index) =>
        typeof page === 'number' ? (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`w-10 h-10 rounded-full font-semibold ${
              currentPage === page
                ? "bg-purple-600 text-white"
                : "bg-white/10 text-white hover:bg-white/20"
            } transition`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="w-10 h-10 flex items-center justify-center text-white/60">…</span>
        )
      )}

      <button
        onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition disabled:opacity-30"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
