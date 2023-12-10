import Link from "next/link";
import { client } from "@/libs/client";
import Header from "@/components/Header";
import ModuleMv from "@/components/ModuleMv";
import Footer from "@/components/Footer";
import { Sidebox, SideCategory, SidePost } from "@/components/Sidebar";

export async function getStaticPaths() {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content: any) => `/blog/${content.id}`);
  return { paths, fallback: false };
}

export async function getStaticProps(context: any) {
  const id = context.params.id;

  const dataContent = await client.get({ endpoint: "blogs", contentId: id });

  const fields = "id,title,publishedAt";
  const prev = await client.get({
    endpoint: "blogs",
    queries: {
      limit: 1,
      orders: "-publishedAt",
      fields,
      filters: `publishedAt[less_than]${dataContent.publishedAt}`,
    },
  });
  const next = await client.get({
    endpoint: "blogs",
    queries: {
      limit: 1,
      orders: "publishedAt",
      fields,
      filters: `publishedAt[greater_than]${dataContent.publishedAt}`,
    },
  });

  const dataBlog = await client.get({ endpoint: "blogs" });
  const dataCategory = await client.get({ endpoint: "categories" });

  return {
    props: {
      post: dataContent,
      blogs: dataBlog.contents,
      categories: dataCategory.contents,
      prevPost: prev.contents[0] || {},
      nextPost: next.contents[0] || {},
    },
  };
}

type BlogsType = {
  post: any;
  prevPost: any;
  nextPost: any;
  blogs: any;
  categories: any;
};

export default function Blog({
  post,
  prevPost,
  nextPost,
  blogs,
  categories,
}: BlogsType) {
  return (
    <>
      <Header />
      <main>
        <ModuleMv />
        <div className="single-content">
          <div className="content-width">
            <div id="article-container" className="has-sidebar">
              <div id="entry-article">
                <div className="entry-ttl-box">
                  <div className="post-meta">
                    <time dateTime={post.publishedAt} className="post-date">
                      {new Date(post.publishedAt)
                        .toLocaleDateString("ja-JP")
                        .split("/")
                        .join(".")}
                    </time>
                    <div className="post-cats">
                      <Link href="/blog/" className="post-cat">
                        {post.category.name}
                      </Link>
                    </div>
                  </div>
                  <h1 className="post-ttl">{post.title}</h1>
                </div>

                <div
                  className="entry-content"
                  dangerouslySetInnerHTML={{
                    __html: `${post.content}`,
                  }}
                ></div>

                <div id="nav-below">
                  <span>{prevPost.title}</span>
                  <Link href="/blog/" className="btn btn-border pc-only">
                    <span>一覧に戻る</span>
                  </Link>
                  <span>{nextPost.title}</span>
                </div>
                <Link href="/blog/" className="btn btn-border sp-only">
                  <span>一覧に戻る</span>
                </Link>
              </div>

              <div id="entry-sidebar">
                <Sidebox head="カテゴリー">
                  <div className="post-cats">
                    {categories.map((category: any, index: number) => (
                      <SideCategory
                        key={index}
                        link={category.id}
                        name={category.name}
                      />
                    ))}
                  </div>
                </Sidebox>
                <Sidebox head="最新記事">
                  <div className="m-side-container">
                    {blogs.map((blog: any, index: number) => (
                      <SidePost
                        key={index}
                        link={`/blog/${blog.id}`}
                        publishedAt={blog.publishedAt}
                        title={blog.title}
                      />
                    ))}
                  </div>
                </Sidebox>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
