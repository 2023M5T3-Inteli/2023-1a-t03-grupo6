import Navbar from "./components/Navbar/Navbar";
import HomeLayout from './components/Home/HomeLayout'
import OfferProject from "./components/Modais/OfferProject/OfferProject";
import ImportantInfo from "./components/Modais/ImportantInfo/ImportantInfo";
import ApplyProject from "./components/Modais/ApplyProject/ApplyProject";
import ApprovedProject from './components/ApprovedProject/ApprovedProject';
import RejectedProject from './components/RejectedProject/RejectedProject';

const App = () => {
  return (
    <>
      <Navbar />
      <HomeLayout />
      <OfferProject />
      <ImportantInfo />
      <ApplyProject />
      <ApprovedProject />
      <RejectedProject />
    </>
  );
};

export default App;
