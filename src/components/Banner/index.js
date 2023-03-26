import './Banner.css';
import bannerImg from '../../img/banner.png';

const Banner = () => {
  return (
    <header className="banner">
      <img src={bannerImg} alt="Banner principal da página" />
    </header>
  );
}

export default Banner;