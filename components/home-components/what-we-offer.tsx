import { Box, styled } from "@mui/material";
import Typography from "@mui/material/Typography/Typography";
import React, { FC } from "react";
import { ColumnWrapper } from "../common-styled";
import { ResponsiveImage } from "../responsive-image";

export const WhatWeOffer: FC = () =>(
    <WhatWeOfferStyled data-aos="fade-up">
        <Typography variant="h2">{whatWeOfferConfig.title}</Typography>
        <Box className="__servicesGrid">
            <MapTopServicesGrid />
        </Box>
    </WhatWeOfferStyled>
)

export const MapTopServicesGrid: FC = () =>(
    <>
        {
            whatWeOfferConfig.servicesGrid.map(
                ({url, title, message}, index) =>(
                    <ColumnWrapper key={[url,index].join("-")} sx={{ justifyContent: "flex-start", gap: 5, minHeight: 350}}>
                        <ResponsiveImage  src={url} customStyles={{ height: 200 }}/>
                        <Typography variant="h4">{title}</Typography>
                        <Typography>{message}</Typography>
                    </ColumnWrapper>
                )
            )
        }
    </>
)

export const WhatWeOfferStyled = styled(ColumnWrapper)(
    ({theme}) =>(
        {
            justifyContent: "space-evenly",
            padding: theme.spacing(2),
            minHeight: 700,
            '& > .__servicesGrid': {
                display: "grid",
                gridTemplateColumns: "25% 25% 25% 25%",
                gap: 10,
                width: "80%",
                margin: "auto",
                [theme.breakpoints.down("md")]: {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    gap: 10
                }
            }
           
        }
    )
)

export type ServicesGrid = {
    url: string;
    title: string;
    message: string;
}

export type WhatWeofferConfig = {
    title: string;
    servicesGrid: ServicesGrid[]
}

export const whatWeOfferConfig: WhatWeofferConfig = {
    title: `What We Offer?`,
    servicesGrid: [
        {
            url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1doaNKpQ98hjObbZlTHM1Q7SQsfxWSc--8g&usqp=CAU`,
            title: `Aluminum Welding`,
            message: `We offer specialized welding service for aluminum, panel welding, door repairs at affordable costs.`
        },
        {
            url: `https://www.twi-global.com/image-library/hero/flux-cored-arc-welding-8369053905-3f2bce87b3-o.jpg`,
            title: `Flux Core Welding`,
            message: `Toor Welding is expert in Flex core welding. We are the perfect stop to get your heavy-duty equipment fixed. 
            We offer on-side mobile Flex core welding. Toor Welding is dedicated to provide service with perfection.`
        },
        {
            url: `https://www.utilitytrailer.com/wp-content/uploads/dryvan-360-081.jpg`,
            title: `Dry Van Repair`,
            message: `Right from the dry van roof to walls and landing gear, our professionals serve you with durable repairs.`
        },
        {
            url: `https://centralmobilewelding.ca/wp-content/uploads/2020/04/Welded-Aluminum-Patch-Onto-Trailer-Side-Rails.jpg`,
            title: `Trailer Roof Repair`,
            message: `We are equipped with the latest tools and equipment to deliver high quality roof skin and side panel repairs`
        }
    ]
}