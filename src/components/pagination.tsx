import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import {
  setItemsPerPage,
  setCurrentPage,
  Product,
} from "../../redux/productsSlice";

const Pagination = () => {
  const dispatch = useDispatch();

  const { products, itemsPerPage, currentPage, searchQuery } = useSelector(
    (state: RootState) => state.products
  );

  const filteredProducts = products.filter((product: Product) =>
    product["Product Name"].toLowerCase().includes(searchQuery.toLowerCase())
  );
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) {
      dispatch(setCurrentPage(totalPages > 0 ? totalPages : 1));
    }
  }, [
    filteredProducts.length,
    itemsPerPage,
    searchQuery,
    currentPage,
    totalPages,
    dispatch,
  ]);

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    dispatch(setItemsPerPage(Number(e.target.value)));
    dispatch(setCurrentPage(1));
  };

  const handlePageChange = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const renderPaginationButtons = () => {
    const paginationButtons = [];
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, startPage + 2);

    // Перша сторінка
    if (startPage > 1) {
      paginationButtons.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className={`px-3 py-2 mx-1 rounded-xl ${
            currentPage === 1 ? "bg-button-color text-white" : "bg-gray-300"
          }`}
        >
          1
        </button>
      );
      if (startPage > 2) {
        paginationButtons.push(
          <span key="ellipsis1" className="px-3 py-1">
            ...
          </span>
        );
      }
    }

    // Поточна сторінка та дві наступні
    for (let i = startPage; i <= endPage; i++) {
      paginationButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2  mx-1 rounded-xl ${
            currentPage === i ? "bg-button-color text-white" : "bg-gray-300"
          }`}
        >
          {i}
        </button>
      );
    }

    // Остання сторінка
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        paginationButtons.push(
          <span key="ellipsis2" className="px-3 py-1">
            ...
          </span>
        );
      }
      paginationButtons.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className={`px-3 py-2 mx-1 rounded-xl ${
            currentPage === totalPages
              ? "bg-button-color  text-white"
              : "bg-gray-300"
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return paginationButtons;
  };

  return (
    <div className="flex items-center mb-10">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className="pt-4 text-slate-400 px-3 py-1 mx-1 rounded  hover:text-slate-500"
      >
        Previous
      </button>
      <div className="flex justify-center mt-4  ">
        {renderPaginationButtons()}
      </div>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="pt-4 text-slate-400 px-3 py-1 mx-1 rounded  hover:text-slate-500"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
