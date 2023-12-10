import Image from "next/image";
import Link from "next/link";
import { HeadCustom } from "./Head";

export default function Header() {
  const headerMenu = [
    {
      link: "/",
      txt: "トップ",
    },
    {
      link: "/blog/",
      txt: "お知らせ",
    },
    {
      link: "/about/",
      txt: "私たちについて",
    },
  ];

  const spMenu = [
    {
      link: "/",
      txtEn: "top",
      txtJa: "トップ",
      subMenu: "",
    },
    {
      link: "/about/",
      txtEn: "about",
      txtJa: "私たちについて",
      subMenu: "",
    },
    {
      link: "/blog/",
      txtEn: "news",
      txtJa: "お知らせ",
      subMenu: "",
    },
    {
      link: "/recruit/",
      txtEn: "recruit",
      txtJa: "採用情報",
      subMenu: [
        {
          sublink: "/recruit/#recruit-occupation",
          subtxt: "仕事を知る",
        },
        {
          sublink: "/recruit/#recruit-interview",
          subtxt: "社員インタビュー",
        },
        {
          sublink: "/recruit/#recruit-environment",
          subtxt: "働く環境",
        },
        {
          sublink: "/recruit/#recruit-requirement",
          subtxt: "募集要項",
        },
        {
          sublink: "/recruit/#recruit-entry",
          subtxt: "エントリー",
        },
      ],
    },
    {
      link: "/contact/",
      txtEn: "contact",
      txtJa: "お問い合わせ",
      subMenu: "",
    },
  ];

  return (
    <>
      <HeadCustom />
      <header id="header">
        <div className="h-inner">
          <div className="h-function">
            <h1 className="logo-box">
              <a href="/" className="img-box">
                <Image
                  src="/images/common/logo_01.svg"
                  alt="株式会社"
                  width="146"
                  height="31"
                />
              </a>
            </h1>
          </div>
          <nav className="nav-area">
            <ul id="menu-g-nav" className="h-menu">
              {headerMenu.map((menu: any) => (
                <li className="menu-item">
                  <Link href={menu.link}>{menu.txt}</Link>
                </li>
              ))}
            </ul>
            <Link href="/contact/" className="btn-recruit">
              <span>お問い合わせ</span>
            </Link>
          </nav>
          <div id="btn-hamburger">
            <span className="border"></span>
            <span className="border"></span>
          </div>
        </div>
        <div id="sp-menu">
          <nav>
            <ul id="menu-sp-nav" className="sp-nav">
              {spMenu.map((menu: any) => (
                <li className="menu-item">
                  <Link href="">
                    <span className="en">{menu.txtEn}</span>
                    <br />
                    <span className="ja">{menu.txtJa}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="info-area">
            <div className="img-box">
              <Image
                src="/images/common/logo_01.svg"
                alt="株式会社"
                width="146"
                height="31"
              />
            </div>
            <p className="address">
              〒000-0000
              <br />
              新潟県新潟市
              <br />
              TEL.
              <a href="tel:00000000000" className="tel">
                00000000000
              </a>
              / FAX. 000000000
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
