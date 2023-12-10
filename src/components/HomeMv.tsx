import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function HomeMv() {
  const MvImages = [
    { src: "/images/home/mv_01.jpg" },
    { src: "/images/home/mv_02.jpg" },
    { src: "/images/home/mv_03.jpg" },
  ];
  const menus = [
    {
      url: "/",
      txt: "トップ",
    },
    {
      url: "/about/",
      txt: "私たちについて",
    },
    {
      url: "/info/",
      txt: "お知らせ",
    },
    {
      url: "/contact/",
      txt: "お問い合わせ",
    },
  ];
  return (
    <>
      <div id="home-header">
        <div className="logo-box">
          <div className="img-box">
            <a href="/">
              <Image
                src="/images/common/logo_01.svg"
                alt="株式会社"
                width="120"
                height="36"
              />
            </a>
          </div>
        </div>
        <nav className="nav-box">
          <ul id="menu-g-nav-1" className="h-menu">
            {menus.map((menu) => (
              <li className="menu-item">
                <Link href={menu.url}>{menu.txt}</Link>
              </li>
            ))}
          </ul>
          <Link href="/recruit/" className="btn-recruit">
            <span>採用情報</span>
          </Link>
        </nav>
      </div>
      <div id="home-mv">
        <div className="mv-inner">
          <div id="home-mv-slider" className="m-swiper-container">
            <Swiper
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
            >
              {MvImages.map((img) => (
                <SwiperSlide>
                  <Image
                    src={img.src}
                    width={1900}
                    height={1266}
                    className=""
                    alt="ASTRO"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="txt-area">
            <p className="txt">
              テストコピー
              <br />
              テストコピーテストコピー
              <br />
              テストコピーテストコピー
              <br />
              テストコピー
              <br />
            </p>
            <h2 className="ttl">
              未来に、
              <br />
              <span className="zenkaku">｢紡ぐ」</span>しごと。
            </h2>
          </div>
          <a href="#home-about" className="scroll">
            scroll
          </a>
        </div>
      </div>
    </>
  );
}
