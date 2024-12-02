import "./App.css";
import CraftingCare from "./components/CraftingCare";
import FeedBackCarousel from "./components/FeedBackCarousel";
import FollowUs from "./components/FollowUs";
import Footer from "./components/Footer";
import HeroCarousel from "./components/HeroCarousel";
import MainComponent from "./components/navbar";
import NavBar from "./components/navbar";
import PeopleCarousel from "./components/PeopleCarousel";
import Products from "./components/Products";
import Properties from "./components/Properties";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <>
      {/* <div className="relative">
        <NavBar />
        <HeroCarousel />
      </div> */}
      <MainComponent/>

      <Products />
      <PeopleCarousel />
      <CraftingCare />
      <Properties />
      <FeedBackCarousel />
      <FollowUs />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;