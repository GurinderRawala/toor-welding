import { useTheme } from "@mui/material";
import { FC } from "react";

export interface AppIframeProps{
    url: string;
}

export const AppIframe: FC<AppIframeProps> = ({
    url
}) =>{
    return(
        <iframe src={url} style={{
            height: 600,
            border: "none",
            width: "100%",
        }}/>
    )
}