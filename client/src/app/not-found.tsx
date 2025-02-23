import Image from "next/image";
import Link from "next/link";
import Error404 from "../assets/images/error404.svg";

export default function NotFound() {
  return (
    <div className="bg-white dark:bg-black grid h-screen -mt-10 px-4 place-content-center">
      <div className="text-center">
        <Image
          src={Error404}
          className="m-auto"
          width={280}
          height={280}
          alt="error illustration"
          priority
        />
        <h1 className="font-black text-gray-800 dark:text-gray-200 lg:text-9xl text-6xl">
          Oops!
        </h1>

        <p className="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-200 sm:text-4xl">
          Page Not Found
        </p>

        <p className="my-2 text-gray-500 dark:text-gray-300">
          We couldn&apos;t find the page you&apos;re looking for
        </p>

        <Link
          href="/"
          className="inline-block px-5 py-3 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
          role="button"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
