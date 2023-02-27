import { createContext, useState } from "react";

const InfoModalCtx = createContext({
  showModal: false,
  showModalHandler: () => {},
});

export const InfoModalCtxProvider = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(!showModal);
  };

  return (
    <InfoModalCtx.Provider
      value={{
        showModal: showModal,
        showModalHandler: showModalHandler,
      }}
    >
      {props.children}
    </InfoModalCtx.Provider>
  );
};

export default InfoModalCtx
