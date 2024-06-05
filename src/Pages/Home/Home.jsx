
import BeforeAfter from "./BeforeAfter/BeforeAfter";
import Book from "./Book/Book";
import FeedBack from "./FeedBack/FeedBack";
import HeroSection from "./HeroSection/HeroSection";
import QualityServices from "./QualitySevices/QualityServices";
import VideoPlayer from "./VideoPlayer";
import Why from "./Why/Why";
import Area from "./Area/Area";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <QualityServices />
      <Why />
      <VideoPlayer />
      <FeedBack />
      <BeforeAfter />
      <Book />
      <Area/>
    </div>
  );
};

export default Home;
