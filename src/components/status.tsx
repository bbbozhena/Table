import React from "react";

type StatusProps = {
  status: "Delivered" | "Cancelled" | "Process";
};

const Status: React.FC<StatusProps> = ({ status }) => {
  let bgColor, textColor;

  switch (status) {
    case "Delivered":
      bgColor = "bg-green-100";
      textColor = "text-green-700";
      break;
    case "Cancelled":
      bgColor = "bg-red-100";
      textColor = "text-red-700";
      break;
    case "Process":
      bgColor = "bg-orange-100";
      textColor = "text-orange-700";
      break;
    default:
      bgColor = "bg-gray-100";
      textColor = "text-gray-700";
  }

  return (
    <div className={`rounded-xl py-2 w-24 ${bgColor} ${textColor}`}>
      {status}
    </div>
  );
};

export default Status;
