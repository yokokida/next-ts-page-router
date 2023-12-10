import Link from "next/link";

type LayoutProps = {
  sectionId: string;
  children: React.ReactNode;
};

function LayoutPageNavi({ children }: LayoutProps) {
  return (
    <>
      <div className="m-nav-container">{children}</div>
    </>
  );
}

function PageNavigation(props: any) {
  return (
    <>
      <div className="item-box">
        <div className="ttl-box">
          <p className="sec-sub-ttl">{props.ttlEn}</p>
          <h2 className="ttl ttl-l matchHeight">{props.ttlJa}</h2>
        </div>
        <div className="btn-box">
          <Link href={props.btnLink} className="btn btn-border">
            {props.btnTxt}
          </Link>
        </div>
      </div>
    </>
  );
}

export { LayoutPageNavi, PageNavigation };
