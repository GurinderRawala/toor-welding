import Image from "next/image";
import React,{ FC } from "react";
import { CopyRightContainer, FooterWrapper, InnerWrapper } from "./styled";
import logo from "../../assests/ToorWeldingLogo-removebg.png";
import { Box, Typography } from "@mui/material";
import { footerConfig } from "./footer-config";
import { MapNavLinks } from "../navbar";
import { Theme } from "@mui/system";

export const Footer: FC = () =>(
    <>
        <FooterWrapper>
            <InnerWrapper>
                <Image src={logo} alt="footer-logo" height={200}/>
            </InnerWrapper>
            <AddressCard />
            <LinksCard />
        </FooterWrapper>
        <CopyRightContainer>Copyright &copy;{new Date().getFullYear()} Toor Welding. All rights reserved</CopyRightContainer>
    </>
)


export const AddressCard: FC = () =>(
    <InnerWrapper sx={{gap: 6}}>
        <Typography fontSize={20} fontWeight={600}>{footerConfig.title}</Typography>
        <Box>
            <Typography>{footerConfig.address.street}</Typography>
            <Typography>{[footerConfig.address.city, footerConfig.address.province].join(",")} {footerConfig.address.postalCode}</Typography>
        </Box>
    </InnerWrapper>
)

export const LinksCard: FC = () =>(
    <InnerWrapper sx={{gap: 2}}>
        <MapNavLinks styles={{ color: (theme: Theme) => theme.palette.secondary.main }}/>
    </InnerWrapper>
)