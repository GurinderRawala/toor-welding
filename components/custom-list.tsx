import { Box, List, ListItem, ListItemText, styled } from "@mui/material";
import React, { FC } from "react";
import { ColumnWrapper } from "./common-styled";

export interface CustomListProps{
    data: (string)[]
}

export const CustomList: FC<CustomListProps> = ({
    data
}) =>(
    <ColumnWrapper sx={{gap: 3}}>
        {
            data.map(
                (item, index) =>(
                    <ListItemStyled key={index}>
                        {item}
                    </ListItemStyled>
                )
            )
        }
    </ColumnWrapper>
)

export const ListItemStyled = styled(Box)(
    ({theme}) =>(
        {
            border: `1px solid ${theme.palette.secondary.main}`,
            borderRadius: theme.spacing(1),
            padding: theme.spacing(2),
            width: 250
        }
    )
)