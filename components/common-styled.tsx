import { Box } from "@mui/material";
import { styled } from "@mui/system";


export const RowWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 5
});

export const ColumnWrapper = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});