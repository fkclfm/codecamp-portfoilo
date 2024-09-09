import styled from "@emotion/styled";
import Slider from "react-slick";
import * as B from "./banner.styled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

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

  .slick-arrow {
    display: flex;
    z-index: 10;
    width: 1vw;
    height: 1vw;
  }

  .slick-slide {
    position: relative;
  }

  .slick-slide img {
    width: 100%;
    height: 50em;
    object-fit: cover;
    margin: auto;
    display: block;
  }
`;

export default function Banner() {
  const PrevArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "black",
          left: "50px",
          zIndex: 10,
          background: "transparent",
        }}
        onClick={onClick}
      ></div>
    );
  };

  const NextArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: "50px",
          zIndex: 10,
        }}
        onClick={onClick}
      ></div>
    );
  };

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const banner = [
    {
      src: "/images/banner01.jpg",
      number: 1,
      title: "칸예 웨스트의 내한",
      content: "한국을 뒤흔든 칸예 웨스트",
      link: "https://www.youtube.com/watch?v=sKce5JbFBEc",
    },
    {
      src: "/images/banner02.jpg",
      number: 2,
      title: "빈지노의 청춘",
      content: "24: 26을 감상해봅시다",
      link: "https://www.youtube.com/watch?v=jmD5E2lcTmE&list=PLXwBhxuZ3H_kHHxErNPxRdBrFNqScEnJ9",
    },
    {
      src: "/images/banner03.jpg",
      number: 3,
      title: "새벽마다 생각나는 목소리",
      content: "DEAN의 음악",
      link: "https://www.youtube.com/watch?v=sKce5JbFBEc",
    },
    {
      src: "/images/banner04.jpg",
      number: 4,
      title: "그가 돌아온다",
      content: "요네즈 켄시의 정규 6집",
      link: "https://www.youtube.com/watch?v=os4tzo0Vt9g&list=PLmJuOI_ZWz-Ry6FXosP5mBWz-AyiYx_FS",
    },
  ];

  return (
    <B.Wrapper>
      <StyledSlider {...settings}>
        {banner.map((el) => (
          <div key={el.number}>
            <Link href={el.link}>
              <B.LinkBox>
                <img src={el.src} alt="slick" />
                <B.SlideGallery>
                  <B.GalleryTitle>{el.title}</B.GalleryTitle>
                  <B.GalleryContent>{el.content}</B.GalleryContent>
                </B.SlideGallery>
              </B.LinkBox>
            </Link>
          </div>
        ))}
      </StyledSlider>
    </B.Wrapper>
  );
}
