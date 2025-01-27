import Image from "next/image";
import Link from "next/link";

export const LogoGrid = () => {
  return (
    <div className="md:py-8 py-2">
      <div className="max-w-screen-x">
        <h2 className="font-CooperHewittMedium text-[#131313] dark:text-white text-left tracking-tight md:text-3xl text-2xl">
          Notable Contributions To {""}
          <span className="text-cyan-600">Open Source</span>
        </h2>
        <div className="overflow-hidden bg-none dark:bg-gray-400">
          {/* Static on Desktop view */}
          <div className="hidden lg:block">
            <ul className="flex gap-8 items-center justify-center">
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

          {/* Scroll on Mobile view*/}
          <div className="lg:hidden relative w-full">
            <div className="flex animate-scroll whitespace-nowrap">
              <div className="flex items-center gap-4 pr-4">
                <Link
                  href="https://freecodecamp.org"
                  className="inline-flex flex-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/freecodecamp.svg"
                    alt="Freecodecamp Logo"
                    height={100}
                    width={100}
                  />
                </Link>

                <Link
                  href="https://reactplay.io"
                  className="inline-flex flex-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/ReactPlay.svg"
                    alt="ReactPlay Logo"
                    height={100}
                    width={100}
                  />
                </Link>

                <Link
                  href="https://ethereum.org"
                  className="inline-flex flex-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/Ethereum-Logo.svg"
                    alt="ethereum Logo"
                    height={100}
                    width={100}
                  />
                </Link>

                <Link
                  href="https://astro.buuild"
                  className="inline-flex flex-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/astro-logo-dark.svg"
                    alt="Astro Logo"
                    height={100}
                    width={100}
                  />
                </Link>

                <Link
                  href="https://developerdao.com"
                  className="inline-flex flex-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/DeveloperDAO.png"
                    alt="Developerdao Logo"
                    height={100}
                    width={100}
                  />
                </Link>

                <Link
                  href="https://developer.mozilla.org/en-US/"
                  className="inline-flex flex-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/icons/Mozilla-MDN.svg"
                    alt="Mozilla-MDN Logo"
                    height={100}
                    width={100}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
