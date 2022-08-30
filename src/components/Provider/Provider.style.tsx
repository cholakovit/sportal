// MUI Elements
import Box from "@mui/material/Box";

// Styled Elements
import { styled } from "@mui/material/styles";

export const Provider = styled(Box)(({ theme }) => ({
  padding: "10px",
  marginBottom: "20px",
  display: "flex",
  backgroundColor: theme.palette.primary.black,
  width: "14%",
  border: '1px solid white',
  marginRight: '20px',
  overflow: 'hidden'
}));

export const ProviderContent = styled(Box)(({ theme }) => ({
  width: "100%",
  overflow: "hidden",
}));

export const ProviderPropHolder1 = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.white,
}));

export const ProviderPropHolder2 = styled(Box)(({ theme }) => ({}));