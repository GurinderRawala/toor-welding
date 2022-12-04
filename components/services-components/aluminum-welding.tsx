import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, List, ListItem, ListItemText, styled, Typography } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import React, { FC } from "react";
import { ColumnWrapper, RowWrapper, smallScreenFlex } from "../common-styled";
import { CustomList } from "../custom-list";
import { LOGO } from "../../constents";

export const AluminumWelding: FC = () =>(
    <WeldingWrapperStyled>
        <Card data-aos="fade-up">
            <CardHeader 
                avatar={
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={LOGO} alt="logo" height={100}/>
                }
                title={<Typography variant="h4">{serviceCardConfig.title}</Typography>}
            />
            <CardMedia
                component="img"
                height="200"
                image={serviceCardConfig.image}
                alt="welding Image"
            />
            <CardContent>
                <MapToAluminiumWelding />
            </CardContent>
            <CardActions>
                <CardFooterStyled>
                    <LocalPhoneIcon />
                    <Box>{serviceCardConfig.phone}</Box>
                </CardFooterStyled>
            </CardActions>
        </Card>
        <WeldingContentStyled data-aos="fade-up">
            <Typography variant="h2">{aluminumWeldingContentConfig.title}</Typography>
            <Typography>{aluminumWeldingContentConfig.body.partOne}</Typography>
            <Typography>{aluminumWeldingContentConfig.body.partTwo}</Typography>

            <OtherMaterialsStyled>
                <CustomList data={weldingMaterialContentConfig.listOne}/>
                <CustomList data={weldingMaterialContentConfig.listTwo}/>
            </OtherMaterialsStyled>
        </WeldingContentStyled>
    </WeldingWrapperStyled>
)

export const MapToAluminiumWelding: FC = () =>(
    <>
        {
            serviceListConfig.map(
                (service, index) =>(
                    <ListItem key={index} sx={{zIndex: 1}}>
                        <ListItemText primary={service} />
                    </ListItem>
                )
            )
        }
    </>
)

export const WeldingWrapperStyled = styled(Box)(
    ({theme}) =>(
        {
            display: 'grid',
            gridTemplateColumns: '30% 1fr',
            padding: theme.spacing(2),
            minHeight: 500,
            [theme.breakpoints.down("md")]: {
                ...smallScreenFlex
            }
        }
    )
)

export const OtherMaterialsStyled = styled(Box)(
    ({theme}) =>(
        {
            display: 'grid',
            gridTemplateColumns: `50% 50%`,
            gap: 30,
            minHeight: 300,
            [theme.breakpoints.down("md")]: {
                ...smallScreenFlex,
                gap: 20
            }
        }
    )
)

export const CardFooterStyled = styled(RowWrapper)(({theme}) =>({
    justifyContent: "center",
    gap: 10,
    alignItems: 'center',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.secondary,
    width: "100%"
}));

export const WeldingContentStyled = styled(ColumnWrapper)(
    ({theme}) =>(
        {
            justifyContent: "flex-start",
            gap: 10,
            padding: theme.spacing(2)
        }
    )
)

export const serviceListConfig: (string)[] = [
    "Aluminum Welding",
    "Mig Welding",
    "Flux Core",
    "Trailer Welding Repair"
];

export type ServiceCardConfig = {
    title: string;
    image: string;
    phone: string;
}

export const serviceCardConfig: ServiceCardConfig = {
    title: `Our Services`,
    image: `https://www.safetyandhealthmagazine.com/ext/resources/images/safety-tips/welder.jpg?1483464014`,
    phone: `+1 647-321-6565`
}

export type AluminumWeldingContentConfig = {
    title: string;
    body: {
        partOne: string;
        partTwo: string;
    }
}

export const aluminumWeldingContentConfig: AluminumWeldingContentConfig = {
    title: `Aluminum Welding`,
    body: {
        partOne: ` We primarily focus on our customer’s needs and our foremost goal is to deliver quality welds at low costs. 
        We offer specialized services for aluminum stainless steel, thin gauge fabrication, and on-site aluminum panel welding in the Brampton region.`,
        partTwo: `  No matter, you want to get your truck or any other aluminum material welded, Toor Welding Inc. is here to serve your needs. We are committed to producing top quality custom fabrication and welding services.
        We exceed our client’s expectations by delivering efficient and reliable aluminum welding. Other materials we weld:`
    }
}

export type WeldingMaterialContentConfig = {
    listOne: (string)[];
    listTwo: (string)[];
}

export const weldingMaterialContentConfig: WeldingMaterialContentConfig  = {
    listOne: [
        "Carbon Steel",
        "Low Alloy Steel",
        "Stainless (All types)"
    ],
    listTwo: [
        "Chromium",
        "Nickle Alloy",
        "Copper Alloy"
    ]
}