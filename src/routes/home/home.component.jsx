import HeaderSection from "../../components/header-section/header-section.component";
import GalleryPreview from "../../components/gallery-preview/gallery-preview.component";
import AboutRestaurant from "../../components/about-restaurant/about-restaurant.component";


const Home = () => {

  return (
    <>
      <HeaderSection />
      <AboutRestaurant />
      <GalleryPreview />
    </>
  );
}

export default Home