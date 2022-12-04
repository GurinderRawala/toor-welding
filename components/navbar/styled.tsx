import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Link from "next/link";


export const NavbarWrapper = styled(Box)(
    ({theme}) => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: `0 ${theme.spacing(1)}`,
        height: 100,
        backgroundImage: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.secondary.main})`,
        position: 'sticky',
        top: 0,
        left: 0,
        zIndex: 3
    }))

export const NavbarLinksWrapper = styled(Box)(
    ({theme}) => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: theme.spacing(3),
        color: theme.palette.background.paper,
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: 8,
            alignItems: 'center',
        }
    })
);

export const NavBarLink = styled(Link)(
    ({theme}) =>({
        position: 'relative',
        textDecoration: 'none',
        color: theme.palette.background.default,
        fontSize: 14,
        fontWeight: 500,
        padding: theme.spacing(1),
        '&:hover': {
            '&::after': {
                content: `' '`,
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: `100%`,
                height: 2,
                backgroundColor: theme.palette.primary.main,
                borderRadius: theme.spacing(2)
            },
        }
    })
)

export const MobileLinksWrapper = styled(Box)(
    ({theme}) =>({
        position: 'absolute',
        top: 100,
        left: 0,
        width: '100%',
        backgroundImage: `linear-gradient(to right, ${theme.palette.background.paper}, ${theme.palette.secondary.main})`,
        padding: `${theme.spacing(2)} 0`
    }))