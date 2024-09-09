import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 55em;
  position: relative; /* 상대적 위치를 설정 */
  overflow: hidden;
`;

export const SliderTitle = styled.h1`
  position: absolute;
  z-index: 10;
  color: white;
`;

export const SlideGallery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 75%;
  left: 5%;
  gap: 10px;
`;

export const GalleryTitle = styled.span`
  font-weight: 400;
  color: white;
  text-align: center;
  font-size: 1.5rem;
`;

export const GalleryContent = styled.span`
  font-weight: bold;
  color: white;
  text-align: center;
  font-size: 3rem;
`;

export const LinkBox = styled.div`
  cursor: pointer;
`;
