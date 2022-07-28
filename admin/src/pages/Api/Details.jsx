import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs/Index";
import CapitalLetterWord from "../../utils/CapitalLetterWord";
import API from "../../assets/APi.json";
import SingleApi from "../../components/SingleApi/Index";
import CopyToClipboard from "../../utils/CopyToClipboard";
import { Input, Tooltip } from "antd";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-toastify";

export default function ApiDetails() {
  const { name } = useParams();
  const [editMode, setEditMode] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    let timer;
    if (token) {
      timer = setTimeout(() => {
        setToken("");
        localStorage.removeItem("token");
        toast.error("Token is removed !");
      }, 1000 * 60 * 5);
    }

    return () => clearTimeout(timer);
  }, [token]);

  let breadcrumbs = [
    {
      isLink: true,
      link: "/",
      name: "Home",
    },
    {
      isLink: true,
      link: "/api",
      name: "Api Documentation",
    },
    {
      isLink: false,
      link: "/api/" + name,
      name: CapitalLetterWord(name),
    },
  ];

  const handleClick = (e) => {
    if (e.detail === 2) {
      setEditMode(true);
    }
  };

  const saveToken = (token) => {
    localStorage.setItem("token", token);
    toast.success("Token is saved for 5 minutes !");
  };

  return (
    <>
      <BreadCrumbs details={breadcrumbs} />
      <div className="flex items-center py-3">
        <h1 className="dark:text-white font-bold text-base font-mono mr-2">
          Token :{" "}
        </h1>
        <div>
          {editMode ? (
            <Input
              placeholder="Token"
              size="small"
              autoFocus
              allowClear
              value={token}
              onChange={(e) => setToken(e.target.value)}
              onBlur={(e) => {
                setEditMode(false);
                saveToken(e.target.value);
              }}
            />
          ) : (
            <>
              <button
                onClick={handleClick}
                className="dark:text-white font-mono mr-2 truncate max-w-sm"
              >
                {token ? token : "Login to generate token"}
              </button>
              <Tooltip title="Copy token to clipboard">
                <button onClick={() => CopyToClipboard(token)}>
                  <FiCopy className="dark:text-white text-black" />
                </button>
              </Tooltip>
            </>
          )}
        </div>
      </div>
      {API &&
        API.filter((api) => api.url.path.split("/")[1] === name).map(
          (api, index) => (
            <Fragment key={api.apiName + "-" + index}>
              <SingleApi api={api} index={index} />
            </Fragment>
          )
        )}
    </>
  );
}
