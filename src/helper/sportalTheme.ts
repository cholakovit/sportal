// Styled Elements
import { createTheme } from "@mui/material/styles";

// Hooks
import { useMemo } from "react";

// Colors
import { colors } from "@mui/material";

export const sportalTheme = (mode: any) => {
  // memoizing the result so it won't calculate every time
  const theme = useMemo(
    () =>
      createTheme({
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                margin: 0,
                mode,
                ...(mode === "light"
                  ? {
                      backgroundColor: colors.orange[800],
                    }
                  : {
                      backgroundColor: colors.orange[900],
                    }),
              },
            },
          },
        },
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                primary: {
                  main: colors.orange[800],
                  black: colors.grey[800],
                  white: colors.grey[100],
                  iconColor: colors.grey[900],
                },
              }
            : {
                // palette values for dark mode
                primary: {
                  main: colors.orange[900],
                  black: colors.grey[900],
                  white: colors.grey[600],
                  iconColor: colors.grey[100],
                },
              }),
        },
      }),
    [mode]
  );

  return theme;
};
