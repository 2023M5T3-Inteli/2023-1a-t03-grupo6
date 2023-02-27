import Navbar from "./components/Navbar/Navbar";
import OfferProject from "./components/OfferProject/OfferProject";
import HomeLayout from './components/HomeLayout/index'
import ImportantInfo from "./components/ImportantInfo/ImportantInfo";
import ApplyProject from "./components/ApplyProject/ApplyProject";

const App = () => {
  return (
    <>
      <Navbar />
      <HomeLayout />
      <OfferProject />
      <ImportantInfo />
      <ApplyProject />
    </>
  );
};

export default App;
