// Styled Elements
import { styled } from "@mui/material/styles";

// MUI Elements
import { Box, Typography } from "@mui/material";

export const FormTitleHolder = styled(Typography)(({ theme }) => ({
    borderBottom: '1px solid ' + theme.palette.primary.white,
    padding: '10px'
}));

export const FieldHolder = styled(Box)(({ theme }) => ({
    margin: '10px'
}));

export const FormHolder = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
}));

export const ButtonHolder = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end'
}));