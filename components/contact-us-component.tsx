import { Box, styled, Typography, useTheme } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import React, { FC } from "react";
import { CONTACT_US_FORM_URL } from "../constents";
import { AppIframe } from "./app-iframe";
import { ColumnWrapper, ResponsiveContainer, RowWrapper } from "./common-styled";
import { WeldingWrapperStyled as ContactUsWrapperStyled } from "./services-components";

export const ContactUsComponent: FC = () =>{
    const { palette: { mode } } = useTheme()
    return(
        <ResponsiveContainer>
            <ContactUsWrapperStyled sx={{gridTemplateColumns: "60% 40%"}}>
                <ColumnWrapper sx={{minHeight: 800}}>
                    <AppIframe url={`${CONTACT_US_FORM_URL}&mode=${mode}`}/>
                </ColumnWrapper>
                <ContactDetails />
            </ContactUsWrapperStyled>
        </ResponsiveContainer>
    )
}


export const ContactDetails: FC = () =>(
    <ContactDetailsStyled>
        <Typography variant="h2" mb={5}>{contactDetailsConfig.title}</Typography>
        <Typography variant="h4" alignSelf="flex-start">{contactDetailsConfig.contactPerson}</Typography>
        <DetailsContentStyled>
            <LocalPhoneIcon fontSize="large"/>
            <Typography>{contactDetailsConfig.phone}</Typography>
        </DetailsContentStyled>
        <DetailsContentStyled mb={5}>
            <EmailIcon fontSize="large"/>
            <Typography>{contactDetailsConfig.email}</Typography>
        </DetailsContentStyled>
        <Box fontSize={20} alignSelf="flex-start" mb={5}>
            <Typography variant="h4">Address</Typography>
            <Typography>
                {contactDetailsConfig.address.street} <br />
                {contactDetailsConfig.address.cityProvincePostalCode}
            </Typography>
        </Box>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.5557024280965!2d-79.76361968458663!3d43.74055585479573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b16381bc3ff3f%3A0x6721595fcb11fabb!2s90%20Blue%20Spruce%20St%2C%20Brampton%2C%20ON%20L6R%201C3!5e0!3m2!1sen!2sca!4v1639976857859!5m2!1sen!2sca" 
            width="100%" height="320" style={{ border:0 }} allowFullScreen loading="lazy"></iframe>
    </ContactDetailsStyled>
)

export const ContactDetailsStyled = styled(ColumnWrapper)(
    ({theme}) =>(
        {
            justifyContent: "flex-start",
            gap: 10,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(2)
        }
    )
)

export const DetailsContentStyled = styled(RowWrapper)(
    {
        width: "100%",
        alignItems: "center",
        fontSize: 20
    }
)

export type ContactDetailsConfig = {
    title: string;
    contactPerson: string;
    email: string;
    phone: string;
    address: {
        street: string;
        cityProvincePostalCode: string;
    }
}

export const contactDetailsConfig: ContactDetailsConfig = {
    title: `Toor Welding Inc.`,
    contactPerson: `Jarnail Singh Toor`,
    email: `jarnail@toorwelding.com`,
    phone: `+1(647)-321-6565`,
    address: {
        street: `90 Blue Spruce Street`,
        cityProvincePostalCode: `Brampton, ON L6R 1C3`
    }
}