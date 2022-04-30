/* eslint-disable no-unused-expressions */
import React, { Fragment, lazy, Suspense } from "react";
import DarkModeToggler from "./DarkmodeToggler";
const SingleApi = lazy(() => import("./SingleApi"));

//main component
const Documentation = ({ src, title, className }) => {
  return (
    <div
      className={
        "normal-transition min-h-screen bg-gray-200 dark:bg-dark " +
        (className ? className : "")
      }
    >
      <div className="container mx-auto py-5">
        <div className="flex items-center justify-between py-3">
          <h1 className="font-ubuntu text-3xl font-medium dark:text-white">
            {title}{" "}
            <span className="font-ubuntu text-base">({src.length})</span>
          </h1>
          <DarkModeToggler />
        </div>

        {src.length &&
          src.map((api, index) => (
            <Fragment key={api.apiName + "-" + index}>
              <Suspense>
                <SingleApi api={api} index={index} />
              </Suspense>
            </Fragment>
          ))}
      </div>
    </div>
  );
};

export default Documentation;
