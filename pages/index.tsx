import Head from "next/head";
import * as L from "../styles/index.styled";
import { motion } from "framer-motion";

export default function Home() {
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
            height: "100vh",
            objectFit: "cover", // 비디오가 화면 전체를 덮도록 함
            maxWidth: "100vw",
            zIndex: -1, // 비디오를 배경에 놓기 위해 z-index를 낮게 설정
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
          }}
        >
          <L.LandingHeader>HIPLP에서 다양한 음반과</L.LandingHeader>
          <L.LandingHeader>관련 소식들을 찾아보세요.</L.LandingHeader>
        </motion.div>
      </L.FirstLanding>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }} // 요소가 화면에 50% 정도 보일 때 애니메이션이 시작됨
        transition={{
          ease: "easeInOut",
          duration: 0.8,
        }}
      >
        <L.IntroduceBox>
          <L.TitleBox>
            <L.Title>HIPLP는</L.Title>
            <L.Title>이런 서비스에요!</L.Title>
          </L.TitleBox>
          <L.TitleImage src="/images/rocket.png" />
        </L.IntroduceBox>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }} // 요소가 화면에 50% 정도 보일 때 애니메이션이 시작됨
        transition={{
          ease: "easeInOut",
          duration: 0.8,
        }}
      >
        <L.Service>
          <L.ServiceTextBox>
            <L.ServiceH1>음반으로 사람들과</L.ServiceH1>
            <L.ServiceH1>소통 할 수 있어요.</L.ServiceH1>
          </L.ServiceTextBox>
          <L.ServiceImage src="/images/chat.png" />
        </L.Service>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }} // 요소가 화면에 50% 정도 보일 때 애니메이션이 시작됨
        transition={{
          ease: "easeInOut",
          duration: 0.8,
        }}
      >
        <L.Service>
          <L.ServiceImage src="/images/megaphone.png" />
          <L.ServiceTextBox>
            <L.ServiceH1>다양한 아티스트들의</L.ServiceH1>
            <L.ServiceH1>소식을 알려줘요.</L.ServiceH1>
          </L.ServiceTextBox>
        </L.Service>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }} // 요소가 화면에 50% 정도 보일 때 애니메이션이 시작됨
        transition={{
          ease: "easeInOut",
          duration: 0.8,
        }}
      >
        <L.Service>
          <L.ServiceTextBox>
            <L.ServiceH1>음악에 대한 접근성을</L.ServiceH1>
            <L.ServiceH1>최소화 시켜 줘요.</L.ServiceH1>
          </L.ServiceTextBox>
          <L.ServiceImage src="/images/music.png" />
        </L.Service>
      </motion.div>
    </>
  );
}
