import { Progress } from "antd";
import React from "react";

export default function ProgressBar({ percent }) {
  return (
    <div className="absolute h-full w-full bg-dark inset-0 z-10 bg-opacity-90">
      <div className="h-full my-auto w-96 mx-auto flex justify-center items-center">
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
