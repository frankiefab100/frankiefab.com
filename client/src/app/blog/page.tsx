"use client";
import { Newsletter } from "@/components/templates/Newsletter";
import Pagination from "@/components/ui/Pagination";
import { Calendar, BookOpen } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { FETCH_ARTICLES } from "../../../graphql/fetchHashnodePosts";
import { Posts } from "../../../lib/types";
import Link from "next/link";
import { formatDate } from "@/utils/dateFormat";
import Loading from "../loading";

const Page = () => {
  const [blogData, setBlogData] = useState<Posts>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [cursors, setCursors] = useState<string[]>([""]);
  const itemsPerPage = 6;

  const getPosts = useCallback(
    async (after?: string) => {
      try {
        setLoading(true);
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

        const result = await response.json();
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
          console.error("Invalid response structure:", result);
        }
      } catch (error) {
        setError("Failed to fetch blog posts");
      } finally {
        setLoading(false);
      }
    },
    [currentPage]
  );

  useEffect(() => {
    getPosts(cursors[currentPage - 1]);
  }, [currentPage, cursors, getPosts]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <Loading />;
  if (error)
    return <div className="text-red-500 text-center py-16">Error: {error}</div>;

  return (
    <section>
      <div className="py-24 max-w-7xl mx-auto lg:px-16 px-8">
        <div className="space-y-5 text-center mx-auto">
          <h2 className="font-bold text-white text-center mb-2 tracking-tight lg:text-4xl text-3xl">
            Featured <span className="text-cyan-600">Blog Posts</span>
          </h2>
          <p className="text-lg font-normal text-gray-700">
            I write about web development, open source, blockchain technology,
            programming tips, and more.
          </p>
        </div>

        <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
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
                priority
                width={260}
                height={260}
              />
              <div className="mt-3 space-y-2">
                <h3 className="text-lg text-gray-800 duration-150 group-hover:text-cyan-600 font-semibold">
                  {article.node.title}
                </h3>
                <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800 pb-3">
                  {article.node.brief}
                </p>

                <div className="flex justify-between">
                  <div className="inline-flex items-center mt-1 text-gray-500 text-sm">
                    <Calendar className="pr-1 h-5 w-5" />
                    {formatDate(article.node.publishedAt)}
                  </div>
                  <div className="inline-flex items-center mt-1 text-gray-500 text-sm">
                    <BookOpen className=" pr-1 items-center h-5 w-5" />
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

export default Page;
