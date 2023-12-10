import Image from "next/image";
import Link from "next/link";

function LoopLine(props: any) {
  return (
    <>
      <Link href={`/blog/${props.id}`} className={`item-box ${props.id}`}>
        <div className="post-info">
          <div className="post-meta">
            <time dateTime={props.publishedAt} className="post-date">
              {new Date(props.publishedAt)
                .toLocaleDateString("ja-JP")
                .split("/")
                .join(".")}
            </time>
            <div className="post-cats">
              <span className="post-cat">{props.categoryName}</span>
            </div>
          </div>
          <h3 className="post-ttl">{props.title}</h3>
        </div>
      </Link>
    </>
  );
}

function LoopCard(props: any) {
  return (
    <>
      <Link href={`/blog/${props.id}`} className={`item-box ${props.id}`}>
        <div className="post-thumb">
          <div className="img-box">
            <Image
              src={props.thumbnail}
              alt={props.title}
              className="fadein-trigger"
              width="920"
              height="476"
            />
          </div>
        </div>
        <div className="post-info">
          <h3 className="post-ttl">{props.title}</h3>
          <div className="post-meta">
            <time dateTime={props.publishedAt} className="post-date">
              {new Date(props.publishedAt)
                .toLocaleDateString("ja-JP")
                .split("/")
                .join(".")}
            </time>
            <div className="post-cats">
              <span className="post-cat">{props.categoryName}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

function LoopCardTrmOnThumb(props: any) {
  return (
    <>
      <Link href={`/blog/${props.id}`} className={`item-box ${props.id}`}>
        <div className="post-thumb">
          <div className="post-cats">
            <span className="post-cat">{props.categoryName}</span>
          </div>
          <div className="img-box">
            <Image
              src={props.thumbnail}
              alt={props.title}
              className="fadein-trigger"
              width="920"
              height="476"
            />
          </div>
        </div>
        <div className="post-info">
          <h3 className="post-ttl">{props.title}</h3>
          <div className="post-meta">
            <time dateTime={props.publishedAt} className="post-date">
              {new Date(props.publishedAt)
                .toLocaleDateString("ja-JP")
                .split("/")
                .join(".")}
            </time>
          </div>
        </div>
      </Link>
    </>
  );
}

function LoopCardOnlyTitle(props: any) {
  return (
    <>
      <Link href={`/blog/${props.id}`} className={`item-box ${props.id}`}>
        <div className="post-thumb">
          <div className="img-box">
            <Image
              src={props.thumbnail}
              alt={props.title}
              className="fadein-trigger"
              width="920"
              height="476"
            />
          </div>
        </div>
        <div className="post-info">
          <h3 className="post-ttl">{props.title}</h3>
        </div>
      </Link>
    </>
  );
}

function LoopCardWide(props: any) {
  return (
    <>
      <Link href={`/blog/${props.id}`} className={`item-box ${props.id}`}>
        <div className="post-thumb">
          <div className="img-box">
            <Image
              src={props.thumbnail}
              alt={props.title}
              className="fadein-trigger"
              width="920"
              height="476"
            />
          </div>
        </div>
        <div className="post-info">
          <div className="post-cont">{props.title}</div>
          <p className="post-date">
            <time dateTime={props.publishedAt} className="post-date">
              {new Date(props.publishedAt)
                .toLocaleDateString("ja-JP")
                .split("/")
                .join(".")}
            </time>
          </p>
          <h3 className="post-ttl">{props.title}</h3>
        </div>
      </Link>
    </>
  );
}

export {
  LoopLine,
  LoopCard,
  LoopCardTrmOnThumb,
  LoopCardOnlyTitle,
  LoopCardWide,
};
