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
            justifyContent: "flex-start",
            gap: 10,
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
        minHeight: 200
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