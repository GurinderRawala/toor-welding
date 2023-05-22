import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import React, { FC, useState } from "react";

import { MobileLinksWrapper, NavBarLink, NavbarLinksWrapper, NavbarWrapper } from "./styled";
import { navbarConfig } from "./navbar-config";
import Link from "next/link";
import { SxProps, Theme } from '@mui/system';
import { ThemeSwitch } from '../theme-switch';
import { LogoIcon } from '../logo-icon';

export const Navbar: FC = () =>{
    const { palette: { mode } } = useTheme()
    return(
        <NavbarWrapper>
            <Link href="/">
                <LogoIcon 
                    viewBox="0 0 510.000000 489.000000" 
                    sx={{ height: 100, width: 100 }}
                    color={mode === "light" ? 'secondary' : 'primary'}
                />
            </Link>
            <NavbarLinks />
        </NavbarWrapper>
    )
}

export interface MapNavLinksProps{
    styles?: SxProps<Theme>
}

export const MapNavLinks: FC<MapNavLinksProps> = ({
    styles = {}
}) =>(
    <>
        {
            navbarConfig.map(
                ({name, route}, index) => (
                    <NavBarLink  href={route} key={[name, index].join("-")} sx={styles}>{name.toUpperCase()}</NavBarLink>
                )
            )
        }
        <Button variant="contained" size="small" href="/get-quote.html">Get a Quote</Button>
    </>
)

export const NavbarLinks: FC = () =>{
    const theme = useTheme();
    const mobileTablate = useMediaQuery(theme.breakpoints.down('md'));
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const onClick = () =>{
        setShowMenu(!showMenu);
    }
    
    return (
        <>
            {
                mobileTablate 
                    ?(
                        <Box sx={{alignSelf: 'center', display: 'flex', justifyContent: 'center', gap: 0.5}}>
                            <Button variant="contained" size="small" sx={{ alignSelf: 'center'}} onClick={onClick} >
                                {
                                    showMenu ?(
                                        <CloseIcon />
                                    ): (
                                        <MenuIcon />
                                    )
                                }
                            </Button>
                            <ThemeSwitch />
                        </Box>
                    ): ( 
                        <NavbarLinksWrapper>  
                            <MapNavLinks />
                            <ThemeSwitch />
                        </NavbarLinksWrapper>
                    )
            }
            {
                mobileTablate && showMenu && (
                    <MobileLinksWrapper>
                        <NavbarLinksWrapper>  
                            <MapNavLinks />
                        </NavbarLinksWrapper>
                    </MobileLinksWrapper>
                )
            }
        </>
    )
}