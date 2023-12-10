import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    animationScrollTrigger();
    ApplySpMenu();
    exLink();
    function animationScrollTrigger() {
      var tgts = document.querySelectorAll(".fadein-trigger");
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-active");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: "10%",
          threshold: 0,
        }
      );
      tgts.forEach((target) => {
        observer.observe(target);
      });
    }
    function ApplySpMenu() {
      var menuBtn: any = document.getElementById("btn-hamburger");
      var spMenu: any = document.getElementById("sp-menu");
      if (menuBtn && spMenu) {
        menuBtn.addEventListener("click", () => {
          menuBtn.classList.toggle("is-active");
          spMenu.classList.toggle("is-active");
        });
        spMenu.addEventListener("click", () => {
          menuBtn.classList.toggle("is-active");
          spMenu.classList.toggle("is-active");
        });
      } else {
        return;
      }
    }
    function exLink() {
      var anchorTag: any = document.querySelectorAll("a[href^=http]")[0];
      var sameDomainLink = anchorTag.href.includes(location.hostname);
      if (!sameDomainLink) {
        anchorTag.setAttribute("target", "_blank");
      }
    }
  }, []);

  return (
    <>
      <footer id="footer">
        <div className="f-inner">
          <div className="content-width">
            <div className="info-area">
              <a href="https://github.com/yokokida" className="img-box">
                <Image
                  src="/images/common/logo_01.svg"
                  alt="株式会社"
                  width="200"
                  height="80"
                />
              </a>
              <p className="address">
                〒000-0000
                <br />
                新潟県新潟市西区
                <br />
                TEL.
                <a href="tel:0000000000" className="tel">
                  0000000000
                </a>
              </p>
            </div>
            <div className="menu-area">
              <nav className="menu-box sp-only">
                <ul id="menu-sp-nav" className="sp-nav">
                  <li className="menu-item">
                    <Link href="">
                      <span className="en">top</span>
                      <br />
                      <span className="ja">トップ</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/about/">
                      <span className="en">about us</span>
                      <br />
                      <span className="ja">私たちについて</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/blog/">
                      <span className="en">news</span>
                      <br />
                      <span className="ja">お知らせ</span>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/recruit/">
                      <span className="en">recruit</span>
                      <br />
                      <span className="ja">採用情報</span>
                    </Link>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link href="/recruit/#recruit-occupation">
                          仕事を知る
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/recruit/#recruit-interview">
                          社員インタビュー
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/recruit/#recruit-environment">
                          働く環境
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/recruit/#recruit-requirement">
                          募集要項
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/recruit/#recruit-entry">エントリー</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item">
                    <Link href="/contact/">
                      <span className="en">contact</span>
                      <br />
                      <span className="ja">お問い合わせ</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav className="menu-box pc-only">
                <ul className="menu-list">
                  <li className="menu-item">
                    <Link href="">トップ</Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/about/">私たちについて</Link>
                  </li>
                </ul>
                <ul className="menu-list">
                  <li className="menu-item">
                    <Link href="/blog/">お知らせ</Link>
                  </li>
                </ul>
                <ul className="menu-list">
                  <li className="menu-item">
                    <Link href="/recruit/">採用情報</Link>
                    <ul className="sub-menu">
                      <li className="menu-item">
                        <Link href="/recruit/#recruit-find">仕事を知る</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/recruit/#recruit-interview">
                          社員インタビュー
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/recruit/#recruit-env">働く環境</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/recruit/#recruit-data">データで見る</Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/recruit/#recruit-requirement">
                          募集要項
                        </Link>
                      </li>
                      <li className="menu-item">
                        <Link href="/recruit/#recruit-entry">エントリー</Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul className="menu-list">
                  <li className="menu-item">
                    <Link href="/contact/">お問い合わせ</Link>
                  </li>
                  <li className="menu-item">
                    <Link href="/privacy-policy/">プライバシーポリシー</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <Link href="#" className="to-top">
              page top
            </Link>
          </div>
        </div>
        <div className="copyright">
          <p>&copy;All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
