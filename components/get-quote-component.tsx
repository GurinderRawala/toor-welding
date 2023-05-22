import React, { FC } from "react";
import { QUOTE_FORM_URL } from "../constents";
import { AppIframe } from "./app-iframe";
import { ColumnWrapper, ResponsiveContainer } from "./common-styled";
import { useTheme } from "@mui/material";

export const GetQuoteComponent: FC = () =>{
    const { palette:{mode} } = useTheme()
    return(
        <ResponsiveContainer>
            <ColumnWrapper sx={{minHeight: 700}}>
                <AppIframe  url={`${QUOTE_FORM_URL}&mode=${mode}`}/>
            </ColumnWrapper>
        </ResponsiveContainer>
    )
}