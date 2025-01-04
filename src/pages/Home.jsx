import Banner from "../components/Banner";
import MenuPage from "../components/Menu/MenuPage";
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Banner />
      <MenuPage />
    </div>
  );
};

export default Home;
