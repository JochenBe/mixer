import React, { useEffect } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  backdrop-filter: blur(1em);
  background-color: ${({ theme }) => theme.shadowDark};

  z-index: 1;
`;

const StyledDialog = styled.div`
  position: relative;

  padding: 2em;
  border-radius: 1em;
  background-color: ${({ theme }) => theme.background};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  width: 1.25em;
  height: 1.25em;
  border: none;
  border-radius: 100%;
  background-color: transparent;

  font-size: 1.75em;
  font-family: ${({ theme }) => theme.fontMonospace};
  color: ${({ theme }) => theme.foregroundSecondary};

  cursor: pointer;

  opacity: 0.75;

  transition: opacity 0.125s ease;

  &:hover,
  &:focus {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;

type DialogProps = {
  onClose?: (() => void) | undefined;
};

const Dialog: React.FC<React.PropsWithChildren<DialogProps>> = ({
  onClose,
  children,
}) => {
  useEffect(() => {
    if (!onClose) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <Overlay onClick={onClose}>
      <StyledDialog
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        {onClose ? <CloseButton onClick={onClose}>×</CloseButton> : null}
        {children}
      </StyledDialog>
    </Overlay>
  );
};

export default Dialog;
