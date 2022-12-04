import React, { FC } from "react";
import { QUOTE_FORM_URL } from "../constents";
import { AppIframe } from "./app-iframe";
import { ColumnWrapper, ResponsiveContainer } from "./common-styled";

export const GetQuoteComponent: FC = () =>(
    <ResponsiveContainer>
        <ColumnWrapper sx={{minHeight: 700}}>
            <AppIframe  url={QUOTE_FORM_URL}/>
        </ColumnWrapper>
    </ResponsiveContainer>
)