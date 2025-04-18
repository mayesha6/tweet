import Categories from "./components/Categories";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PopularFood from "./components/PopularFood";
import PopularRestaurant from "./components/PopularRestaurant";
import PreHeader from "./components/PreHeader";

export default function Home() {
  return (
  <>
      <PreHeader/>
      <Header/>
      <Hero/>
      <Categories/>
      <PopularFood/>
      <PopularRestaurant />
  </>
  );
}
