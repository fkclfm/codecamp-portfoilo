import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  position: relative; /* 상대적 위치를 설정 */
  overflow: hidden;
`;

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
    max-width: 100%; /* 슬라이더 너비에 맞춤 */
    max-height: 400px; /* 슬라이더 높이에 맞춤 */
    margin: auto;
    display: block;
    background: transparent;
  }
`;

export default function Banner() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <StyledSlider {...settings}>
        <div>
          <img src="/images/lp.png" alt="slick" />
        </div>
        <div>
          <img src="/images/lp.png" alt="slick" />
        </div>
        <div>
          <img src="/images/lp.png" alt="slick" />
        </div>
      </StyledSlider>
    </Wrapper>
  );
}
