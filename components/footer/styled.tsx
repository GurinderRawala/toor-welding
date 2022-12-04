import { Box, styled } from "@mui/material";

export const FooterWrapper = styled(Box)(
    ({theme}) =>({
        display: "grid",
        gridTemplateColumns: "33% 33% 1fr",
        padding: theme.spacing(1),
        minHeight: 300,
        [theme.breakpoints.down("md")]:{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }
    })
)

export const InnerWrapper = styled(Box)(
    {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: 300
    }
)

export const CopyRightContainer = styled(Box)(
    ({theme}) =>({
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(1),
        fontSize: 12,
        textAlign: "center",
    })
)