import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-black grid h-screen -mt-10 px-4 place-content-center">
      <div className="text-center">
        <Image
          src="/images/error404.svg"
          className="m-auto"
          width={280}
          height={280}
          alt="error illustration"
          priority
        />
        <h1 className="font-black text-gray-200 text-9xl">Oops!</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-200 sm:text-4xl">
          Page Not Found
        </p>

        <p className="mt-4 text-gray-500">
          We couldn&apos;t find the page you&apos;re looking for
        </p>

        <Link
          href="/"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-primary rounded hover:bg-primary/90 focus:outline-none"
          role="button"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
