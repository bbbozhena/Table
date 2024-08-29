import React from "react";
import Status from "./status";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

type DataItem = {
  trackingId: string;
  product: string;
  customer: string;
  date: string;
  amount: string;
  paymentMode: string;
  status: "Delivered" | "Cancelled" | "Process";
};

type TableProps = {
  darkMode: boolean;
};

const Table: React.FC<TableProps> = ({ darkMode }) => {
  const data: DataItem[] = [
    {
      trackingId: "12345",
      product: "Laptop",
      customer: "John Doe",
      date: "2023-08-29",
      amount: "$1000",
      paymentMode: "Credit Card",
      status: "Delivered",
    },
    {
      trackingId: "67890",
      product: "Smartphone",
      customer: "Jane Smith",
      date: "2023-08-28",
      amount: "$800",
      paymentMode: "PayPal",
      status: "Process",
    },
    {
      trackingId: "67890",
      product: "Smartphone",
      customer: "Jane Smith",
      date: "2023-08-28",
      amount: "$800",
      paymentMode: "PayPal",
      status: "Process",
    },
  ];
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

      {data.map((item, index) => (
        <div
          key={index}
          className={`grid grid-cols-8 p-4 border-t text-center ${
            darkMode
              ? index % 2 === 0
                ? "bg-dark-bg-line"
                : "bg-dark-bg"
              : index % 2 === 0
              ? "bg-[#F7F6FE]"
              : "bg-white"
          }`}
        >
          <p>{item.trackingId}</p>
          <p>{item.product}</p>
          <p>{item.customer}</p>
          <p>{item.date}</p>
          <p>{item.amount}</p>
          <p>{item.paymentMode}</p>
          <Status status={item.status} />
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
