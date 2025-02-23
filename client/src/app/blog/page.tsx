"use client";
import { Newsletter } from "@/app/blog/newsletter";
import Pagination from "@/components/ui/Pagination";
import { Calendar, BookOpen } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FETCH_ARTICLES } from "../../../graphql/fetchHashnodePosts";
import { Posts } from "../../../types/types";
import Link from "next/link";
import { formatDate } from "@/utils/dateFormat";
import Loading from "../loading";
import ErrorPage from "../error";

const BlogPage: React.FC = () => {
  const [blogData, setBlogData] = useState<Posts>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [cursors, setCursors] = useState<string[]>([""]);
  const itemsPerPage = 6;

  const getPosts = async (after?: string) => {
    try {
      setLoading(true);
      setError(null);

      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };

      if (process.env.HASHNODE_TOKEN) {
        headers.Authorization = process.env.HASHNODE_TOKEN;
      }

      const response = await fetch("https://gql.hashnode.com/", {
        method: "POST",
        headers,
        body: JSON.stringify({
          query: FETCH_ARTICLES,
          variables: {
            after,
            host: "frankiefab.hashnode.dev",
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.errors) {
        throw new Error(result.errors[0]?.message || "GraphQL Error");
      }

      if (result.data?.publication?.posts?.edges) {
        setBlogData(result.data.publication.posts.edges);
        setHasNextPage(result.data.publication.posts.pageInfo.hasNextPage);

        // Store the cursor for the next page
        const newCursor = result.data.publication.posts.pageInfo.endCursor;
        setCursors((prev) => {
          const newCursors = [...prev];
          newCursors[currentPage] = newCursor;
          return newCursors;
        });
      } else {
        throw new Error("Invalid response structure");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setError(
        error instanceof Error ? error.message : "Failed to fetch blog posts"
      );
      setBlogData([]); // Reset blog data on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts(cursors[currentPage - 1]);
  }, [currentPage]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  if (!blogData.length) {
    return (
      <div className="text-gray-500 text-center py-16">No blog posts found</div>
    );
  }

  return (
    <section id="blog">
      <div className="py-24 max-w-7xl mx-auto lg:px-16 px-6">
        <div className="max-w-2xl mx-auto text-center mb-4">
          <h2 className="text-[#131313] dark:text-white text-center mb-2 tracking-tight lg:text-4xl text-3xl">
            Featured {""}
            <span className="text-cyan-600">Blog Posts</span>
          </h2>
          <p className="text-base sm:text-lg font-normal text-gray-700 dark:text-gray-400">
            Articles, guides, and resources on web development, design,
            blockchain, open source, and career tips.
          </p>
        </div>

        <ul className="grid gap-x-8 gap-y-10 mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.map((article, index) => (
            <Link
              className="w-full mx-auto group sm:max-w-sm"
              href={article.node.url as string}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={article.node.coverImage.url || ""}
                alt={article.node.title || ""}
                className="w-full rounded-lg"
                priority={index < 3}
                width={260}
                height={260}
              />
              <div className="mt-3 space-y-2">
                <h3 className="text-lg leading-6 text-gray-800 dark:text-gray-200 duration-150 group-hover:text-cyan-500 font-semibold">
                  {article.node.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm duration-150 group-hover:text-gray-500 pb-3">
                  {article.node.brief}
                </p>

                <div className="flex justify-between">
                  <div className="inline-flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar className="pr-1 h-5 w-5" />
                    {formatDate(article.node.publishedAt)}
                  </div>
                  <div className="inline-flex items-center mt text-gray-500 dark:text-gray-400 text-sm">
                    <BookOpen className="pr-1 items-center h-5 w-5" />
                    {article.node.readTimeInMinutes} min read
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </ul>

        <Pagination
          totalItems={
            hasNextPage
              ? currentPage * itemsPerPage + itemsPerPage
              : currentPage * itemsPerPage
          }
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          hasNextPage={hasNextPage}
        />

        <Newsletter />
      </div>
    </section>
  );
};

export default BlogPage;
