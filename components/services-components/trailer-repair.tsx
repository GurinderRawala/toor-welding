import { Typography } from "@mui/material";
import React, { FC } from "react";
import { ColumnWrapper } from "../common-styled";
import { CustomList } from "../custom-list";
import { ResponsiveImage } from "../responsive-image";
import { OtherMaterialsStyled, WeldingContentStyled, WeldingWrapperStyled } from "./aluminum-welding";

export const TrailerRepair: FC = () =>(
    <WeldingWrapperStyled sx={{ gridTemplateColumns: "auto 30%" }}>
        <WeldingContentStyled data-aos="fade-up">
            <Typography variant="h2">{trailerRepairConfig.title}</Typography>
            <Typography>{trailerRepairConfig.body}</Typography>
            <OtherMaterialsStyled>
                <CustomList data={trailerRepairConfig.listOne}/>
                <CustomList data={trailerRepairConfig.listTwo}/>
            </OtherMaterialsStyled>
        </WeldingContentStyled>
        <ColumnWrapper>
            <ResponsiveImage src={trailerRepairConfig.image}/>
        </ColumnWrapper>
    </WeldingWrapperStyled>
)

export type TrailerRepairConfig = {
    title: string;
    body: string;
    image: string;
    listOne: string[];
    listTwo: string[];
}

export const trailerRepairConfig: TrailerRepairConfig = {
    title: `Trailer Repair`,
    body: `Toor Welding Inc. has a team of expert welders who are highly experienced in providing box truck and rolling truck door repairs. No matter, which style or material the truck door is made of, we are proficient in repairing and welding them all. We are equipped with the late model equipment and tools to provide efficient repairs that tend to last for years to come. With our affordable services, we help save time and money of our customers. 
    Whether the truck door panel is damaged or needs to be replaced, rely on us. Being your local welding and fabrication company, we specialize in:`,
    image: `http://uploads.tapatalk-cdn.com/20201022/40fa517ded314bfcdb3e805ddff10d9f.jpg`,
    listOne: [
        "Box truck door panel repair",
        "Truck overhead door repair"
    ],
    listTwo: [
        "Rolling truck door repair",
        "Truck door broken hinges"
    ]
}

