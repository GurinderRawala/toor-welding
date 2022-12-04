import React, { CSSProperties, FC, DetailedHTMLProps, ImgHTMLAttributes } from "react";

export interface ResponsiveImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    customStyles?: CSSProperties
}

export const ResponsiveImage: FC<ResponsiveImageProps> = ({ customStyles, ...props}) =>(
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} style={{ maxWidth: "100%", height: "auto", borderRadius: "10px", ...customStyles }} alt="image-local-toor-welding"/>
)