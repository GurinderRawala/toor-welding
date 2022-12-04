import { Theme, Typography } from "@mui/material";
import { FC } from "react";
import { ColumnWrapper } from "../common-styled";
import { CustomList } from "../custom-list";
import { ResponsiveImage } from "../responsive-image";
import { OtherMaterialsStyled, WeldingContentStyled, WeldingWrapperStyled } from "./aluminum-welding";
import { TrailerRepairConfig } from "./trailer-repair";

export const TrailerRoofRepair: FC = () =>(
    <WeldingWrapperStyled sx={weldingWrapperExt}>
        <ColumnWrapper>
            <ResponsiveImage src={trailerRoofRepairConfig.image}/>
        </ColumnWrapper>

        <WeldingContentStyled>
            <Typography variant="h2">{trailerRoofRepairConfig.title}</Typography>
            <Typography>{trailerRoofRepairConfig.body}</Typography>
            <OtherMaterialsStyled>
                <CustomList data={trailerRoofRepairConfig.listOne}/>
                <CustomList data={trailerRoofRepairConfig.listTwo}/>
            </OtherMaterialsStyled>
        </WeldingContentStyled>
    </WeldingWrapperStyled>
)

export const weldingWrapperExt = (theme: Theme) =>({
    [theme.breakpoints.down("md")]:{
        flexDirection: "column-reverse"
    }
})

export const trailerRoofRepairConfig: TrailerRepairConfig = {
    title: `Roof Skin & Side Panels`,
    body: `Is your metal roof, or side panel damaged? Our team of roof welders at Toor Welding Inc. is capable of repairing and welding the corroded roof skin in the most effective way. No matter, how severe the damage is, we are equipped with the latest tools and equipment to ensure a high quality roof skin and side panel repair. To meet your needs with the industry standards, we provide an epoxy finish which 
    will make your trailer look like new. No matter, what kind of truck or trailer you own, we provide best-in-class welding repairs for dry vans. We offer:`,
    listOne: [
        "Roof Repair",
        "Roof Welding"
    ],
    listTwo: [
        "Panel Repair",
        "Panel Welding"
    ],
    image: `https://ryder.com/used-trucks/-/media/project/usedtrucks/uvs/images/vehicles/types/truck-types---trailers/truck_types_dry_trailer_image.jpg?h=468&iar=0&w=624&hash=52E64E750AF48F5CC51C32A2A31C7F91`
}