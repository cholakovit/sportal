// MUI Elements
import Alert from "@mui/material/Alert";

// Functional Component
import { FC } from "react";

// Types
import { AlertProps } from "../../store/types";

const AlertView: FC<AlertProps> = ({ alert, type }) => {
  return <Alert severity={type} data-testid="alert">{alert}</Alert>
}

export default AlertView