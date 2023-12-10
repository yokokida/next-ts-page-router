import Head from "next/head";

function HeadCustom() {
  const pageTitle = "株式会社〇〇";
  const siteTitle = "株式会社〇〇";
  const Description = "株式会社〇〇";
  const Domain = "株式会社〇〇";
  const OGP = "株式会社〇〇";

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width" />
        <meta name="generator" content="" />
        <title>{pageTitle}</title>
        <meta name="description" content={Description} />
        <link rel="canonical" href={Domain} />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={Description} />
        <meta property="og:url" content={Domain} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:image" content={OGP} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    </>
  );
}

export { HeadCustom };
