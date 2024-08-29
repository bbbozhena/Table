import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import Status from "./status";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import {
  deleteProduct,
  setSearchQuery,
  setCurrentPage,
  setItemsPerPage,
} from "../../redux/productsSlice";

type TableProps = {
  darkMode: boolean;
};

const Table: React.FC<TableProps> = ({ darkMode }) => {
  const dispatch: AppDispatch = useDispatch();
  const { products, searchQuery, currentPage, itemsPerPage } = useSelector(
    (state: RootState) => state.products
  );

  const filteredProducts = products.filter((product) =>
    product["Product Name"].toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleDelete = (trackingId: number) => {
    dispatch(deleteProduct(trackingId));
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-8 font-bold p-4 text-center">
        <p>Tracking ID</p>
        <p>Product</p>
        <p>Customer</p>
        <p>Date</p>
        <p>Amount</p>
        <p>Payment Mode</p>
        <p>Status</p>
        <p>Action</p>
      </div>

      {paginatedProducts.map((item, index) => (
        <div
          key={item["Tracking ID"]}
          className={`grid grid-cols-8 p-4  text-center text-sm ${
            darkMode
              ? index % 2 === 0
                ? "bg-dark-bg-line"
                : "bg-dark-bg"
              : index % 2 === 0
              ? "bg-[#F7F6FE]"
              : "bg-white"
          }`}
        >
          <p>{item["Tracking ID"]}</p>
          <div className="flex">
            <img src={item["Product Image"]} className="h-16 w-16" />
            <p>{item["Product Name"]}</p>
          </div>
          <p>{item.Customer}</p>
          <p>{item.Date}</p>
          <p>{item.Amount}</p>
          <p>{item["Payment Mode"]}</p>
          <Status status={item.Status} />
          <div className="flex justify-center items-center">
            <button className="text-button-color h-4 w-4 m-3 left-3 top-1/2 transform -translate-y-1/2 ">
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className="text-red-500 h-4 w-4  left-3 top-1/2 transform -translate-y-1/2 ">
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
