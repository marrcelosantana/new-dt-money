import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme["gray-800"]};

  /* ----> Centralização do modal na tela <---- */

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  /* ----> Centralização do modal na tela <---- */

  @media (max-width: 769px) {
    min-width: 100%;
    padding: 1.5rem;
    top: auto;
    left: 0;
    transform: none;
    bottom: 0;
    border-radius: 20px 20px 0 0;

    h2 {
      font-size: 1.25rem;
    }
  }

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 769px) {
      gap: 0.75rem;
    }

    input {
      border-radius: 6px;
      border: 0;
      background: ${(props) => props.theme["gray-900"]};
      color: ${(props) => props.theme["gray-300"]};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      background: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
      font-weight: 700;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      transition: background-color 0.2;
      cursor: pointer;

      &:not(:disabled):hover {
        background: ${(props) => props.theme["green-700"]};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      @media (max-width: 769px) {
        height: 50px;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  line-height: 0;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme["gray-500"]};
`;
