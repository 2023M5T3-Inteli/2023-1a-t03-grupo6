import { createContext, useState } from "react";

const ModalCtx = createContext({
  showModal: false,
  showModalHandler: () => {},
});

export const ModalCtxProvider = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <ModalCtx.Provider
      value={{
        showModal: showModal,
        showModalHandler: showModalHandler,
      }}
    >
      {props.children}
    </ModalCtx.Provider>
  );
};

export default ModalCtx
