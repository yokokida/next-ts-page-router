import Image from "next/image";

type LayoutProps = {
  head: string;
  children: React.ReactNode;
};

function Sidebox({ head, children }: LayoutProps) {
  return (
    <>
      <div className="sidebar-container">
        <h2 className="head">{head}</h2>
        <div className="cont">{children}</div>
      </div>
    </>
  );
}

function SideCategory(props: any) {
  return (
    <>
      <a href={props.link} className="post-cat">
        {props.name}
      </a>
    </>
  );
}

function SidePost(props: any) {
  return (
    <>
      <div className="item-box">
        <div className="post-thumb">
          <a href={props.link} className="img-box">
            <Image
              src="/images/common/noimage.jpg"
              alt="ホームページをリニューアルしました"
            />
          </a>
        </div>
        <div className="post-info">
          <div className="post-meta">
            <time dateTime={props.publishedAt} className="post-date">
              {new Date(props.publishedAt)
                .toLocaleDateString("ja-JP")
                .split("/")
                .join(".")}
            </time>
          </div>
          <h3 className="post-ttl">
            <a href={props.link}>{props.title}</a>
          </h3>
        </div>
      </div>
    </>
  );
}

export { Sidebox, SideCategory, SidePost };
