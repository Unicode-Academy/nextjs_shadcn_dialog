"use client";

import SearchModal from "../modal/search-modal";

type ModalProviderProps = {
  children: Readonly<React.ReactNode>;
};
export default function ModalProvider({ children }: ModalProviderProps) {
  return (
    <>
      {children}
      <SearchModal />
    </>
  );
}
