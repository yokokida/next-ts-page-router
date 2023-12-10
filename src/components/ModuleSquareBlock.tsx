type LayoutProps = {
  containerClass: string;
  children: React.ReactNode;
};

function SquareBlockContainer({ containerClass, children }: LayoutProps) {
  return (
    <>
      <div className={containerClass}>{children}</div>
    </>
  );
}

function SquareBlockItem(props: any) {
  return (
    <>
      <div className="item-box">
        <h3 className="ttl">{props.ttl}</h3>
        <p className="txt">{props.txt}</p>
      </div>
    </>
  );
}

export { SquareBlockContainer, SquareBlockItem };
