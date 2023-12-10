import Image from "next/image";

type LayoutProps = {
  children: React.ReactNode;
};

function ImgTxtContainer({ children }: LayoutProps) {
  return (
    <>
      <div className="m-img-txt-container">{children}</div>
    </>
  );
}

function ImgTxtWideContainer({ children }: LayoutProps) {
  return (
    <>
      <div className="m-img-txt-wide-container">{children}</div>
    </>
  );
}

function ImgTxtBox(props: any) {
  return (
    <>
      <div className="m-img-txt-box">
        <div className="img-area">
          <div className="img-box">
            <Image
              src={props.imgSrc}
              alt={props.ttl}
              className={props.imgClass}
              width={props.imgWidth}
              height={props.imgHeight}
            />
          </div>
        </div>
        <div className="txt-area">
          <h3 className="title">{props.ttl}</h3>
          <p className="txt">{props.txt}</p>
        </div>
      </div>
    </>
  );
}

function ImgTxtBoxReverse(props: any) {
  return (
    <>
      <div className="m-img-txt-box reverse">
        <div className="img-area">
          <div className="img-box">
            <Image
              src={props.img}
              alt={props.ttl}
              className="fadein-trigger"
              width="428"
              height="379"
            />
          </div>
        </div>
        <div className="txt-area">
          <h3 className="title">{props.ttl}</h3>
          <div className="txt">{props.subttl}</div>
        </div>
      </div>
    </>
  );
}

function ImgTxtBoxVerticalTtl(props: any) {
  var num = ("0" + props.number).slice(-2);
  return (
    <>
      <div className="m-img-txt-box">
        <div className="img-area">
          <div className="img-box">
            <Image
              src={props.imgSrc}
              alt={props.ttl}
              className={props.imgClass}
              width={props.imgWidth}
              height={props.imgHeight}
            />
          </div>
        </div>
        <div className="txt-area">
          <div className="vertical-ttl-box">
            <span className="index-num">{num}</span>
            <h3 className="title vertical">{props.ttl}</h3>
          </div>
          <p className="txt">{props.txt}</p>
        </div>
      </div>
    </>
  );
}

function ImgTxtBoxColumn(props: any) {
  return (
    <>
      <div className="m-img-txt-box-column">
        <div className="img-area">
          <div className="img-box">
            <Image
              src={props.imgSrc}
              alt={props.ttl}
              className={props.imgClass}
              width={props.imgWidth}
              height={props.imgHeight}
            />
          </div>
        </div>
        <div className="txt-area">
          <p className="txt">{props.txt}</p>
        </div>
      </div>
    </>
  );
}

export {
  ImgTxtContainer,
  ImgTxtWideContainer,
  ImgTxtBox,
  ImgTxtBoxReverse,
  ImgTxtBoxVerticalTtl,
  ImgTxtBoxColumn,
};
