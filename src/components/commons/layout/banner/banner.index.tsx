import styled from "@emotion/styled";
import Slider from "react-slick";
import * as B from "./banner.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: 25px;
  }
  .slick-dots li button:before {
    color: white;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
  }

  .slick-slide img {
    width: 100%;
    height: 700px;
    object-fit: cover;
    margin: auto;
    display: block;
  }
`;

export default function Banner() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <B.Wrapper>
      <StyledSlider {...settings}>
        <div>
          <img src="/images/banner01.jpg" alt="slick" />
          <B.SliderTitle>양홍원의 화려한 복귀</B.SliderTitle>
        </div>
        <div>
          <img src="/images/banner02.jpg" alt="slick" />
        </div>
        <div>
          <img src="/images/banner03.jpg" alt="slick" />
        </div>
      </StyledSlider>
    </B.Wrapper>
  );
}
