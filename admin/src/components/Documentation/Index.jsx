/* eslint-disable no-unused-expressions */
import React, { Fragment, lazy, Suspense } from "react";
import Loader from "../Loader/Index";
const SingleApi = lazy(() => import("../SingleApi/Index"));

//main component
const Documentation = ({ src, title, className }) => {
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

      {src.length &&
        src.map((api, index) => (
          <Fragment key={api.apiName + "-" + index}>
            <Suspense fallback={<Loader />}>
              <SingleApi api={api} index={index} />
            </Suspense>
          </Fragment>
        ))}
    </div>
  );
};

export default Documentation;
