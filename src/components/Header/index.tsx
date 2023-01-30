import { useState } from "react";
import logo from "../../assets/Logo.svg";
import * as Dialog from "@radix-ui/react-dialog";

import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal setOpenModal={setOpenModal} />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
