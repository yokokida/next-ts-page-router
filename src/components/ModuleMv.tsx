import React from "react";
import { useRouter } from "next/router";

export default function ModuleMv() {
  const router = useRouter();
  const pathname = router.pathname;

  var ttlEn = "";
  var ttlJa = "";
  switch (pathname) {
    case "/about":
      var ttlEn = "about us";
      var ttlJa = "私たちについて";
      break;
    case "/business":
      var ttlEn = "business";
      var ttlJa = "事業紹介";
      break;
    case "/recruit":
      var ttlEn = "recruit";
      var ttlJa = "事業紹介";
      break;
    case "/about":
      var ttlEn = "about us";
      var ttlJa = "私たちについて";
      break;
    case "/blog":
    case "/blog/[id]":
      var ttlEn = "NEWS";
      var ttlJa = "お知らせ";
      break;

    default:
      break;
  }
  return (
    <>
      <div id="page-mv" className="mv">
        <div className="mv-inner">
          <div className="content-width">
            <div className="page-ttl-box">
              <h1 className="page-ttl">{ttlEn}</h1>
              <p className="page-sub-ttl">{ttlJa}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
