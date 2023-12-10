import Link from "next/link";

function BtnPrimary(props: any) {
  return (
    <>
      <div className={props.class}>
        <Link href={props.url} className="btn btn-primary">
          <span>{props.txt}</span>
        </Link>
      </div>
    </>
  );
}

export { BtnPrimary };
