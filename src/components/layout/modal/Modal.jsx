import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalBackdrop = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #00000067;
  z-index: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ModalContent = styled.div`
  width: 50%;
  padding: 1.5rem 2rem;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

const CloseIcon = styled.div`
  align-self: flex-end;
  font-size: 1.3rem;
  line-height: 0.8;
  cursor: pointer;
`;

export const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  const dismiss = () => {
    setShow(false);
  };

  const open = () => {
    setShow(true);
  };

  return (
    <>
      <button onClick={open}>Show Modal</button>
      {show && (
        <ModalBackdrop onClick={dismiss}>
          <ModalContent
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <CloseIcon onClick={dismiss}>&times;</CloseIcon>
            {children}
          </ModalContent>
        </ModalBackdrop>
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.array,
  onSave: PropTypes.func,
};
