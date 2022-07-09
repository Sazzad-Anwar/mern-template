import React from "react";

export default function PontDetailsCard({ icon, title, subTitle }) {
  return (
    <div className="shadow-md hover:shadow-lg normal-transition px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md flex items-center">
      <div className="mr-5 p-3 flex justify-center items-center rounded-full dark:bg-gray-600 bg-gray-300">
        {icon}
      </div>
      <div className="overflow-hidden">
        <h1 className="font-semibold dark:text-white text-xl">{title}</h1>
        <p className="font-medium dark:text-white text-base truncate">{subTitle}</p>
      </div>
    </div>
  );
}
