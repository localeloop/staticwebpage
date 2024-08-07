import { ImageProps } from "../types";

export const Image = ({ src, height, width, alt }: ImageProps) => (
  <img src={`${src}`} alt={alt} height={height} width={width} />
);
