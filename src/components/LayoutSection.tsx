type LayoutProps = {
  sectionId: string;
  children: React.ReactNode;
};

function LayoutSection({ sectionId, children }: LayoutProps) {
  return (
    <>
      <section id={sectionId}>
        <div className="sec-inner content-width">{children}</div>
      </section>
    </>
  );
}

function LayoutSectionPt0({ sectionId, children }: LayoutProps) {
  return (
    <>
      <section id={sectionId}>
        <div className="sec-inner content-width pt0">{children}</div>
      </section>
    </>
  );
}

function LayoutSectionPt0WithoutWidth({ sectionId, children }: LayoutProps) {
  return (
    <>
      <section id={sectionId}>
        <div className="sec-inner pt0">{children}</div>
      </section>
    </>
  );
}

function LayoutSectionWithoutWidthInner({ sectionId, children }: LayoutProps) {
  return (
    <>
      <section id={sectionId}>{children}</section>
    </>
  );
}

export {
  LayoutSection,
  LayoutSectionPt0,
  LayoutSectionPt0WithoutWidth,
  LayoutSectionWithoutWidthInner,
};
