import Navbar from "./components/Navbar/Navbar";
import HomeLayout from './components/Home/HomeLayout'
import OfferProject from "./components/Modais/OfferProject/OfferProject";
import ImportantInfo from "./components/Modais/ImportantInfo/ImportantInfo";
import ApplyProject from "./components/Modais/ApplyProject/ApplyProject";
import ApprovedProject from './components/ApprovedProject/ApprovedProject';
import RejectedProject from './components/RejectedProject/RejectedProject';
import EditProject from "./components/Modais/EditProject/EditProject";

const App = () => {
  return (
    <>
      <Navbar />
      <HomeLayout />
      <OfferProject />
      <EditProject />
      <ImportantInfo />
      <ApplyProject />
      <ApprovedProject />
      <RejectedProject />
    </>
  );
};

export default App;
