type LayoutProps = {
  children: React.ReactNode;
};

function DlContainer({ children }: LayoutProps) {
  return (
    <>
      <div className="m-dl-container">{children}</div>
    </>
  );
}

function DlDtDd(props: any) {
  return (
    <>
      <dl>
        <dt>{props.head}</dt>
        <dd>{props.cont}</dd>
      </dl>
    </>
  );
}

export { DlContainer, DlDtDd };
