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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            ease: "easeInOut",
            duration: 0.7,
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
          duration: 0.7,
        }}
      >
        <L.IntroduceBox>
          <div>
            <L.Title>HIPLP는</L.Title>
            <L.Title>이런 서비스입니다.</L.Title>
          </div>
          <L.IntroduceContentBox>
            <L.Contents>
              <L.IntroduceContent>
                다양한 아티스트에 대한 정보를 빠르게 제공받을 수 있어요
              </L.IntroduceContent>
              <L.IntroduceContent>
                중고 음반 구매를 쉽고 직관적으로 할 수 있어요.
              </L.IntroduceContent>
            </L.Contents>
            <L.Contents>
              <L.IntroduceContent>
                음반에 대한 커뮤니티를 구성해 사람들과 함께
              </L.IntroduceContent>
              <L.IntroduceContent>정보를 공유할 수 있어요.</L.IntroduceContent>
            </L.Contents>
          </L.IntroduceContentBox>
        </L.IntroduceBox>
      </motion.div>
    </>
  );
}
