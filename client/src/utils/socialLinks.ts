import { Github, Instagram, Codepen, Codesandbox, Wallet } from "lucide-react";
import { SiBehance, SiBluesky, SiProducthunt, SiX } from "react-icons/si";

const socialLinks = [
  {
    href: "https://twitter.com/frankiefab100",
    icon: <SiX className="h-5 w-5" />,
    title: "Twitter",
    srOnly: "Twitter/X",
  },
  {
    href: "https://github.com/frankiefab100",
    icon: <Github className="h-5 w-5" />,
    title: "GitHub",
    srOnly: "GitHub",
  },
  {
    href: "https://instagram.com/frankiefab100",
    icon: <Instagram className="h-5 w-5" />,
    title: "Instagram",
    srOnly: "Instagram",
  },
  {
    href: "https://behance.net/frankiefab100",
    icon: <SiBehance className="h-5 w-5" />,
    title: "Behance",
    srOnly: "Behance",
  },
  {
    href: "https://bsky.app/profile/frankiefab.bsky.social",
    icon: <SiBluesky className="h-5 w-5" />,
    title: "Bluesky",
    srOnly: "Bluesky",
  },
  {
    href: "https://producthunt.com/@frankiefab100",
    icon: <SiProducthunt className="h-5 w-5" />,
    title: "Product Hunt",
    srOnly: "Product Hunt",
  },
  {
    href: "https://codepen.io/frankiefab100",
    icon: <Codepen className="h-5 w-5" />,
    title: "CodePen",
    srOnly: "CodePen",
  },
  {
    href: "https://codesandbox.io/frankiefab100",
    icon: <Codesandbox className="h-5 w-5" />,
    title: "CodeSandbox",
    srOnly: "CodeSandbox",
  },
  {
    href: "https://rainbow.me/frankiefab.eth",
    icon: <Wallet className="h-5 w-5" />,
    title: "Rainbow Wallet",
    srOnly: "Crypto Wallet",
  },
];

export default socialLinks;
