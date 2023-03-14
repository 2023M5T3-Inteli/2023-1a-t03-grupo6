import { createContext, useState } from "react";

const InfoModalCtx = createContext({
  projectId: null,
  showModal: false,
  showModalHandler: () => {},
});

export const InfoModalCtxProvider = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [projectId, setProjectId] = useState();
  

  const showModalHandler = (id) => {
    setShowModal(!showModal);
    setProjectId(id)
  };

  return (
    <InfoModalCtx.Provider
      value={{
        projectId: projectId,
        showModal: showModal,
        showModalHandler: showModalHandler,
      }}
    >
      {props.children}
    </InfoModalCtx.Provider>
  );
};

export default InfoModalCtx;
