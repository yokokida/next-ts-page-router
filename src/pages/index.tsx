import { client } from "@/libs/client";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeMv from "@/components/HomeMv";
import { LayoutSection } from "@/components/LayoutSection";
import {
  SectionTitle,
  SectionTitleLeftcenter,
  SectionTitleVertical,
} from "@/components/ModuleSectionTitle";
import { BtnPrimary } from "@/components/ModuleBtnPrimary";
import { LoopLine } from "@/components/LoopPost";

export async function getStaticProps() {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
}

export default function Home({ blogs }: any) {
  const bizImages = [
    {
      src: "/images/home/business_01.jpg",
      alt: "事業内容1",
      width: 428,
      height: 379,
    },
    {
      src: "/images/home/business_02.jpg",
      alt: "事業内容1",
      width: 428,
      height: 509,
    },
    {
      src: "/images/home/business_03.jpg",
      alt: "事業内容1",
      width: 550,
      height: 292,
    },
  ];

  const recruitImages = [
    {
      src: "/images/home/recruit_01.jpg",
      alt: "採用情報",
      width: 317,
      height: 400,
    },
    {
      src: "/images/home/recruit_02.jpg",
      alt: "採用情報",
      width: 317,
      height: 400,
    },
    {
      src: "/images/home/recruit_03.jpg",
      alt: "採用情報",
      width: 317,
      height: 400,
    },
    {
      src: "/images/home/recruit_04.jpg",
      alt: "採用情報",
      width: 317,
      height: 400,
    },
  ];

  return (
    <div id="wrapper">
      <Header />
      <main>
        <HomeMv />
        <LayoutSection sectionId="home-about">
          <SectionTitleVertical ttl="about us" subttl="私たちについて" />
          <div className="content-box">
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Commodi, dignissimos mollitia similique deserunt, et facere
              <br />
              dolorem aperiam laboriosam nemo eveniet id quod quis architecto?
              Voluptatem aliquid eligendi consequunturrecusandae laudantium.
            </p>
            <BtnPrimary url="about" txt="会社情報はこちら" class="btn-box" />
          </div>
        </LayoutSection>
        <LayoutSection sectionId="home-business">
          <SectionTitleLeftcenter ttl="business" subttl="事業内容" />
          <div className="content-box">
            <div className="txt-area center-left">
              <p className="txt">
                Lorem ipsum dolor sit amet consectetur <br />
                adipisicing elit. Dignissimos ipsa dolore
              </p>
              <BtnPrimary
                url="business"
                txt="事業内容はこちら"
                class="btn-box"
              />
            </div>
            <div className="img-area">
              {bizImages.map((img) => (
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="fadein-trigger"
                  width={img.width}
                  height={img.height}
                />
              ))}
            </div>
          </div>
        </LayoutSection>
        <LayoutSection sectionId="home-news">
          <div className="sec-ttl-wrapper left-center">
            <SectionTitle ttl="news" subttl="お知らせ" />
          </div>
          <div className="content-box">
            <div className="m-post-container panel is-show">
              {blogs.map((content: any) => (
                <LoopLine
                  id={content.id}
                  publishedAt={content.publishedAt}
                  categoryName={content.category.name}
                  title={content.title}
                />
              ))}
            </div>
            <BtnPrimary
              url="blog"
              txt="一覧はこちら"
              class="btn-box right-center"
            />
          </div>
        </LayoutSection>
        <LayoutSection sectionId="home-recruit">
          <div className="content-box">
            <div className="img-area img-box">
              {recruitImages.map((img) => (
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="fadein-trigger"
                  width={img.width}
                  height={img.height}
                />
              ))}
            </div>
            <div className="txt-area">
              <SectionTitleLeftcenter ttl="recruit" subttl="採用情報" />
              <div className="cont">
                <p className="txt">
                  Lorem ipsum dolor sit amet,
                  <br />
                  consectetur adipisicing elit. Eligendi,
                  <br />
                  quia, praesentium cum ex earum, in perferendis
                </p>
                <BtnPrimary
                  url="recruit"
                  txt="採用情報はこちら"
                  class="btn-box"
                />
              </div>
            </div>
          </div>
        </LayoutSection>
      </main>
      <Footer />
    </div>
  );
}
