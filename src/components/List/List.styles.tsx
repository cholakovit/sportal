// Styled Elements
import { styled } from "@mui/material/styles";

// MUI Elements
import { Container, Box, Typography } from "@mui/material";

export const Title = styled(Typography)({
  fontSize: '22px',
  padding: '10px 0'
});

export const ProvidersContainer = styled(Container)({
  marginTop: "100px",
});

export const ProvidersHolder = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
});
