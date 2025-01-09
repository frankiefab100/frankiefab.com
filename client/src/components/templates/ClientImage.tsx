"use client";

import Image from "next/image";

interface ClientImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ClientImage: React.FC<ClientImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default ClientImage;
