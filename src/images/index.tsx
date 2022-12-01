import React from "react";

export interface ImageProps {
  alt: string;
  width: number;
  height: number;
  srcSet: [string, string][];
}

const Image: React.FC<ImageProps> = ({ alt, srcSet, ...props }) => (
  <img
    alt={alt}
    src={srcSet[0][0]}
    srcSet={srcSet.map((src) => src.join(" ")).join(", ")}
    {...props}
  />
);

export default Image;
