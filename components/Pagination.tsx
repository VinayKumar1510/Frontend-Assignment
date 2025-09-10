"use client";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  const handlePrev = () => {
    if (page > 1) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) onPageChange(page + 1);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className={`px-3 py-1 rounded-md ${
          page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-black hover:bg-blue-600"
        }`}
      >
        Prev
      </button>

      <span className="px-2 text-black">
        Page {page} of {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={page === totalPages}
        className={` cursor-pointer px-3 py-1 rounded-md ${
          page === totalPages
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 text-gray-700 hover:bg-blue-600"
        }`}
      >
        Next
      </button>
    </div>
  );
}
