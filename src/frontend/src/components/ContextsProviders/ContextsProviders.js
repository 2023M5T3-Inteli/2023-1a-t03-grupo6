import { ProjectModalCtxProvider } from "../../context/project-modal-ctx";
import { InfoModalCtxProvider } from "../../context/info-modal-ctx";
import { ApplyModalCtxProvider } from "../../context/apply-modal-ctx";

const ContextsProviders = (props) => {
  return (
    <InfoModalCtxProvider>
      <ApplyModalCtxProvider>
        <ProjectModalCtxProvider>{props.children}</ProjectModalCtxProvider>
      </ApplyModalCtxProvider>
    </InfoModalCtxProvider>
  );
};

export default ContextsProviders;
