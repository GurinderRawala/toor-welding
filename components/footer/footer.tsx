import React,{ FC } from "react";
import { CopyRightContainer, FooterWrapper, InnerWrapper } from "./styled";
import { Box, Typography, useTheme } from "@mui/material";
import { footerConfig } from "./footer-config";
import { MapNavLinks } from "../navbar";
import { Theme } from "@mui/system";
import { LogoIcon } from "../logo-icon";

export const Footer: FC = () =>{
    const { palette: { mode } } = useTheme()
    return(
        <>
            <FooterWrapper>
                <InnerWrapper>
                    <LogoIcon 
                        viewBox="0 0 510.000000 489.000000" 
                        sx={{ height: 200, width: 300 }}
                        color={mode === "light" ? 'secondary' : 'primary'}
                    />
                </InnerWrapper>
                <AddressCard />
                <LinksCard />
            </FooterWrapper>
            <CopyRightContainer>Copyright &copy;{new Date().getFullYear()} Toor Welding. All rights reserved</CopyRightContainer>
        </>
    )
}


export const AddressCard: FC = () =>(
    <InnerWrapper sx={{gap: 3}}>
        <Typography fontSize={20} fontWeight={600}>{footerConfig.title}</Typography>
        <Box>
            <Typography>{footerConfig.address.street}</Typography>
            <Typography>{[footerConfig.address.city, footerConfig.address.province].join(",")} {footerConfig.address.postalCode}</Typography>
        </Box>
    </InnerWrapper>
)

export const LinksCard: FC = () =>(
    <InnerWrapper sx={{gap: 2}}>
        <MapNavLinks styles={{ color: (theme: Theme) => theme.palette.text.primary }}/>
    </InnerWrapper>
)