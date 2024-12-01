import Head from "next/head";
import * as L from "../styles/index.styled";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [-2, 1]);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value === 1) {
        setShowText(true);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <Head>
        <title>HIPLP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <L.FirstLanding>
        <video
          src="/videos/background.mp4" // 여기에 비디오 파일 경로를 입력하세요.
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "125vh",
            objectFit: "cover", // 비디오가 화면 전체를 덮도록 함
            maxWidth: "100vw",
            zIndex: -1, // 비디오를 배경에 놓기 위해 z-index를 낮게 설정
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
          }}
        >
          <L.LandingHeader1>새로운 세상을 만나다</L.LandingHeader1>
          <L.LandingHeader2>HIPLP를 시작해보세요🎧</L.LandingHeader2>
          <L.LandingHeader3>
            사람들과 함께 음악으로 소통해보아요!
          </L.LandingHeader3>
          <L.LandingButton>시작하기</L.LandingButton>
        </motion.div>
        <L.Box>
          <L.IntroBox>
            <L.IntroBoxHeader>
              다양한 사람들과
              <br />
              커뮤니케이션을 Start!
            </L.IntroBoxHeader>
            <L.IntroContent>
              음악을 좋아하는 사람들을 위해
              <br />
              커뮤니티 HIPLP를 이용해보세요!
              <br />
            </L.IntroContent>
          </L.IntroBox>
          <L.IntroBox>
            <L.IntroBoxHeader>
              가지고 싶은
              <br />
              중고 음반을 선택하여 구매
            </L.IntroBoxHeader>
            <L.IntroContent>
              계정 포인트를 충전하여
              <br />
              다양한 음반들을 구매해보세요!
              <br />
            </L.IntroContent>
          </L.IntroBox>
        </L.Box>
      </L.FirstLanding>
    </>
  );
}
