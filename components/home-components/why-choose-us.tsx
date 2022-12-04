import { styled, Typography } from "@mui/material";
import React, { FC } from "react";
import { ColumnWrapper, ResponsiveContainer } from "../common-styled";

export const WhyChooseUs: FC = () =>(
    <WhyChooseUsStyled>
        <Typography variant="h2">{whyChooseUsConfig.title}</Typography>
        <ResponsiveContainer>{whyChooseUsConfig.body}</ResponsiveContainer>
    </WhyChooseUsStyled>
)

export const WhyChooseUsStyled = styled(ColumnWrapper)(
    ({theme}) =>(
        {
            backgroundColor: theme.palette.secondary.main,
            padding: theme.spacing(2),
            minHeight: 550,
            justifyContent: "space-evenly",
            color: theme.palette.text.secondary
        }
    )
)

export type WhyChooseUsConfig = {
    title: string;
    body: string;
}

export const whyChooseUsConfig: WhyChooseUsConfig = {
    title: `Why Toor Welding?`,
    body: `  Toor Welding Inc. is a leading welding company in Brampton that is proudly serving the residents with highly effective and reliable welding services. 
    With a team of licensed and insured welders, we know how to bring your
    damaged metal equipment back into shape. By exceeding our client’s expectations with 100% satisfied services, we have managed to earn an industry reputation.
    We have partnered with the leading suppliers and brands to provide top-notch repairs and replacements.
    To prevent any hassles, we deliver efficient on-site repairs with a fast response time.`
}