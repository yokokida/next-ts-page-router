import Image from "next/image";

type LayoutProps = {
  containerClass: string;
  children: React.ReactNode;
};

function ExampleContainer({ containerClass, children }: LayoutProps) {
  return (
    <>
      <div className={containerClass}>{children}</div>
    </>
  );
}

function ExampleBox(props: any) {
  return (
    <>
      <div className="item-box">
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
          <h3 className="ttl">{props.ttl}</h3>
          <p className="txt">{props.txt}</p>
        </div>
      </div>
    </>
  );
}

export { ExampleContainer, ExampleBox };
