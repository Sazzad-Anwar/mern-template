import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  lazy,
  Suspense,
} from "react";
import {
  BsFillPlusSquareFill,
  BsDashSquareFill,
  BsCaretRightFill,
  BsCaretDownFill,
} from "react-icons/bs";
import Loader from "../Loader/Index";
import { API_URL } from "../../app.config";
import axiosInstance from "../../utils/AxiosInstance";
const ReactJson = lazy(() => import("react-json-view"));

const SingleApi = ({ api, index }) => {
  const [open, setOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState("body");
  const [inputData, setInputData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [fontSize, setFontSize] = useState(14);
  const [queryObject, setQueryObject] = useState({});
  const [headersObject, setHeadersObject] = useState({});
  const [pathVariablesObject, setPathVariablesObject] = useState({});
  const [resultStatus, setResultStatus] = useState({
    status: "",
    statusText: "",
    time: "0 ms",
  });

  let apiOptions = [
    {
      name: "headers",
      label: "Headers",
    },
    {
      name: "body",
      label: "Body",
    },
    {
      name: "query",
      label: "Query",
    },
    {
      name: "pathVariables",
      label: "Path Variables",
    },
  ];

  let editorStyle = {
    overflowWrap: "break-word",
    wordBreak: "break-all",
    width: "100%",
    fontSize,
    padding: "1.5rem 1rem",
    maxHeight: "600px",
    overflowY: "auto",
  };

  useMemo(() => {
    setInputData(api.body.params);
    setQueryObject(api.query.params);
    setHeadersObject(api.headers.params);
    setPathVariablesObject(api.url.variables);
  }, [
    api.body.params,
    api.headers.params,
    api.query.params,
    api.url.variables,
  ]);

  let setAPIresponse = useCallback((data) => {
    setResult(data);
  }, []);

  useEffect(() => {
    if (api.headers.isRequired) {
      setCurrentOption("headers");
    } else if (api.body.isRequired) {
      setCurrentOption("body");
    } else if (api.query.isRequired) {
      setCurrentOption("query");
    } else {
      setCurrentOption("");
    }
  }, [api.body.isRequired, api.headers.isRequired, api.query.isRequired]);

  const makeAPIRequest = async () => {
    setIsLoading(true);

    try {
      axiosInstance.interceptors.request.use(
        (config) => {
          const newConfig = { ...config };
          newConfig.metadata = { startTime: new Date() };
          return newConfig;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      axiosInstance.interceptors.response.use(
        (response) => {
          const newRes = { ...response };
          newRes.config.metadata.endTime = new Date();
          newRes.duration =
            newRes.config.metadata.endTime - newRes.config.metadata.startTime;
          return newRes;
        },
        (error) => {
          const newError = { ...error };
          newError.config.metadata.endTime = new Date();
          newError.duration =
            newError.config.metadata.endTime -
            newError.config.metadata.startTime;
          return Promise.reject(newError);
        }
      );

      let response = await axiosInstance({
        method: api.method,
        url:
          api.url.path +
          (Object.keys(pathVariablesObject).length !== 0
            ? `/${Object.values(pathVariablesObject)}`
            : ""),
        headers: headersObject,
        params: queryObject,
        data:
          api.body.isRequired && Object.keys(inputData).length > 0
            ? inputData
            : api.body.params,
        timeout: 4000,
      });

      setAPIresponse(response.data);

      setResultStatus({
        status: response.status,
        statusText: response.statusText,
        time: response.duration + " ms",
      });

      setIsLoading(false);
    } catch (error) {
      setAPIresponse(error.response.data);

      setResultStatus({
        status: error.response.status,
        statusText: error.response.statusText,
        time: error.duration + " ms",
      });

      setIsLoading(false);
    }
  };

  const description = () => {
    return { __html: api.description ? api.description : "" };
  };

  let URL = {
    method: api.method,
    url:
      API_URL +
      api.url.path +
      (Object.keys(pathVariablesObject).length !== 0
        ? `/${Object.values(pathVariablesObject)}`
        : ""),
  };

  return (
    <div className="my-4">
      <button
        onClick={() => {
          setOpen(!open);
          if (Object.keys(result).length !== 0 && result.length >= 50) {
            setAPIresponse({});
          }
        }}
        className={`w-full cursor-pointer ${open ? "rounded-b-none rounded-tl-2xl rounded-tr-2xl" : "rounded-full"
          } flex items-center border-transparent bg-white px-1 py-1 dark:border dark:border-gray-600 dark:bg-gray-800 `}
      >
        <span
          className={`flex items-center justify-center px-2.5 py-1 ${open
            ? "bg-green-700 text-white dark:bg-green-600"
            : "bg-gray-300 dark:bg-gray-600"
            } mr-1 rounded-full font-medium  dark:text-white`}
        >
          {index + 1}
        </span>
        {open ? (
          <BsCaretDownFill className="normal-transition font-ubuntu text-base font-medium dark:text-white lg:text-lg" />
        ) : (
          <BsCaretRightFill className="normal-transition font-ubuntu text-base font-medium dark:text-white lg:text-lg" />
        )}
        <h1 className="font-ubuntu ml-3 text-base font-medium dark:text-white lg:text-lg">
          {api.name}
        </h1>
      </button>
      {open && (
        <div className="border-t-none animate__animated animate__fadeIn rounded-t-none rounded-bl-2xl rounded-br-2xl border-0 border-gray-400 bg-white py-3 px-5 dark:border dark:border-gray-600 dark:bg-gray-900">
          <h1 className="font-ubuntu my-3 text-lg dark:text-white flex">
            <span
              className={` ${api.method === "GET"
                ? "text-green-700 dark:text-green-500"
                : api.method === "POST"
                  ? "text-[#FF6C37]"
                  : api.method === "PUT"
                    ? "text-blue-700 dark:text-blue-500"
                    : "text-red-700 dark:text-red-500"
                }  font-semibold`}
            >
              {api.method}
            </span>
            :
            <span className="ml-2 font-medium dark:text-gray-300">
              {URL.url}
            </span>
          </h1>
          <Suspense fallback={<Loader />}>
            <ReactJson
              src={URL}
              name={false}
              onEdit={(e) => setInputData(e.updated_src)}
              iconStyle="square"
              style={editorStyle}
              theme="bright"
              displayDataTypes={true}
              displayObjectSize={true}
            />
          </Suspense>
          <h1 className="font-ubuntu my-3 text-lg font-semibold dark:text-white">
            Description:
          </h1>
          <div
            className="font-ubuntu mb-5 rounded-md bg-gray-100 p-5 text-lg font-normal dark:bg-gray-800 dark:text-white"
            dangerouslySetInnerHTML={description()}
          ></div>

          <div className="flex w-full items-center">
            {apiOptions.map((option) => (
              <div
                onClick={() => setCurrentOption(option.name)}
                key={option.name}
                className={`${currentOption === option.name
                  ? " border-b-2 border-gray-700 dark:border-[#FF6C37]"
                  : "border-b-2 border-transparent"
                  } font-ubuntu mr-5 cursor-pointer text-lg font-medium dark:text-white`}
              >
                {option.label}
              </div>
            ))}
            <button
              onClick={makeAPIRequest}
              className="font-base lg:font-lg font-ubuntu normal-transition py-.5 items-end justify-self-end rounded-md border border-gray-600 px-3 font-medium hover:shadow-lg active:scale-95 dark:border-gray-600 dark:text-white"
            >
              Send
            </button>
          </div>

          <div className="my-4">
            {api.body.isRequired && currentOption === "body" ? (
              <Suspense fallback={<Loader />}>
                <ReactJson
                  src={inputData}
                  name={false}
                  onEdit={(e) => setInputData(e.updated_src)}
                  iconStyle="square"
                  style={editorStyle}
                  theme="bright"
                  displayDataTypes={true}
                  displayObjectSize={true}
                />
              </Suspense>
            ) : null}
          </div>

          <div className="my-4">
            {api.query.isRequired && currentOption === "query" ? (
              <Suspense fallback={<Loader />}>
                <ReactJson
                  src={queryObject}
                  name={false}
                  onEdit={(e) => setQueryObject(e.updated_src)}
                  iconStyle="square"
                  style={editorStyle}
                  theme="bright"
                  displayDataTypes={true}
                  displayObjectSize={true}
                />
              </Suspense>
            ) : null}
          </div>

          <div className="my-4">
            {api.headers.isRequired && currentOption === "headers" ? (
              <Suspense fallback={<Loader />}>
                <ReactJson
                  src={headersObject}
                  name={false}
                  onEdit={(e) => setHeadersObject(e.updated_src)}
                  iconStyle="square"
                  style={editorStyle}
                  theme="bright"
                  displayDataTypes={true}
                  displayObjectSize={true}
                />
              </Suspense>
            ) : null}
          </div>

          <div className="my-4">
            {Object.keys(api.url.variables).length !== 0 &&
              currentOption === "pathVariables" ? (
              <Suspense fallback={<Loader />}>
                <ReactJson
                  src={pathVariablesObject}
                  name={false}
                  onEdit={(e) => setPathVariablesObject(e.updated_src)}
                  iconStyle="square"
                  style={editorStyle}
                  theme="bright"
                  displayDataTypes={true}
                  displayObjectSize={true}
                />
              </Suspense>
            ) : null}
          </div>

          {!isLoading && Object.keys(result).length !== 0 ? (
            <div className="mt-5">
              <div className="flex items-center justify-between">
                <div className="mb-3 flex items-center">
                  <h1 className="font-ubuntu text-base font-medium dark:text-white lg:text-lg">
                    Request Result
                  </h1>
                  <button
                    onClick={() => setAPIresponse({})}
                    className="font-base lg:font-lg font-ubuntu normal-transition py-.5 ml-5 items-end justify-self-end rounded-md border border-gray-600 px-3 font-medium hover:shadow-lg active:scale-95 dark:border-gray-600 dark:text-white"
                  >
                    Reset
                  </button>
                </div>
                <div className="flex items-center">
                  <div className="mr-4 flex items-center justify-between">
                    <button
                      onClick={() =>
                        fontSize > 14 && setFontSize((prev) => prev - 1)
                      }
                      className={
                        "font-base font-ubuntu items-end justify-self-end border-gray-600 px-1 py-px font-medium text-gray-600 hover:shadow-lg active:scale-95 dark:border-gray-600 dark:text-white lg:text-lg" +
                        (fontSize <= 14 ? " cursor-not-allowed" : "")
                      }
                    >
                      <BsDashSquareFill />
                    </button>
                    <p className="font-ubuntu mx-2 text-base font-normal dark:text-white lg:text-lg">
                      {fontSize}
                    </p>
                    <button
                      onClick={() =>
                        fontSize < 36 && setFontSize((prev) => prev + 1)
                      }
                      className={
                        "font-base font-ubuntu items-end justify-self-end border-gray-600 px-1 py-px font-medium text-gray-600 hover:shadow-lg active:scale-95 dark:border-gray-600 dark:text-white lg:text-lg" +
                        (fontSize >= 36 ? " cursor-not-allowed" : "")
                      }
                    >
                      <BsFillPlusSquareFill />
                    </button>
                  </div>
                  <p className="font-ubuntu mr-4 text-base font-semibold dark:font-normal dark:text-white">
                    Status:
                    <span
                      className={
                        resultStatus.status?.toString().startsWith("2", 0)
                          ? "ml-1 font-medium text-green-600 dark:font-normal dark:text-green-400"
                          : "ml-1 font-medium text-red-500 dark:font-normal"
                      }
                    >
                      {resultStatus.status} {resultStatus.statusText}
                    </span>
                  </p>

                  <p className="font-ubuntu mr-4 text-base font-semibold dark:font-normal dark:text-white">
                    Time:
                    <span
                      className={
                        "ml-1 font-normal text-green-600 dark:font-normal dark:text-green-400"
                      }
                    >
                      {resultStatus.time}
                    </span>
                  </p>
                </div>
              </div>
              <Suspense fallback={<Loader />}>
                <ReactJson
                  src={result}
                  name={false}
                  iconStyle="square"
                  style={editorStyle}
                  theme="bright"
                  displayDataTypes={false}
                  displayObjectSize={true}
                />
              </Suspense>
            </div>
          ) : isLoading ? (
            <Loader />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default SingleApi;
