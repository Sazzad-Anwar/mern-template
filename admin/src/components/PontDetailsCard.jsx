import React from "react";

export default function PontDetailsCard({ icon, title, subTitle }) {
  return (
    <div className="shadow-md hover:shadow-lg normal-transition p-4 border border-gray-300 dark:border-gray-600 rounded-md flex items-center">
      <div className="mr-7 p-3 rounded-full dark:bg-gray-600 bg-gray-300">
        {icon}
      </div>
      <div>
        <h1 className="font-semibold dark:text-white text-2xl">{title}</h1>
        <p className="font-medium dark:text-white text-base">{subTitle}</p>
      </div>
    </div>
  );
}
