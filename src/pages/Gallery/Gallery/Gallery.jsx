import { Helmet } from "react-helmet-async";
import backgroundImage from "../../../assets/images/Gallery/page-background.jpg";
import PageCover from "../../Shared/PageCover/PageCover";
import GalleryImagesSection from "../GalleryImagesSection/GalleryImagesSection";
import SectionHeader from "../../../Components/SectionHeader/SectionHeader";

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Fitness Forge | Gallery</title>
      </Helmet>
      <main>
        <section>
          <PageCover
            backgroundImg={backgroundImage}
            title={"Our Gallery "}
          ></PageCover>
        </section>
        <section className="my-20">
          <SectionHeader title={"Fitness Gallery"}></SectionHeader>
          <GalleryImagesSection />
        </section>
      </main>
    </>
  );
};

export default Gallery;
