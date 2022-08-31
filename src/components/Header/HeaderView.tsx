// Styled Elements
import {
  MaterialUISwitch,
  SportalFormControlLabel,
  SportalAppBar, ModalBox, ModalButton, HeaderContainer
} from "./Header.styles";

// MUI Elements
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import MutationProviders from "../MutationProviders/MutationProviders";

// Context for the Theme
import { ColorModeContext } from "../../helper/Context";

// Hooks
import { useContext } from "react";

// Types
import { colorModeProps } from "../../store/types";

// React Hooks
import { useState } from "react";

const HeaderView = () => {
  const colorMode: colorModeProps = useContext(ColorModeContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SportalAppBar>
      <HeaderContainer>

          <ModalButton onClick={handleOpen}>Insert</ModalButton>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <ModalBox>
                <MutationProviders />
              </ModalBox>
            </Fade>
          </Modal>

        <SportalFormControlLabel
          label=""
          onClick={colorMode.toggleColorMode}
          control={<MaterialUISwitch defaultChecked />}
          data-testid="button"
        />
      </HeaderContainer>
    </SportalAppBar>
  );
};

export default HeaderView;
