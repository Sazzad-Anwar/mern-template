import { Progress } from "antd";
import React from "react";

export default function ProgressBar({ percent }) {
  return (
    <div className="absolute h-full w-full inset-0 z-50 backdrop-blur-sm">
      <div className="h-full my-auto w-96 mx-auto flex flex-col justify-center items-center">
        <h1 className="dark:text-white font-medium text-lg">Uploading ...</h1>
        <Progress
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068",
          }}
          percent={percent}
          className="dark:text-white"
        />
      </div>
    </div>
  );
}
