import FooterBrandBox from "./_common_components/FooterBrandBox/FooterBrandBox";
import HomeFVCarousel from "./_home_components/HomeFVCarousel";
import HomeHowTo from "./_home_components/HomeHowTo";
import HomeInformation from "./_home_components/HomeInformation";
import HomeLatestNews from "./_home_components/HomeLatestNews";

const MagazineMockSiteHome = () => {
  return (
    <>
      <HomeFVCarousel />
      <HomeLatestNews />
      <HomeInformation />
      <HomeHowTo />
      <HomeHowTo />
      <HomeHowTo />
      <HomeHowTo />
      <FooterBrandBox />
    </>
  )
}

export default MagazineMockSiteHome;