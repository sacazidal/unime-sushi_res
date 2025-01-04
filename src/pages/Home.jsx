import Banner from "../components/Banner";
import MenuPage from "../components/Menu/MenuPage";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0">
      <Navbar />
      <Banner />
      <MenuPage />
    </div>
  );
};

export default Home;
