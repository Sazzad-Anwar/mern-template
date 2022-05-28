import React from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { GrClose } from "react-icons/gr";

export default function Modal({ showModal, toggleModal, children }) {
  return ReactDOM.createPortal(
    <ModalWrapper showModal={showModal}>
      <ModalContent className="dark:bg-dark bg-white">
        <CloseButton onClick={toggleModal}>
          <GrClose color="#1890ff" />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>,
    document.getElementById("modal")
  );
}

export const ModalWrapper = styled.div`
  position: fixed;
  display: ${({ showModal }) => (showModal ? "flex" : "none")};
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  justify-content: center;
  align-items: start;
  animation: popup 0.3s;
  @keyframes popup {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 30vh;
  min-width: 25vw;
  max-width: 80%;
  max-height: auto;
  border-radius: 10px;
  margin: 2% auto;
  @media (max-width: 1600px) {
    margin: 1% auto;
    min-height: 28vh;
    min-width: 33vw;
  }
  @media (max-width: 1200px) {
    margin: 0% auto;
    min-height: 50vh;
    min-width: 50vw;
  }
  @media (max-width: 1024px) {
    min-height: 50vh;
    min-width: 50vw;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 10px;
  background-color: #dddd;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  :hover {
    background-color: #bbbb;
  }
`;
