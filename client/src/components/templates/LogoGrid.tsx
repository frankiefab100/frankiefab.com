import Image from "next/image";
import Link from "next/link";

export const LogoGrid = () => {
  return (
    <div className="py-8 px-0 md:px-10 lg:px-16">
      {/* <div className="py-8 px-14 md:px-24 lg:px-34"> */}
      <div className="max-w-screen-x">
        <h2 className="font-bold text-[#131313] dark:text-white text-left mb-4 tracking-tight md:text-3xl text-2xl">
          Notable Contributions To {""}
          <span className="text-cyan-600">Open Source</span>
        </h2>
        <div className="mt-6">
          <ul className="bg-gray-100 flex gap-y-1 flex-wrap items-center justify-center">
            <Link
              href="https://freecodecamp.org"
              className="flex-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/freecodecamp.svg"
                alt="Freecodecamp Logo"
                height={160}
                width={160}
              />
            </Link>

            <Link
              href="https://reactplay.io"
              className="flex-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/ReactPlay.svg"
                alt="ReactPlay Logo"
                height={160}
                width={160}
              />
            </Link>

            <Link
              href="https://ethereum.org"
              className="flex-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/Ethereum-Logo.svg"
                alt="ethereum Logo"
                height={160}
                width={160}
              />
            </Link>

            <Link
              href="https://astro.buuild"
              className="flex-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/astro-logo-dark.svg"
                alt="Astro Logo"
                height={160}
                width={160}
              />
            </Link>

            <Link
              href="https://developerdao.com"
              className="flex-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/DeveloperDAO.png"
                alt="Developerdao Logo"
                height={160}
                width={160}
              />
            </Link>

            <Link
              href="https://developer.mozilla.org/en-US/"
              className="flex-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/Mozilla-MDN.svg"
                alt="Mozilla-MDN Logo"
                height={160}
                width={160}
              />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};
