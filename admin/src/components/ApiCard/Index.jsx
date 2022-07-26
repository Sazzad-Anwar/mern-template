import { Checkbox } from "antd";
import React from "react";
import CapitalLetterWord from "../../utils/CapitalLetterWord";

export default function Index({ addRoute, api, _id, accessRoles }) {
  return (
    <div className="normal-transition pl-3 py-3 border border-gray-300 dark:border-gray-600 rounded-md flex items-center justify-between">
      <Checkbox
        key={_id}
        className="dark:text-white mx-0 text-base bg-transparent"
        checked={accessRoles.includes(api)}
        onChange={(e) => addRoute(api, e)}
      >
        {api.split("/")[0] === "GET" ? (
          <span className="text-green-500 font-medium">GET</span>
        ) : api.split("/")[0] === "POST" ? (
          <span className="text-purple-500 font-medium">Create</span>
        ) : api.split("/")[0] === "PUT" ? (
          <span className="text-blue-500 font-medium">Update</span>
        ) : (
          <span className="text-red-500 font-medium">Delete</span>
        )}{" "}
        {CapitalLetterWord(api.split("/")[3])}
      </Checkbox>
    </div>
  );
}
