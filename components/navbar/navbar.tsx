import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import React, { FC, useState } from "react";

import { MobileLinksWrapper, NavBarLink, NavbarLinksWrapper, NavbarWrapper } from "./styled";
import logo from "../../assests/ToorWeldingLogo-removebg.png";
import { navbarConfig } from "./navbar-config";
import Link from "next/link";

export const Navbar: FC = () =>{
    return(
        <NavbarWrapper>
            <Link href="/">
                <Image src={logo} alt="toor-welding-logo" height="100"/>
            </Link>
            <NavbarLinks />
        </NavbarWrapper>
    )
}

export const MapNavLinks: FC = () =>(
    <>
        {
            navbarConfig.map(
                ({name, route}, index) => (
                    <NavBarLink  href={route} key={[name, index].join("-")}>{name.toUpperCase()}</NavBarLink>
                )
            )
        }
        <Button variant="contained" size="small">Get a Quote</Button>
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
                        <Button variant="contained" size="small" sx={{ alignSelf: 'center'}} onClick={onClick} >
                            {
                                showMenu ?(
                                    <CloseIcon />
                                ): (
                                    <MenuIcon />
                                )
                            }
                        </Button>
                    ): ( 
                        <NavbarLinksWrapper>  
                            <MapNavLinks />
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