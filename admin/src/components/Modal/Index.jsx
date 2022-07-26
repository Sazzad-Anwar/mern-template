import React from "react";
import { Modal as AntModal } from "antd";

export default function Modal({ showModal, toggleModal, children, title }) {
  return (
    <AntModal
      visible={showModal}
      title={title}
      onOk={toggleModal}
      onCancel={toggleModal}
      footer={null}
    >
      {children}
    </AntModal>
  );
}
