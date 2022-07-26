import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className=" dark:bg-dark min-h-screen relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-2xl font-light dark:text-white">404 | Not Found</h1>
        <div className="text-center">
          <Button
            type="primary"
            size="small"
            onClick={() => navigate(-1)}
            className="mt-5 text-blue-500 hover:text-white"
          >
            Go back
          </Button>
        </div>
      </div>
    </div>
  );
}
