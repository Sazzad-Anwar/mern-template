import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error({ error }) {
  const navigate = useNavigate();

  return (
    <div className="flex h-96 flex-col items-center justify-center bg-dark">
      <h1 className="text-2xl font-light text-white">{error}</h1>
      <Button
        type="primary"
        size="small"
        onClick={() => navigate(-1)}
        className="mt-5 text-blue-500 hover:text-white"
      >
        Go back
      </Button>
    </div>
  );
}
