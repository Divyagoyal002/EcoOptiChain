import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  // Show first, last, current, and neighbors
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pageNumbers.push(i);
    } else if (
      i === currentPage - 2 ||
      i === currentPage + 2
    ) {
      pageNumbers.push('...');
    }
  }

  // Remove duplicate ellipsis
  const filteredPages = pageNumbers.filter(
    (item, idx, arr) => item !== '...' || arr[idx - 1] !== '...'
  );

  return (
    <div className="flex items-center justify-center space-x-2 mt-6">
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:bg-gray-100"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span className="text-xl">{'<'}</span>
      </button>
      {filteredPages.map((num, idx) =>
        num === '...' ? (
          <span key={idx} className="px-2 text-gray-400">...</span>
        ) : (
          <button
            key={idx}
            className={`w-8 h-8 flex items-center justify-center rounded-full border ${
              num === currentPage
                ? 'border-blue-500 text-blue-600 font-bold'
                : 'border-transparent text-gray-700'
            }`}
            onClick={() => onPageChange(num)}
            disabled={num === currentPage}
          >
            {num}
          </button>
        )
      )}
      <button
        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-400 hover:bg-gray-100"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span className="text-xl">{'>'}</span>
      </button>
    </div>
  );
};

export default Pagination;