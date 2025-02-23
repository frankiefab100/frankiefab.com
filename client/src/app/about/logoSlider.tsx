import Image from "next/image";
import Link from "next/link";
import Freecodecamp from "../../assets/logos/freecodecamp.svg";
import ReactPlay from "../../assets/logos/ReactPlay.svg";
import Ethereum from "../../assets/logos/Ethereum-Logo.svg";
import Astro from "../../assets/logos/astro-logo-dark.svg";
import DeveloperDAO from "../../assets/logos/DeveloperDAO.png";
import MDN from "../../assets/logos/Mozilla-MDN.svg";

const OSS_LOGOS = [
  {
    id: "freecodecamp",
    logo: (
      <Link
        key="freecode"
        href="https://freecodecamp.org"
        className="inline-flex flex-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={Freecodecamp}
          alt="Freecodecamp Logo"
          height={100}
          width={100}
        />
      </Link>
    ),
  },
  {
    id: "reactplay",
    logo: (
      <Link
        href="https://reactplay.io"
        className="inline-flex flex-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={ReactPlay} alt="ReactPlay Logo" height={100} width={100} />
      </Link>
    ),
  },
  {
    id: "ethereum",
    logo: (
      <Link
        href="https://ethereum.org"
        className="inline-flex flex-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={Ethereum} alt="ethereum Logo" height={100} width={100} />
      </Link>
    ),
  },
  {
    id: "astro",
    logo: (
      <Link
        href="https://astro.build"
        className="inline-flex flex-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={Astro} alt="Astro Logo" height={100} width={100} />
      </Link>
    ),
  },
  {
    id: "developerdao",
    logo: (
      <Link
        href="https://developerdao.com"
        className="inline-flex flex-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={DeveloperDAO}
          alt="Developerdao Logo"
          height={100}
          width={100}
        />
      </Link>
    ),
  },
  ,
  {
    id: "mdn",
    logo: (
      <Link
        href="https://developer.mozilla.org/en-US/"
        className="inline-flex flex-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src={MDN} alt="Mozilla-MDN Logo" height={100} width={100} />
      </Link>
    ),
  },
];

export const LogoSlider: React.FC = () => {
  return (
    <div className="md:py-8 py-2">
      <div className="max-w-screen-x">
        <h2 className="font-CooperHewittMedium text-[#131313] dark:text-white text-left tracking-tight lg:text-3xl md:text-2xl text-lg">
          Notable Contributions To Open Source
        </h2>
        <div className="relative m-auto overflow-hidden bg-none dark:bg-gray-200 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] dark:before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 dark:after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
          <div className="animate-infinite-slider flex w-[calc(250px*10)]">
            {OSS_LOGOS.map((icon) => (
              <div
                className="slide flex md:w-[180px] w-[140px] items-center justify-center"
                key={icon?.id}
              >
                {icon?.logo}
              </div>
            ))}
            {OSS_LOGOS.map((icon) => (
              <div
                className="slide flex md:w-[180px] w-[140px] items-center justify-center"
                key={icon?.id}
              >
                {icon?.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
