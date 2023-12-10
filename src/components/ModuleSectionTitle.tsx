function SectionTitle(props: any) {
  return (
    <>
      <div className="sec-ttl-box fadein-trigger">
        <h2 className="sec-ttl">{props.ttl}</h2>
        <p className="sec-sub-ttl">{props.subttl}</p>
      </div>
    </>
  );
}

function SectionTitleLeftcenter(props: any) {
  return (
    <>
      <div className="sec-ttl-box left-center fadein-trigger">
        <h2 className="sec-ttl">{props.ttl}</h2>
        <p className="sec-sub-ttl">{props.subttl}</p>
      </div>
    </>
  );
}

function SectionTitleVertical(props: any) {
  return (
    <>
      <div className="sec-ttl-box fadein-trigger vertical left-center">
        <h2 className="sec-ttl">{props.ttl}</h2>
        <p className="sec-sub-ttl">{props.subttl}</p>
      </div>
    </>
  );
}

function SectionTitleContentWidth(props: any) {
  return (
    <>
      <div className="sec-ttl-box fadein-trigger">
        <div className="content-width">
          <h2 className="sec-ttl">{props.ttl}</h2>
          <p className="sec-sub-ttl">{props.subttl}</p>
        </div>
      </div>
    </>
  );
}

export {
  SectionTitle,
  SectionTitleLeftcenter,
  SectionTitleVertical,
  SectionTitleContentWidth,
};
