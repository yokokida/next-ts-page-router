import Link from "next/link";

export default function ModulePagenation({ totalCount }: any) {
  const PER_PAGE = 12;

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className="wp-pagenavi" role="navigation">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((num, index) => (
        <li key={index} className="item current">
          <Link href={`/blog/page/${num}`}>{num}</Link>
        </li>
      ))}
    </ul>
  );
}
