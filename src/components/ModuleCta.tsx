import Link from "next/link";
import Image from "next/image";

function CtaColumnHasTxt(props: any) {
  return (
    <>
      <div className="item-box">
        <div className="ttl-wrap">
          <div className="img-box">
            <Image
              src="/images/common/catalog_01.png"
              alt=""
              width="300"
              height="300"
            />
          </div>
          <div className="txt-box">
            <div className="ttl-box">
              <p className="sec-sub-ttl">{props.subttl}</p>
              <h2 className="sec-ttl">{props.ttl}</h2>
            </div>
            <p className="txt">{props.txt}</p>
          </div>
        </div>
        <div className="btn-box">
          <Link
            href={props.btnUrl}
            className="btn btn-size-m icon-circle-arrow btn-yellow"
          >
            {props.btnTxt}
          </Link>
        </div>
      </div>
    </>
  );
}

function CtaBanner(props: any) {
  return (
    <>
      <div className="m-img-txt-box">
        <div className="img-area">
          <div className="img-box">
            <Image
              src={props.imgSrc}
              alt={props.imgAlt}
              width="500"
              height="300"
            />
          </div>
        </div>
        <div className="txt-area">
          <div className="sub-ttl ten-mincho ttl-m">{props.ttlJa}</div>
          <h2 className="sec-ttl">{props.ttlEn}</h2>
          <div className="btn-box">
            <Link
              href={props.btnLink}
              className="btn btn-block icon-circle-arrow btn-size-m"
            >
              {props.btnTxt}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function CtaContainer(props: any) {
  return (
    <>
      <div className="m-contact-container contact">
        <div className="sec-ttl-box">
          <h2 className="sec-ttl sec-ttl-ja border-bottom-center">
            {props.ttl}
          </h2>
        </div>
        <p className="txt center-center">{props.leadtxt}</p>
        <div className="btn-wrap">
          <a href={props.btnLink1} className="btn btn-gold">
            <span className="icon-mail">{props.btnTxt1}</span>
          </a>
          <a href={props.btnLink2} className="btn btn-gold">
            <span className="icon-mail">{props.btnTxt2}</span>
          </a>
        </div>
        <div className="tel-box">
          <div className="head">
            <div className="bold">お電話からのご相談</div>
            <div className="time">{props.time}</div>
          </div>
          <a href={`tel:${props.tel}`} className="tel">
            {props.tel}
          </a>
        </div>
      </div>
    </>
  );
}

export { CtaColumnHasTxt, CtaBanner, CtaContainer };
