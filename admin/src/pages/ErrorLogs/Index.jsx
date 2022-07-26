import React, { useEffect, useState } from "react";
import { DatePicker, Space, Table } from "antd";
import dayjs from "dayjs";
import useSWR from "swr";
import Fetcher from "../../utils/Fetcher";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../components/BreadCrumbs/Index";
const { RangePicker } = DatePicker;

export default function Index() {
  const [errors, setErrors] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { data } = useSWR(
    `/error-logs?page=${page}&pageSize=${pageSize}&startDate=${startDate}&endDate=${endDate}`,
    Fetcher
  );

  useEffect(() => {
    setErrors(data?.data?.map((error) => ({ ...error, key: error._id })) ?? []);
    setIsLoading(false);
  }, [data]);

  let breadcrumbs = [
    {
      isLink: true,
      link: "/",
      name: "Home",
    },
    {
      isLink: false,
      link: "/error-logs",
      name: "Error Logs",
    },
  ];

  const tableColumn = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "IP",
      dataIndex: "IP",
      key: "IP",
    },
    {
      title: "Error Message",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt) => (
        <span>{dayjs(createdAt).format("DD MMMM YYYY, ddd hh:mm a")}</span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/error-logs/${record._id}`}>View Details</Link>
        </Space>
      ),
    },
  ];

  const onChange = (value, dateString) => {
    setStartDate(
      dayjs(dayjs(dateString[0]).format("DD-MM-YYYY"))
        .subtract(1, "day")
        .format("YYYY-MM-DD")
    );
    setEndDate(dayjs(dateString[1]).format("YYYY-MM-DD"));
  };

  return (
    <>
      <BreadCrumbs details={breadcrumbs} />
      <div className="pt-3">
        <div className="flex justify-end">
          <RangePicker
            format="DD-MM-YYYY"
            className="dark:bg-deepDark dark:border-transparent text-white"
            onChange={onChange}
          />
        </div>
        <div className="mt-3">
          <Table
            loading={isLoading}
            columns={tableColumn}
            dataSource={errors}
            pagination={{
              showSizeChanger: true,
              total: data && data.totalSize,
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} items`,
              current: page,
              pageSize,
              className: "dark:text-white",
              hideOnSinglePage: true,
              responsive: true,
              onChange: (page, pageSize) => {
                setIsLoading(true);
                setPage(page);
                setPageSize(pageSize);
              },
            }}
          />
        </div>
      </div>
    </>
  );
}
