import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import {
  setProducts,
  setItemsPerPage,
  setCurrentPage,
} from "../../redux/productsSlice";

const Pagination = () => {
  const dispatch = useDispatch();

  const { products, itemsPerPage, currentPage, searchQuery } = useSelector(
    (state: any) => state.products
  );

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const filteredProducts = products.filter((product: any) =>
    product["Product Name"].toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleItemsPerPageChange = (e:any) => {
    dispatch(setItemsPerPage(Number(e.target.value)));
    dispatch(setCurrentPage(1));
  };

  const handlePageChange = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
          className={`px-3 py-1 mx-1 rounded ${
            currentPage === 1 ? "bg-blue-500 text-white" : "bg-gray-300"
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
          className={`px-3 py-1 mx-1 rounded ${
            currentPage === i ? "bg-blue-500 text-white" : "bg-gray-300"
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
          className={`px-3 py-1 mx-1 rounded ${
            currentPage === totalPages
              ? "bg-blue-500 text-white"
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
    <div>
      {/* Пагінація */}
      <div className="flex justify-center mt-4">
        {renderPaginationButtons()}
      </div>
    </div>
  );
};

export default Pagination;
