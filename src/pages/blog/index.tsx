import { client } from "@/libs/client";
import Header from "@/components/Header";
import ModuleMv from "@/components/ModuleMv";
import Footer from "@/components/Footer";
import { LoopLine } from "@/components/LoopPost";
import ModulePagenation from "@/components/ModulePagenation";

export async function getStaticProps() {
  const data = await client.get({ endpoint: "blogs" });

  return {
    props: {
      blogs: data.contents,
    },
  };
}

export default function Blogs({ blogs }: any) {
  return (
    <>
      <Header />
      <main>
        <ModuleMv />
        <div className="archive-content">
          <div className="content-width">
            <div className="m-post-container">
              {blogs.map((content: any, index: number) => (
                <LoopLine
                  key={index}
                  id={content.id}
                  publishedAt={content.publishedAt}
                  categoryName={content.category.name}
                  title={content.title}
                />
              ))}
            </div>
            <ModulePagenation totalCount={20} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
