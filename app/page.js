import AppExperience from "./components/AppExperience";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PopularFood from "./components/PopularFood";
import PopularRestaurant from "./components/PopularRestaurant";
import PreHeader from "./components/PreHeader";
import Testimonial from "./components/testimonial";

export default function Home() {
  return (
  <>
      <PreHeader/>
      <Header/>
      <Hero/>
      <Categories/>
      <PopularFood/>
      <PopularRestaurant />
      <AppExperience />
      <Testimonial/>
      <Footer/>
  </>
  );
}
