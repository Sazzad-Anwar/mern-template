/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { SiPostman } from "react-icons/si";
import { Link } from "react-router-dom";
import CapitalLetterWord from "../../utils/CapitalLetterWord";

//main component
const Documentation = ({ src, title, className }) => {
  const [apiNames, setApiNames] = useState([]);

  useEffect(() => {
    for (let api in src) {
      let name = src[api].url.path.split("/")[1];

      if (!apiNames.includes(name)) {
        setApiNames([...apiNames, name].sort());
      }
    }
  }, [apiNames, src]);

  return (
    <div
      className={
        "normal-transition min-h-screen dark:bg-dark " +
        (className ? className : "")
      }
    >
      <div className="flex items-center justify-between py-3">
        <h1 className="font-ubuntu text-3xl font-medium dark:text-white">
          {title} <span className="font-ubuntu text-base">({src.length})</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-11 my-5">
        {apiNames.map((apiName) => (
          <Link
            key={apiName}
            to={`/api/${apiName}/details`}
            className="flex flex-col items-center justify-between py-3 dark:hover:bg-deepDark hover:bg-gray-300 normal-transition"
          >
            <SiPostman size={40} className="dark:text-white text-dark" />
            <h2 className="font-mono text-base font-medium dark:text-white mt-2">
              {CapitalLetterWord(apiName)}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Documentation;
