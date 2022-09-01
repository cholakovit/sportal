import { AlertColor } from "@mui/material";

// for the Theme
export type colorModeProps = {
  toggleColorMode?: any;
};

// for Errors
export type errorProps = {
  error: string;
};

// for the Skeleton
export type SkeletonProps = {
  flag: number;
  width: number;
  height: number;
};

// For the Providers
export type ProvidersProps = {
  provider: ProviderProps
}

// For the Provider
export type ProviderProps = {
  provider: number
  day: number
  year: number
  page: string
  views: number
}

export type AlertProps = {
  alert: string
  type: any
}