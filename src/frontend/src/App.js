import Navbar from "./components/Navbar/Navbar";
import OfferProject from "./components/OfferProject/OfferProject";
import HomeLayout from './components/HomeLayout/index'
import ImportantInfo from "./components/ImportantInfo/ImportantInfo";

const App = () => {
  return (
    <>
      <Navbar />
      <HomeLayout />
      <OfferProject />
      <ImportantInfo />
    </>
  );
};

export default App;
